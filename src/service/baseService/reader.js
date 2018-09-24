// 读写分离-读后台
import filter from '@/filter/index.js'

var baseURL = '/api/v1'

export default {
  getTest (params, success, failure) {
    let url = 'topics'
    let response = filter.get(baseURL, url, params, success, failure)
    // 这里做数据映射转换
    return response
  }
}
