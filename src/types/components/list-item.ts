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
    username: string;
    zanCount: number;
    collectionCount: number;
    commentCount: number;
    viewCount: number;
}

/**
 * 今日签到列表接口
 */
export interface TodaySignListItem {
    avatar: string;
    nickname: string;
    time: string;
    count: number;
}

/**
 * 连续签到列表接口
 */
export interface ContinuitySignListItem {
    avatar: string;
    nickname: string;
    time: string;
    signDay: number;
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
 * 标签属性 Item 接口
 */
export interface TagsItem {
    name: string;
    color: string;
}