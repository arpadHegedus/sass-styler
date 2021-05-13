import {readdir, writeFile} from 'fs/promises'

["component", "theme", "utility"].forEach(mod => {
    readdir(`./src/${mod}`).then(files => {
        files = `@forward "${mod}/${files.map(file => file.replace('.scss', '')).join(`";\n@forward "${mod}/`)}";`
        writeFile(`./src/${mod}.scss`, files)
    })
})
