// 读写分离-写后台
import filter from '@/filter/index.js'

var baseURL = '/api/v1'

export default {
  saveTest (params, success, failure) {
    let url = 'topics'
    return filter.post(baseURL, url, params, success, failure)
  }
}
