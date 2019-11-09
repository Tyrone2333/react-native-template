import React, {Fragment, Component} from 'react'

import {observer, inject} from 'mobx-react'

import {Platform, StyleSheet, Text, View, Button} from 'react-native'

import {Actions} from 'react-native-router-flux'
import {getUser} from '../../../api/api'

@inject(['appState']) // 注入对应的store
@observer // 监听当前组件
export default class Home extends Component {
    toA() {
        console.log(11111)
        Actions.jump('test')
    }
    apiTest() {
        $warn('apiTesting')
        getUser()
            .then(res => {
                log(res)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        $warn('$warn')
        return (
            <Fragment>
                <Text>我是首页{this.props.appState.num}</Text>
                <Text>haooooohah</Text>
                <Button
                    onPress={() => this.toA()}
                    title="去往 TTTTTTTest 页面"
                />
                <Button onPress={() => this.apiTest()} title="api test" />
            </Fragment>
        )
    }
}

//  {this.props.appState.num}
