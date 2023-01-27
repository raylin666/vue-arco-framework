import { tagsItem } from "../other";

/**
 * 首页文章列表接口
 */
export interface indexArticleListItem {
    cover: string;
    title: string;
    time: string;
    tags?: tagsItem[];
    description: string;
    avatar: string;
    username: string;
    zanCount: number;
    collectionCount: number;
    commentCount: number;
    viewCount: number;
}