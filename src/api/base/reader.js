/**
 * 读写分离-读后台
 * @author lanjianqing
 */
import filter from '@/filter/index.js'
import reader from '@/api/mapper/reader.js'

var baseURL = '/api/v1'

export default {
  getTest (params, success, failure) {
    let url = 'topics'
    let response = filter.get(baseURL, url, params, success, failure)
    reader.getTest(response)// 后台数据转前台数据映射转换
    return response
  }
}
