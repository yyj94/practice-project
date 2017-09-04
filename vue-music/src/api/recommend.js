import jsonp from 'common/js/jsonp'
// import axios from 'axios'
import {commonParams, options} from "./config";

export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

  const data = Object.assign({}, commonParams, {
    format: 'jsonp'
  })

  return jsonp(url, data, options)
}

/* export function getDiscList() {
  const url = '/api/getDiscList'

  const data = Object.assign({}, commonParams, {
    format: 'json'
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res, data)
  })
} */

export function getDiscList() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

  const data = Object.assign({}, commonParams, {
    format: 'jsonp'
  })

  return jsonp(url, data, options)
}
