import {request} from "./request";
import QS from 'qs'

export function getUsersList(query,pagenum,pagesize) {
  return request({
    url: '/users',
    method: 'get',
    params: {
      query,
      pagenum,
      pagesize
    }
  })
}

export function editUsersState(uid,type) {
  return request({
    url: `/users/${uid}/state/${type}`,
    method: 'put',
  })
}

export function addUserList(data) {
  return request({
    url: '/users',
    method: 'post',
   data: QS.stringify(data)
  })
}

export function editUserList(uid) {
  return request({
    url: `/users/${uid}`,
    method: 'get',
  })
}

export function editUserInfo(uid,data) {
  return request({
    url: `/users/${uid}`,
    method: 'put',
    data: QS.stringify(data)
  })
}

export function removeUserList(uid) {
  return request({
    url: `/users/${uid}`,
    method: 'delete',
  })
}
