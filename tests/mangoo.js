var specs = require.context('.', true, /\.spec$/)

specs.keys().forEach(specs)

module.exports = specs
