import request from '@/utils/axios/request'

// 请求登录接口
export function requestLogin(data: any) {
    return request({
        url: '/user/login',
        method: 'post',
        data
    })
}
