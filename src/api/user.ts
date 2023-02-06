import request from '@/utils/axios/request'

// 请求用户登录接口
export function requestUserLogin(data: any) {
    return request({
        url: '/user/login',
        method: 'post',
        data
    })
}
