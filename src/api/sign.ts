import request from '@/utils/axios/request'
import { SignList } from '@/types/list'

// 请求签到列表接口
export function requestSignList() {
    return request<SignList>({
        url: '/sign/list',
        method: 'get',
    })
}