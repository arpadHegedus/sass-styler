import sassdoc from 'sassdoc'
import { readFile, writeFile } from 'fs/promises'

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
        theme: {
            name: 'Theme',
            description: 'helpers to create your own design system',
            data: {
                mixin: [],
                function: [],
                variable: []
            }
        },
        utility: {
            name: 'Utilities',
            description: 'a huge array of mixins and functions',
            data: {
                mixin: [],
                function: [],
                variable: []
            }
        },
        animation: {
            name: 'Animation',
            description: 'sass versions of animista',
            data: {
                mixin: [],
                function: [],
                variable: []
            }
        }
    }
    data.forEach(d => {
        if ('public' === d.access) {
            let group = d.group[0]
            let type = d.context.type
            parsed[group].data[type].push(d)
        }
    })
    return parsed
}

function writeLongEntity(e, type = 'mixin') {
    let c = ''
    c += '\n'
    c += `#### ${e.context.name} <a id="${type}-${e.context.name}">&nbsp;</a>\n${e.description}\n`
    c += writeShortEntity(e, type)
    c += `\n**Type:** ${type}\n`
    if (e.parameter && e.parameter.length > 0) {
        c += `**Parameters:**\n<table>\n  <tr><th>name</th><th>description</th><th>type</th><th>default</th></tr>`
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
    c += '\n<br>\n'
    return c
}

function getTypesByGroup(group) {
    const types = {
        mixin: false,
        function: false,
        variable: false,
        list: []
    };
    (['mixin', 'function', 'variable']).forEach(t => {
        if (group.data[t].length > 0) {
            types[t] = true
            types.list.push(t)
        }
    });
    return types
}

async function writeToDocs(data) {
    Object.entries(data).map(([slug, group]) => {
        let types = getTypesByGroup(group)
        let c = `# SASS STYLER\n\n## ${slug.toUpperCase()}\n\n${group.description[0].toUpperCase() + group.description.slice(1)}\n\n`
        c += '**Table of Content**\n\n'
        c += '<table>\n  <thead>\n    <tr>\n'
        c += types.list.map(t => `      <th>${t[0].toUpperCase() + t.slice(1)}</th>`).join('\n')
        c += '\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n'
        c += types.mixin ? `      <td style="vertical-align:top">\n${group.data.mixin.map(e => `        <a href="#mixin-${e.context.name}">${e.context.name}</a>`).join('\n        <br>\n')}\n      </td>\n` : ''
        c += types.function ? `      <td style="vertical-align:top">\n${group.data.function.map(e => `        <a href="#function-${e.context.name}">${e.context.name}</a>`).join('\n        <br>\n')}\n      </td>\n` : ''
        c += types.variable ? `      <td style="vertical-align:top">\n${group.data.variable.map(e => `        <a href="#variable-${e.context.name}">${e.context.name}</a>`).join('\n        <br>\n')}\n      </td>\n` : ''
        c += '    </tr>\n  </tbody>\n</table>\n\n';

        c += types.mixin ? `### Mixins\n\n${group.data.mixin.map(e => writeLongEntity(e, 'mixin')).join('\n\n')}` : ''
        c += types.function ? `### Functions\n\n${group.data.function.map(e => writeLongEntity(e, 'function')).join('\n\n')}` : ''
        c += types.variable ? `### Variables\n\n${group.data.variable.map(e => writeLongEntity(e, 'variable')).join('\n\n')}` : ''

        c += '\n\n<a href="/README.md">Back to Sass Styler</a>\n'

        writeFile(`./doc/${slug.toUpperCase()}.md`, c)
    })
}

function writeShortEntity(e, type = 'mixin') {
    let prepend = 'variable' === type ? '$' : ('mixin' === type ? '@include ' : '')
    let append = e.parameter ? `(${e.parameter.map(p => `$${p.name}`).join(', ')})` : ''
    if (e.alias) {
        prepend = `/* alias of ${e.alias} */\n${prepend}`
    }
    return `\`\`\`scss\n/* ${e.description.trim()} */\n${prepend}${e.context.name}${append}\n\`\`\``
}

async function writeToReadme(data) {
    let readme = await getReadme()
    if (!readme) return
    let doc = '<!-- start automated part -->\n'
    Object.entries(data).forEach(([slug, group]) => {
        let types = getTypesByGroup(group)
        let c = ''
        c += types.mixin ? `\n#### Mixins\n\n${group.data.mixin.map(e => writeShortEntity(e, 'mixin')).join('\n')}` : ''
        c += types.function ? `\n#### Functions\n\n${group.data.function.map(e => writeShortEntity(e, 'function')).join('\n')}` : ''
        c += types.variable ? `\n#### Variables\n\n${group.data.variable.map(e => writeShortEntity(e, 'variable')).join('\n')}` : ''
        if (0 !== c.length) {
            doc += '\n<details>'
            doc += `\n  <summary>\n    <h3 style="display:inline">${group.name}</h3> - ${group.description} - <a href="doc/${slug.toUpperCase()}.md">read docs</a>\n  </summary>\n`
            doc += c
            doc += '\n</details>'
        }
    })
    doc += '\n<!-- end automated part -->'
    readme = readme.replace('#############insert#############', doc)
    writeFile('README.md', readme)
}

sassdoc.parse('./src', {
    verbose: true,
    autofill: true
}).then(async data => {
    data = parseData(data)
    writeToReadme(data)
    writeToDocs(data)
})
