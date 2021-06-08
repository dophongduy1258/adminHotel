const {i18n} = require('./next-i18next.config')
// const {appWithTranslation} = require('next-i18next')


module.exports = {
  // rewrites: async ()=> nextI18NextRewrites(localeSubpaths),
  i18n,
  future: {
    webpack5: true,
  },
};







