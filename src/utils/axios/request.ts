import axios from 'axios'
import { Message } from '@arco-design/web-vue'

const instance = axios.create({
  baseURL: '',
  timeout: 5000
})

instance.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  response => {
    const result = response.data
    if (result.status != 200) {
      const errorMessage = result.message || '内部未知错误'
      Message.error({
        content: errorMessage,
        duration: 5 * 1000
      })

      return Promise.reject(new Error(errorMessage))
    }

    return result
  },
  error => {
    console.log('错误信息:' + error) // for debug
    Message.error({
      content: error.message,
      duration: 5 * 1000
    })

    return Promise.reject(error)
  }
)

export default instance
