const environments = {
  development: 'http://localhost:3000/api/v1/',
  test: '',
  production: ''
}

const env = process.env.NODE_ENV || 'development'

export const baseUrl = environments[env]
