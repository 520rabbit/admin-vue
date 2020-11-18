import ajax from '../index'


// 登录
export function login(data) {
  return ajax({
    url: '/admin/api/login',
    method: 'post',
    data
  })
}