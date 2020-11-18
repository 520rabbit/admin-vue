import axios from 'axios'
import router from '@/router'
import { BASE_URL } from './config'
import { getToken } from "@/utils/cookie"
const request = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  timeout: 50000
})

request.interceptors.request.use(
  config => {
    if (getToken()) {
      config.headers['token'] = getToken()
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  response => {
    const res = response
    if (res.data.code == '407') {
      router.push('/login')
      return Promise.reject(res)
    }
    return res
  },
  error => {
    return Promise.reject(error)
  }
)
export default request