import {readdir, writeFile} from 'fs/promises'

// ['animation'].forEach(mod => {
//     readdir(`./src/${mod}`).then(folders => {
//         let fileList = '';
//         folders.forEach(folder => {
//             readdir(`./src/${mod}/${folder}`).then(files => {
//                 fileList = `${fileList}${(fileList === '' ? '' : '\n')}@forward "${mod}/${folder}/${files.map(file => file.replace('.scss', '')).join(`";\n@forward "${mod}/${folder}/`)}";`
//                 writeFile(`./src/${mod}.scss`, fileList.split('\n').sort().join('\n'))
//             })
//         })
//     })
// })

['theme', 'utility'].forEach(mod => {
    readdir(`./src/${mod}`).then(files => {
        files = `@forward "${mod}/${files.map(file => file.replace('.scss', '')).join(`";\n@forward "${mod}/`)}";`
        writeFile(`./src/${mod}.scss`, files)
    })
})
