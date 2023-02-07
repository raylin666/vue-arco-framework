import Mock from 'mockjs'

import './article'
import './sign'

// 设置拦截 AJAX 请求的响应时间
Mock.setup({
    timeout: '600-1000'
})
