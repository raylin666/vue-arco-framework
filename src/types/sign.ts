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
 * 签到列表接口
 */
export interface SignList {
    today: TodaySignListItem[];
    continuity: ContinuitySignListItem[];
}