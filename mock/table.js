import Mock from 'mockjs'

const data = Mock.mock({
  'items|30': [{
    id: '@id',
    title: '@sentence(10, 20)',
    'status|1': ['published', 'draft', 'deleted'],
    author: 'name',
    display_time: '@datetime',
    pageviews: '@integer(300, 5000)'
  }]
})

const invalidTerminals = Mock.mock({
  'items|5': [{
    name: '@cword(10, 20)',
    type: '@cword(4)',
    reason: '@cword(10, 20)'
  }]
})

export default [
  {
    url: '/table/list',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  },
  {
    url: '/table/invalid/list',
    type: 'get',
    response: config => {
      const items = invalidTerminals.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  }
]
