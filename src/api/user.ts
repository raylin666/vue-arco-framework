import request from '@/utils/axios/request'

// 请求用户登录接口
export function requestUserLogin(params: any) {
  return request.post('/user/login', params)
}
