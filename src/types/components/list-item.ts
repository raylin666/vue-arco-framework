import { tagsItem } from "../other";

/**
 * 文章列表接口
 */
export interface articleListItem {
    id: number;
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