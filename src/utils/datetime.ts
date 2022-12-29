import { formatDate } from '@vueuse/core'

/**
 * 时间戳转换为日期
 * @param timestamp
 * @param format
 * @param company_value 单位值, 默认 1000, 表示 timestamp 值为秒单位
 */
export function timestampFormatDate(timestamp: number, format: string = 'YYYY-MM-DD HH:mm:ss', company_value: number = 1000) {
    const date = new Date()
    date.setTime(timestamp * company_value)
    return formatDate(date, format)
}
