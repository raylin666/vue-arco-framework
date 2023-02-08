import { TagsItem } from './tags'

/**
 * 文章列表 Item 接口
 */
export interface ArticleListItem {
    id: number;
    cover: string;
    title: string;
    time: string;
    tags?: TagsItem[];
    description: string;
    avatar: string;
    author: string;
    zanCount: number;
    collectionCount: number;
    commentCount: number;
    viewCount: number;
}

/**
 * 文章列表接口
 */
export interface ArticleList {
    list: ArticleListItem[];
    count: number;
}

/**
 * 最新文章列表接口
 */
export interface NewArticleListItem {
    id: number;
    title: string;
    zanCount: number;
    time: string;
}

/**
 * 文章详情接口
 */
export interface ArticleInfo {
    id: number;
    cover: string;
    title: string;
    time: string;
    date: string;
    tags?: TagsItem[];
    description: string;
    avatar: string;
    author: string;
    zanCount: number;
    collectionCount: number;
    commentCount: number;
    viewCount: number;
    content: string;
    prevArticle?: { id: number; title: string; };
    nextArticle?: { id: number; title: string; };
    copyrightAuthor: string;
    copyrightArticleId: number;
    copyrightLink: string;
    copyrightStatement: string;
    contentLength?: string;
}