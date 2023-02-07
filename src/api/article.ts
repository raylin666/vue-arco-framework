import request from '@/utils/axios/request'
import { ArticleInfo, ArticleList, NewArticleListItem } from '@/types/article'

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

// 请求文章详情接口
export function requestArticleInfo(id: number) {
    return request<ArticleInfo>({
        url: '/article/info/' + id,
        method: 'get',
    })
}
