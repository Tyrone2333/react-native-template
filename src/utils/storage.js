/*
 * @Author: lfz
 * @Date:   2017-08-18 18:00:01
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-07-23 14:36:05
 */

import Storage from 'react-native-storage'
import {AsyncStorage} from 'react-native'

var storage = new Storage({
    // 最大容量，默认值1000条数据循环存储
    size: 1000,

    // 存储引擎：对于RN使用AsyncStorage，对于web使用window.localStorage
    // 如果不指定则数据只会保存在内存中，重启后即丢失
    storageBackend: AsyncStorage,

    // 数据过期时间，默认一整天（1000 * 3600 * 24 毫秒），设为null则永不过期
    // defaultExpires: 1000 * 3600 * 24,
    defaultExpires: null,

    // 读写时在内存中缓存数据。默认启用。
    enableCache: true,

    // 如果storage中没有相应数据，或数据已过期，
    // 则会调用相应的sync方法，无缝返回最新数据。
    // sync方法的具体说明会在后文提到
    // 你可以在构造函数这里就写好sync的方法
    // 或是在任何时候，直接对storage.sync进行赋值修改
    // 或是写到另一个文件里，这里require引入
    // sync: require('你可以另外写一个文件专门处理sync')
})

global.storage = storage

//扫描二维码的uid
var qrcode_uid = ''
global.qrcode_uid = qrcode_uid

//首页的弹窗广告,只每次打开app才弹一次
var show_index_ad = true
global.show_index_ad = show_index_ad

//扫描二维码以后，点击的是 '1点击免费体验' 还是'2立即参与'
var click_btn = ''
global.click_btn = click_btn

//新手指南对应的链接
var guide_url = ''
global.guide_url = guide_url

//要不要微信登录，用于ios审核
var hide_wxlogin = false
global.hide_wxlogin = hide_wxlogin
