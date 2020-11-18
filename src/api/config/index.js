const devBaseURL = '/api'
const proBaseURL = 'https://demo.it98k.cn'
export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL
