const {writeFile} = require('fs/promises')
let c = `const sassTrue = require('sass-true')\nconst path = require('path')\n\n`;
import('globby')
    .then(({globby}) => globby('./test/**'))
    .then(fls => new Promise((resolve, reject) => {
        fls.forEach(f => c += `sassTrue.runSass({ describe, it }, path.resolve('${f}'))\n`)
        resolve()
    }))
    .then(() => {
        writeFile('test.js', c)
    })

