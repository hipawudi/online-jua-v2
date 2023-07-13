const { injectEnvs } = require('pm2-dotenv')

const env = process.argv[process.argv.indexOf('--env') + 1]
const isDev = env === 'development'

module.exports = {
  apps: [
    {
      namespace: "nustra",
      name: 'nuxt-app',
      cwd: './nuxt',
      script: 'yarn',
      args: isDev ? 'dev' : 'start',
      interpreter: 'none',
      watch: false,
      ...injectEnvs('nuxt'),
    },
    {
      namespace: "nustra",
      name: 'strapi',
      cwd: './strapi',
      script: 'yarn',
      args: isDev ? 'develop' : 'start',
      interpreter: 'none',
      watch: false,
      ...injectEnvs('strapi'),
    },
  ],
};
