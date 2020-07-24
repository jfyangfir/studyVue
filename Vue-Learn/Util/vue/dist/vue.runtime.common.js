if (process.env.NODE_ENV === 'production') {
  module.exports = require('vue/dist/vue.runtime.common.prod.js')
} else {
  module.exports = require('vue/dist/vue.runtime.common.dev.js')
}
