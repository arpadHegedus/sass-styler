const {readdir, writeFile} = require('fs/promises')
readdir(`./src`).then(files => {
    files = `@forward "${files.map(file => file.replace('.scss', '')).join(`";\n@forward "`)}";`
    writeFile(`./styler.scss`, files)
})
