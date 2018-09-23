// 读写分离-写后台
import api from '../../api/index.js'

var baseURL = '/api/v1'

export default {
  saveTest (params, success, failure) {
    let url = 'topics'
    return api.post(baseURL, url, params, success, failure)
  }
}
