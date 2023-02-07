import Mock from 'mockjs'

Mock.mock('/sign/list', 'get', (data: any) => {
  return {
      data: {
        today: [
            {
                nickname: '张三',
                avatar: 'http://blog.ls331.com/medias/logo.svg',
                time: '7小时前',
                count: 30,
            },
            {
                nickname: '太挑剔的鸟儿',
                avatar: 'http://blog.ls331.com/medias/logo.svg',
                time: '3天前',
                count: 30,
            },
            {
                nickname: '马五',
                avatar: 'http://blog.ls331.com/medias/logo.svg',
                time: '6天前',
                count: 30,
            },
            {
                nickname: '小乖乖',
                avatar: 'http://blog.ls331.com/medias/logo.svg',
                time: '20分钟前',
                count: 30,
            },
            {
                nickname: '张林夕',
                avatar: 'http://blog.ls331.com/medias/logo.svg',
                time: '12小时前',
                count: 30,
            }
        ],
        continuity: [
            {   
                nickname: '手放开',
                avatar: 'http://blog.ls331.com/medias/logo.svg',
                time: '23小时前',
                signDay: 30,
            },
            {
                nickname: '冰冰',
                avatar: 'http://blog.ls331.com/medias/logo.svg',
                time: '1天前',
                signDay: 30,
            },
            {
                nickname: '王治郅',
                avatar: 'http://blog.ls331.com/medias/logo.svg',
                time: '20天前',
                signDay: 30,
            },
            {
                nickname: '史可法',
                avatar: 'http://blog.ls331.com/medias/logo.svg',
                time: '17小时前',
                signDay: 30,
            },
            {
                nickname: '杨阳洋',
                avatar: 'http://blog.ls331.com/medias/logo.svg',
                time: '20小时前',
                signDay: 30,
            },
        ]
      },
      status: 200,
      message: 'success'
  }
})