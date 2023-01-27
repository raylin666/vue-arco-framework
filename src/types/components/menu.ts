/**
 * 头部菜单接口
 */
export interface headerMenu {
    title: string;
    name: string;
    isBadge?: boolean;
    badgeText?: string;
    badgeBg?: string;
    target?: string;
}