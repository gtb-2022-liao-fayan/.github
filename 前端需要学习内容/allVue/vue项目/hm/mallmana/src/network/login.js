import {request} from "./request";

export function getLoginData(username,password) {
  return request({
    url: '/login',
    methods: 'post',
    params: {
      username,
      password
    }
  })
}