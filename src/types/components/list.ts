import { ArticleListItem, TodaySignListItem, ContinuitySignListItem } from "./list-item";

/**
 * 文章列表接口
 */
export interface ArticleList {
    list: ArticleListItem[];
    count: number;
}

/**
 * 签到列表接口
 */
export interface SignList {
    today: TodaySignListItem[];
    continuity: ContinuitySignListItem[];
}