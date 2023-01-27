/**
 * 今日签到列表接口
 */
export interface todaySignListItem {
    avatar: string;
    nickname: string;
    time: string;
    count: number;
}

/**
 * 连续签到列表接口
 */
export interface continuitySignListItem {
    avatar: string;
    nickname: string;
    time: string;
    signDay: number;
}

/**
 * 最新文章列表接口
 */
export interface newArticleListItem {
    title: string;
    zanCount: number;
    time: string;
}
