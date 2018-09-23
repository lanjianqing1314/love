// 读写分离-读后台
import api from '../../api/index.js'

var baseURL = '/api/v1'

export default {
  getTest (params, success, failure) {
    let url = 'topics'
    return api.get(baseURL, url, params, success, failure)
  }
}
