const sassdoc = require('sassdoc')
const { readFile, writeFile } = require('fs/promises')

async function getReadme() {
    const readme = (await readFile('README.md')).toString()
    if (-1 === readme.indexOf('<!-- start automated part -->') || -1 === readme.indexOf('<!-- end automated part -->')) return null
    return (
        readme.split('<!-- start automated part -->')[0] +
        '#############insert#############' +
        readme.split('<!-- start automated part -->')[1].split('<!-- end automated part -->')[1]
    )
}

function parseData(data) {
    const parsed = {
        mixin: [],
        function: [],
        variable: []
    }
    data.forEach(d => {
        if ('public' === d.access) {
            let type = d.context.type
            parsed[type].push(d)
        }
    })
    return parsed
}

function writeLongEntity(e, type = 'mixin') {
    let c = ''
    c += '\n'
    c += `#### ${e.context.name} <a id="${type}-${e.context.name}">&nbsp;</a>\n${e.description}\n`
    c += writeShortEntity(e, type)
    c += e.example ? `\n**Example:**\n\`\`\`scss\n${e.example.map(ex => ex.code).join('')}\n\`\`\`\n` : ''
    c += `\n**Type:** ${type}\n`
    c += e.alias ? `\n**Alias of:** ${e.alias}\n` : ''
    if (e.parameter && e.parameter.length > 0) {
        c += `\n**Parameters:**\n<table>\n  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr>`
        e.parameter.forEach(p => {
            c += `<tr><td>${p.name}</td><td>${p.description}</td><td>${p.type.split('|').map(pt => `<code>${pt}</code>`).join(' ')}</td><td>${p.default || '-'}</td></tr>`
        })
        c += '</table>\n'
    }
    c += e.require && e.require.length > 0 ? `\n**Requires:** ${e.require.map(t => `<a href="/src/${t.item.file.path.replace('\\', '/')}">${t.item.context.name}</a>`).reduce((u, i) => u.includes(i) ? u : [...u, i], []).join(', ')}\n` : ''
    c += `\n**File source:** <a href="/src/${e.file.path.replace('\\', '/')}">src/${e.file.path.replace('\\', '/')}</a>\n`
    let code = null
    if ('function' === type) {
        code = `@function ${e.context.name}(${e.parameter.map(p => `$${p.name}`).join(', ')}) {${e.context.code}}`
    }
    c += code ? `<details><summary><strong>Source</strong></summary>\n\n\`\`\`scss \n\n${code}\n\`\`\`\n\n</details>\n` : ''
    c += '\n<br>\n\n'
    return c
}

function writeShortEntity(e, type = 'mixin') {
    let prepend = 'variable' === type ? '$' : ('mixin' === type ? '@include ' : '')
    let append = e.parameter ? `(${e.parameter.map(p => `$${p.name}`).join(', ')})` : ''
    return `\`\`\`scss\n${prepend}${e.context.name}${append}\n\`\`\``
}

async function writeToReadme(data) {
    let readme = await getReadme()
    if (!readme) return
    data = parseData(data)
    let doc = '<!-- start automated part -->\n'
    doc += '**Table of Content**\n\n'
    doc += '<table>\n'
    doc += '<tbody>\n'
    doc += '    <tr>\n'
    doc += `      <td style="vertical-align:top" rowspan="${data.mixin.length}">Mixins</td>\n`
    doc += `      <td style="vertical-align:top">${data.mixin.filter((e,i) => i === 0).map(e => `<a href="#mixin-${e.context.name}">${e.context.name}</a></td><td style="vertical-align:top">${e.description.trim()}${e.alias ? ` (alias of ${e.alias})` : ''}`)}</td>\n`
    doc += '    </tr>\n'
    doc += data.mixin.filter((e, i) => i !== 0).map(e => `    <tr>\n      <td style="vertical-align:top"><a href="#mixin-${e.context.name}">${e.context.name}</a></td><td style="vertical-align:top">${e.description.trim()}${e.alias ? ` (alias of ${e.alias})` : ''}</td>\n    </tr>\n`).join('')

    doc += '    <tr>\n'
    doc += `      <td style="vertical-align:top" rowspan="${data.function.length}">Functions</td>\n`
    doc += `      <td style="vertical-align:top">${data.function.filter((e,i) => i === 0).map(e => `<a href="#mixin-${e.context.name}">${e.context.name}</a></td><td style="vertical-align:top">${e.description.trim()}${e.alias ? ` (alias of ${e.alias})` : ''}`)}</td>\n`
    doc += '    </tr>\n'
    doc += data.function.filter((e, i) => i !== 0).map(e => `    <tr>\n      <td style="vertical-align:top"><a href="#mixin-${e.context.name}">${e.context.name}</a></td><td style="vertical-align:top">${e.description.trim()}${e.alias ? ` (alias of ${e.alias})` : ''}</td>\n    </tr>\n`).join('')

    doc += '    <tr>\n'
    doc += `      <td style="vertical-align:top" rowspan="${data.variable.length}">Variables</td>\n`
    doc += `      <td style="vertical-align:top">${data.variable.filter((e,i) => i === 0).map(e => `<a href="#mixin-${e.context.name}">${e.context.name}</a></td><td style="vertical-align:top">${e.description.trim()}${e.alias ? ` (alias of ${e.alias})` : ''}`)}</td>\n`
    doc += '    </tr>\n'
    doc += data.variable.filter((e, i) => i !== 0).map(e => `    <tr>\n      <td style="vertical-align:top"><a href="#mixin-${e.context.name}">${e.context.name}</a></td><td style="vertical-align:top">${e.description.trim()}${e.alias ? ` (alias of ${e.alias})` : ''}</td>\n    </tr>\n`).join('')

    doc += '\n  </tbody>\n</table>\n\n';

    doc += data.mixin ? `### Mixins\n\n${data.mixin.map(e => writeLongEntity(e, 'mixin')).join('\n\n')}` : ''
    doc += data.function ? `### Functions\n\n${data.function.map(e => writeLongEntity(e, 'function')).join('\n\n')}` : ''
    doc += data.variable ? `### Variables\n\n${data.variable.map(e => writeLongEntity(e, 'variable')).join('\n\n')}` : ''
    doc += '\n<!-- end automated part -->'
    readme = readme.replace('#############insert#############', doc)
    writeFile('README.md', readme)
}

sassdoc.parse('./src', {
    verbose: true,
    autofill: true
}).then(async data => writeToReadme(data))
