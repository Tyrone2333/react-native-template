import {$error} from '../utils/globalFunc'
// import {userStore} from '../mobx/userStore';
let userStore = {
    userInfo: {},
}
import {Actions} from 'react-native-router-flux'
import {BASE_URL} from './apiConfig'
const qs = require('qs')

//请求
export function _post(params, props) {
    let {url} = params

    return new Promise((resolve, reject) => {
        // log(userStore.userInfo.access_token)
        fetch(BASE_URL + url, {
            method: 'post',
            headers: {
                cyaccesstoken: userStore.userInfo.access_token || '',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: qs.stringify(params),
        })
            .then(response => {
                // console.log(response);
                if (
                    response.headers
                        .get('content-type')
                        .match(/application\/json/)
                ) {
                    return response.json()
                }
                return response
            })
            .then(data => {
                console.log(url + ' 接口返回:', data)

                // 突然哪天就变成字符串 -_-
                if (data.status == 1) {
                    // 只传 data,无需 msg 等无关内容
                    return resolve(data.data)
                } else {
                    // if (data.msg === '该账号已在其他终端登陆'
                    //     || data.msg === '您还未登陆,请重新登陆'
                    //     || data.msg === '请先登录'
                    //     || data.msg === '登录超时请重新登录'
                    // ) {
                    //     // 传入 Actions.currentScene,可以跳转,但没必要
                    //     Actions.jump('RegisterAndLogin');
                    // }

                    // 常见状态码处理
                    switch (data.status) {
                        case 401:
                            $error(data.msg || '请先登录')
                            userStore.logout()
                            Actions.reset('RegisterAndLogin')
                            break
                        case 404:
                            $warn('请求的页面不存在')
                            break
                        case 500:
                            $warn('服务器开小差了,请稍后再试')
                            break
                        default:
                            $error(data.msg || '服务器返回了不正确的数据')
                    }

                    console.log('接口返回错误: ')
                    reject(data)
                }
            })
            .catch(error => {
                $error('网络请求错误')
                console.error('请求出错: ')
                return reject(error)
            })
    })
}
