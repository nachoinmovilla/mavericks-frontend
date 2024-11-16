/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')

const nextConfig = {
  reactStrictMode: false,
  i18n,
  env: {
    API: process.env.NODE_ENV === 'development'
      ? process.env.NEXT_PUBLIC_URL_LOCAL
      : process.env.API,
  }
};

module.exports = nextConfig
