import Mock from 'mockjs'

Mock.mock('/article/list', 'get', (data: any) => {
  return {
      data: {
        list: [
          {
            id: 1,
            cover: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
            title: 'PHP 8.2 对 WordPress、插件和开发人员意味着什么？',
            time: '3周前',
            tags: [
              { name: 'PHP', color: 'green' },
              { name: 'JavaScript', color: 'orange' },
              { name: '服务器运维', color: 'blue' },
            ],
            description: 'PHP 8.2.0 于 2022 年 12 月 8 日首次亮相。作为一项重大更新，它带来了性能改进、更简单的语法和更高的类型安全性，作为一项重大更新，它带来了性能改进、更简单的语法和更高的类型安全性，并将null、false和true作为独立类型。可能挑战 WordPress 开发人员的',
            avatar: 'http://cdn.ls331.com/micro/2022/1129/474f0018-a88e-44f3-a6b3-c6e6922af1fc.png',
            author: '林山',
            zanCount: 20,
            collectionCount: 48,
            commentCount: 394,
            viewCount: 3928,
          },
          {
            id: 2,
            cover: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
            title: 'PHP 8.2 对 WordPress、插件和开发人员意味着什么？',
            time: '3周前',
            tags: [
              { name: 'PHP', color: 'green' },
              { name: 'JavaScript', color: 'orange' },
              { name: '服务器运维', color: 'blue' },
            ],
            description: 'PHP 8.2.0 于 2022 年 12 月 8 日首次亮相。作为一项重大更新，它带来了性能改进、更简单的语法和更高的类型安全性，作为一项重大更新，它带来了性能改进、更简单的语法和更高的类型安全性，并将null、false和true作为独立类型。可能挑战 WordPress 开发人员的',
            avatar: 'http://cdn.ls331.com/micro/2022/1129/474f0018-a88e-44f3-a6b3-c6e6922af1fc.png',
            author: '林山',
            zanCount: 20,
            collectionCount: 48,
            commentCount: 394,
            viewCount: 3928,
          },
          {
            id: 3,
            cover: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
            title: 'PHP 8.2 对 WordPress、插件和开发人员意味着什么？',
            time: '3周前',
            tags: [
              { name: 'PHP', color: 'green' },
              { name: 'JavaScript', color: 'orange' },
              { name: '服务器运维', color: 'blue' },
            ],
            description: 'PHP 8.2.0 于 2022 年 12 月 8 日首次亮相。作为一项重大更新，它带来了性能改进、更简单的语法和更高的类型安全性，作为一项重大更新，它带来了性能改进、更简单的语法和更高的类型安全性，并将null、false和true作为独立类型。可能挑战 WordPress 开发人员的',
            avatar: 'http://cdn.ls331.com/micro/2022/1129/474f0018-a88e-44f3-a6b3-c6e6922af1fc.png',
            author: '林山',
            zanCount: 20,
            collectionCount: 48,
            commentCount: 394,
            viewCount: 3928,
          },
          {
            id: 4,
            cover: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
            title: 'PHP 8.2 对 WordPress、插件和开发人员意味着什么？',
            time: '3周前',
            tags: [
              { name: 'PHP', color: 'green' },
              { name: 'JavaScript', color: 'orange' },
              { name: '服务器运维', color: 'blue' },
            ],
            description: 'PHP 8.2.0 于 2022 年 12 月 8 日首次亮相。作为一项重大更新，它带来了性能改进、更简单的语法和更高的类型安全性，作为一项重大更新，它带来了性能改进、更简单的语法和更高的类型安全性，并将null、false和true作为独立类型。可能挑战 WordPress 开发人员的',
            avatar: 'http://cdn.ls331.com/micro/2022/1129/474f0018-a88e-44f3-a6b3-c6e6922af1fc.png',
            author: '林山',
            zanCount: 20,
            collectionCount: 48,
            commentCount: 394,
            viewCount: 3928,
          },
          {
            id: 5,
            cover: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
            title: 'PHP 8.2 对 WordPress、插件和开发人员意味着什么？',
            time: '3周前',
            tags: [
              { name: 'PHP', color: 'green' },
              { name: 'JavaScript', color: 'orange' },
              { name: '服务器运维', color: 'blue' },
            ],
            description: 'PHP 8.2.0 于 2022 年 12 月 8 日首次亮相。作为一项重大更新，它带来了性能改进、更简单的语法和更高的类型安全性，作为一项重大更新，它带来了性能改进、更简单的语法和更高的类型安全性，并将null、false和true作为独立类型。可能挑战 WordPress 开发人员的',
            avatar: 'http://cdn.ls331.com/micro/2022/1129/474f0018-a88e-44f3-a6b3-c6e6922af1fc.png',
            author: '林山',
            zanCount: 20,
            collectionCount: 48,
            commentCount: 394,
            viewCount: 3928,
          },
          {
            id: 6,
            cover: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
            title: 'PHP 8.2 对 WordPress、插件和开发人员意味着什么？',
            time: '3周前',
            tags: [
              { name: 'PHP', color: 'green' },
              { name: 'JavaScript', color: 'orange' },
              { name: '服务器运维', color: 'blue' },
            ],
            description: 'PHP 8.2.0 于 2022 年 12 月 8 日首次亮相。作为一项重大更新，它带来了性能改进、更简单的语法和更高的类型安全性，作为一项重大更新，它带来了性能改进、更简单的语法和更高的类型安全性，并将null、false和true作为独立类型。可能挑战 WordPress 开发人员的',
            avatar: 'http://cdn.ls331.com/micro/2022/1129/474f0018-a88e-44f3-a6b3-c6e6922af1fc.png',
            author: '林山',
            zanCount: 20,
            collectionCount: 48,
            commentCount: 394,
            viewCount: 3928,
          }
        ],
        count: 6
      },
      status: 200,
      message: 'success'
  }
})

