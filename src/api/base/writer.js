/**
 * 读写分离-写后台
 * @author lanjianqing
 */
import filter from '@/filter/index.js'
import writer from '@/api/mapper/writer.js'

var baseURL = '/api/v2'

export default {
  saveTest (params, success, failure) {
    let url = 'topics'
    params = writer.saveTest(params)
    return filter.post(baseURL, url, params, success, failure)
  }
}
