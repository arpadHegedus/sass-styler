const {readdir, writeFile} = require('fs/promises')
readdir(`./src`).then(files => {
    files = `@forward "src/${files.map(file => file.replace('.scss', '')).join(`";\n@forward "src/`)}";`
    writeFile(`./styler.scss`, files)
})
