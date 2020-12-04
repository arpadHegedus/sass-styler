const sassTrue = require('sass-true')
const globby = require('globby')
const testfiles = globby.sync('./test/**')
testfiles.forEach(file => sassTrue.runSass({file}, {describe, it}))

