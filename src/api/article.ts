import request from '@/utils/axios/request'
import { ArticleList } from '@/types/components/list'
import { NewArticleListItem } from '@/types/components/list-item'

// 请求文章列表接口
export function requestArticleList(page: number, size: number) {
    return request<ArticleList>({
        url: '/article/list',
        method: 'get',
        data: { page, size }
    })
}

// 请求最新文章列表接口
export function requestNewArticleList() {
    return request<NewArticleListItem[]>({
        url: '/article/newList',
        method: 'get',
    })
}