Mock.mock('/article/newList', 'get', (data: any) => {
  return {
      data: [
        {
          id: 1,
          title: 'PHP 8.2 对 WordPress、插件和开发人员意味着什么？',
          zanCount: 293,
          time: '3周前',
        },
        {
          id: 2,
          title: 'PHP 8.2 对 WordPress、插件和开发人员意味着什么？',
          zanCount: 293,
          time: '3周前',
        },
        {
          id: 3,
          title: 'PHP 8.2 对 WordPress、插件和开发人员意味着什么？',
          zanCount: 293,
          time: '3周前',
        },
        {
          id: 4,
          title: 'PHP 8.2 对 WordPress、插件和开发人员意味着什么？',
          zanCount: 293,
          time: '3周前',
        },
        {
          id: 5,
          title: 'PHP 8.2 对 WordPress、插件和开发人员意味着什么？',
          zanCount: 293,
          time: '3周前',
        },
      ],
      status: 200,
      message: 'success'
  }
})

Mock.mock('/article/info/0', 'get', (data: any) => {
  return {
      data: {
        id: 1,
        cover: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
        title: 'PHP 8.2 对 WordPress、插件和开发人员意味着什么？',
        time: '3周前',
        date: '2023年02月08日',
        tags: [
          { name: 'PHP', color: 'green' },
          { name: 'JavaScript', color: 'orange' },
          { name: '服务器运维', color: 'blue' },
        ],
        description: 'PHP 8.2.0 于 2022 年 12 月 8 日首次亮相。作为一项重大更新，它带来了性能改进、更简单的语法和更高的类型安全性，作为一项重大更新，它带来了性能改进、更简单的语法和更高的类型安全性，并将null、false和true作为独立类型。可能挑战 WordPress 开发人员的',
        avatar: 'http://cdn.ls331.com/micro/2022/1129/474f0018-a88e-44f3-a6b3-c6e6922af1fc.png',
        username: '林山',
        zanCount: 20,
        collectionCount: 48,
        commentCount: 394,
        viewCount: 3928,
        content: "我是测试文章",
        prevArticle: {
          id: 2, 
          title: '手把手教你源码编译安装PHP及相关扩展 (一)'
        },
        nextArticle: {
          id: 3, 
          title: '手把手教你源码编译安装PHP及相关扩展 (三)'
        },
        copyrightAuthor: '林山',
        copyrightArticleId: 1,
        copyrightLink: 'http://127.0.0.1:3000/article/info/1',
        copyrightStatement: '本博客所有文章除特別声明外，均采用 CC BY 4.0 许可协议。转载请注明来源 林山 !',
      },
      status: 200,
      message: 'success'
  }
})