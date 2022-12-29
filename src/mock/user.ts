import Mock from 'mockjs'

Mock.mock('/user/login', 'post', (params: any) => {
    return {
        data: { token: 'raylin666' },
        status: 200,
        message: 'success'
    }
})
