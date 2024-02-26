const path = require('path')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const { withSentryConfig } = require('@sentry/nextjs')
const withSvgr = require('next-plugin-svgr')

const getDomain = (url = '') => (url ? new URL(url).hostname : '')

const assetsDomain = getDomain(process.env.ASSETS_URL)
const appDomain = getDomain(process.env.NEXT_PUBLIC_APP_URL)

const domains = ['localhost', assetsDomain, appDomain].filter(Boolean)

const trueEnv = ['true', '1', 'yes']

// Features
const NEXTJS_IGNORE_ESLINT = trueEnv.includes(process.env.NEXTJS_IGNORE_ESLINT ?? 'false')
const NEXTJS_IGNORE_TYPECHECK = trueEnv.includes(process.env.NEXTJS_IGNORE_TYPECHECK ?? 'false')
const NEXTJS_DISABLE_SENTRY =
  trueEnv.includes(process.env?.NEXTJS_DISABLE_SENTRY ?? 'false') ||
  process.env.APP_ENV !== 'production'

/**
 * @type {import('next').NextConfig}
 * */
const nextConfig = {
  transpilePackages: ['mui-one-time-password-input'],
  env: {
    APP_ENV: process.env.APP_ENV || undefined,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL || undefined,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET || undefined,
  },
  images: {
    domains,
  },
  experimental: {
    optimizePackageImports: ['@mui/material', '@mui/lab'],
  },
  eslint: {
    ignoreDuringBuilds: NEXTJS_IGNORE_ESLINT,
  },
  typescript: {
    ignoreBuildErrors: NEXTJS_IGNORE_TYPECHECK,
  },
}

const withSvgPlugin = (config) => {
  const svgrOptions = {
    svgrOptions: {
      svgo: true,
      configFile: path.resolve(__dirname, '.svgrrc.js'),
    },
  }

  return withSvgr(config, svgrOptions)
}

module.exports = () => {
  const plugins = [withBundleAnalyzer, withSvgPlugin].filter(Boolean)

  return plugins.reduce((acc, next) => next(acc), nextConfig)
}
