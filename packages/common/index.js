const files = require.context('./src/components', false, /.vue$/)

module.exports = files.keys().reduce((prev, curr) => (prev[files(curr).default.name] = files(curr).default, prev), {})
