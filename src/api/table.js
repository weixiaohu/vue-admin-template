import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/table/list',
    method: 'get',
    params
  })
}

export function getInvalidTerminals() {
  return request({
    url: '/table/invalid/list',
    method: 'get'
  })
}
