import jsonp from 'common/js/jsonp'
import {commonParams, options} from "./config"

export function getSingerList() {
  const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'

  const data = Object.assign({}, commonParams, {
    page: 'list',
    channel: 'singer',
    pagesize: 100,
    hostUin: 0,
    needNewCode: 0,
    pagenum: 1,
    format: 'jsonp',
    key: 'all_all_all'
  })

  return jsonp(url, data, options)
}

export function getSingerDetail(singerId) {
  const url = `https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg`

  const data = Object.assign({}, commonParams, {
    begin: 0,
    num: 100,
    order: 'listen',
    from: 'h5',
    songstatus: 1,
    format: 'jsonp',
    singermid: singerId
  })

  return jsonp(url, data, options)
}
