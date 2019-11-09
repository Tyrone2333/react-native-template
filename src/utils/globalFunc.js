import Toast from 'react-native-root-toast'
import {identifyDebugDevelopmentEnvironment} from './utils'
import {Alert} from 'react-native'

/**
 * Created by en20 on 2019/7/29.
 */

const TOASP_POSITION = 100
let toast = null
export function $warn(text = '警告', duration = 1500) {
    if (toast !== null) {
        Toast.hide(toast)
    }
    toast = Toast.show(text, {
        // duration: Toast.durations.LONG,
        position: TOASP_POSITION,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
        duration,
        onShow: () => {
            // calls on toast\`s appear animation start
        },
        onShown: () => {
            // calls on toast\`s appear animation end.
        },
        onHide: () => {
            // calls on toast\`s hide animation start.
        },
        onHidden: () => {
            // calls on toast\`s hide animation end.
        },
    })
}

export function $error(text = '错误', duration = 1500) {
    Toast.show(text, {
        // duration: Toast.durations.LONG,
        position: TOASP_POSITION,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
        onShow: () => {
            // calls on toast\`s appear animation start
        },
        onShown: () => {
            // calls on toast\`s appear animation end.
        },
        onHide: () => {
            // calls on toast\`s hide animation start.
        },
        onHidden: () => {
            // calls on toast\`s hide animation end.
        },
    })
}

export function $success(text = 'success', duration = 1500) {
    Toast.show(text, {
        // duration: Toast.durations.LONG,
        position: TOASP_POSITION,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
        onShow: () => {
            // calls on toast\`s appear animation start
        },
        onShown: () => {
            // calls on toast\`s appear animation end.
        },
        onHide: () => {
            // calls on toast\`s hide animation start.
        },
        onHidden: () => {
            // calls on toast\`s hide animation end.
        },
    })
}

export function $confirm(text = '警告', title = '警告') {
    return new Promise((resolve, reject) => {
        Alert.alert(title, text, [
            {text: '取消', onPress: () => reject(), style: 'cancel'},
            {text: '确定', onPress: () => resolve()},
        ])
    })
}

// 根据 value 从对象里找到 key
export const findKey = (value, obj, compare = (a, b) => a === b) => {
    return Object.keys(obj).find(k => compare(obj[k], value))
}

// 根据环境直接返回正常的 log 函数,而不是每次都进来判断
let log = function() {}
if (identifyDebugDevelopmentEnvironment()) {
    log = function(...obj) {
        console.log('global.log: ', obj)
        Toast.show(JSON.stringify(obj), {
            duration: 60000,
            position: TOASP_POSITION,
        })
    }
}
// window.log = log;
export {log}

// 任意图片 140*140: https://placeimg.com/140/140/any
// 生成图片 宽*高/背景/前景.png/&text=文本: https://dummyimage.com/600x400/ccc/000.png&text=文本

// 正方形 116*116: https://i.loli.net/2019/10/16/PNlcn1Cat8pXwYZ.jpg
// 正方形 212*212: https://tse3-mm.cn.bing.net/th?id=OIP.QNGmLsUJkqUpgMbYBMpPqQAAAA&w=212&h=212&c=7&o=5&dpr=1.25&pid=1.7
// 圆形 118*118: https://i.loli.net/2019/07/17/5d2f08f66f80754766.png
// 正方形 白底: https://img.yzcdn.cn/vant/apple-2.jpg
// 1080p: https://cn.bing.com/th?id=OHR.LeavesGoldfish_ZH-CN6109097460_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp
// 默认头像 蜡笔小新
export const defaultAvatar =
    'https://tse3-mm.cn.bing.net/th?id=OIP.QNGmLsUJkqUpgMbYBMpPqQAAAA&w=212&h=212&c=7&o=5&dpr=1.25&pid=1.7'
global.defaultProductBanner =
    'https://i.loli.net/2019/07/31/5d4148eee243824369.png'
