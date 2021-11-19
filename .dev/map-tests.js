import fs from 'fs/promises'
let c = `const sassTrue = require('sass-true')\nconst path = require('path')\n\n`;
import('globby')
    .then(({default: globby}) => globby('./test/**'))
    .then(fls => new Promise((resolve, reject) => {
        fls.forEach(f => c += `sassTrue.runSass({file: path.resolve('${f}') }, { describe, it })\n`)
        resolve()
    }))
    .then(() => {
        fs.writeFile('test.js', c)
    })

