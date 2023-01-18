import { tagsItem } from "../other";

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