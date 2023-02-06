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
        console.log(error)
        return Promise.reject(error)
    }
)

instance.interceptors.response.use(
    response => {
        const res = response.data
        if (res.status != 200) {
            const defaultMessage = '内部未知错误'
            Message.error({
                content: res.message || defaultMessage,
                duration: 5 * 1000,
            })

            return Promise.reject(new Error(res.message || defaultMessage))
        }

        return res
    },
    error => {
        console.log('错误信息:' + error)   // for debug
        Message.error({
            content: error.message,
            duration: 5 * 1000,
        })

        return Promise.reject(error)
    }
)

export default instance
