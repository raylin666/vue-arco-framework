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

/**
 * 网站显示运行时间
 * @param $createYear 创建网站的年份, 例如 2020
 * @param $createMonth 创建网站的月份, 例如 02
 * @param $createDate 创建网站的日期, 例如 12
 * @returns 
 */
export function siteShowDateTime(createYear: number, createMonth: number, createDate: number) {
    var seconds = 1000;
    var minutes = seconds * 60;
    var hours = minutes * 60;
    var days = hours * 24;
    var years = days * 365;
    var today = new Date();
    var todayYear = today.getFullYear();
    var todayMonth = today.getMonth()+1;
    var todayDate = today.getDate();
    var todayHour = today.getHours();
    var todayMinute = today.getMinutes();
    var todaySecond = today.getSeconds();
    /* Date.UTC() -- 返回date对象距世界标准时间(UTC)1970年1月1日午夜之间的毫秒数(时间戳)
    year - 作为date对象的年份，为4位年份值
    month - 0-11 之间的整数，做为date对象的月份
    day - 1-31 之间的整数，做为date对象的天数
    hours - 0(午夜24点)-23 之间的整数，做为date对象的小时数
    minutes - 0-59 之间的整数，做为date对象的分钟数
    seconds - 0-59 之间的整数，做为date对象的秒数
    microseconds - 0-999 之间的整数，做为date对象的毫秒数 */
    var t1 = Date.UTC(createYear, createMonth, createDate, 0o0, 0o0, 0o0); //北京时间2017-09-16 00:00:00创建网站的时间
    var t2 = Date.UTC(todayYear, todayMonth, todayDate, todayHour, todayMinute, todaySecond);
    var diff = t2 - t1;
    var diffYears = Math.floor(diff / years);
    var diffDays = Math.floor((diff / days) - diffYears * 365);
    var diffHours = Math.floor((diff - (diffYears * 365 + diffDays) * days) / hours);
    var diffMinutes = Math.floor((diff-(diffYears * 365 + diffDays) * days - diffHours * hours) / minutes);
    var diffSeconds = Math.floor((diff-(diffYears * 365 + diffDays) * days - diffHours * hours - diffMinutes * minutes) / seconds);
    return diffYears + ' 年 ' + diffDays + ' 天 ' + diffHours + ' 小时 ' + diffMinutes + ' 分钟 ' + diffSeconds + ' 秒'
}
