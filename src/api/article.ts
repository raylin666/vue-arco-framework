import request from '@/utils/axios/request'
import { articleListItem } from '@/types/components/list-item'

// 请求文章列表接口
export function requestArticleList(page: number, size: number) {
    return request<articleListItem[]>({
        url: '/article/list',
        method: 'get',
        data: { page, size }
    })
}
