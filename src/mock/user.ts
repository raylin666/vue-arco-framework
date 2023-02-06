import Mock from 'mockjs'

Mock.mock('/user/login', 'post', (data: any) => {
    return {
        data: { token: 'raylin666' },
        status: 200,
        message: 'success'
    }
})
