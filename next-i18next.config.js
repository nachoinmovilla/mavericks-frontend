const path = require('path')

module.exports = {
    i18n:{
        locales: ['en', 'es'],
        defaultLocale: 'es',
        localeDetection: true,
        localePath: path.resolve('./public/locales'),
    }
}
