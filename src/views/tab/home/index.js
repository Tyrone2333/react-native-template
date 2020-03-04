import React, {Fragment, Component} from 'react'

import {observer, inject} from 'mobx-react'

import {Platform, StyleSheet, Text, View, Button} from 'react-native'

import {Actions} from 'react-native-router-flux'
import {getUser} from '../../../api/api'
import Divider from '../../../components/Divider/Divider'
import {$confirm, $warn} from '../../../utils/globalFunc'

@inject(['appState']) // 注入对应的store
@inject(['userStore']) // 注入对应的store
@observer // 监听当前组件
export default class Home extends Component {
    componentDidMount(): void {
        this.props.userStore.setUserInfo({
            aa: 'bb',
        })
        console.log(this.props.userStore)
    }

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
        return (
            <Fragment>
                <Text>我是首页{this.props.appState.num}</Text>
                <Text>yoooooooo</Text>
                <Button
                    onPress={() => this.toA()}
                    title="去往 TTTTTTTest 页面"
                />
                <Button onPress={() => this.apiTest()} title="api test" />

                <Divider text={'分割线'} />
                <View>
                    <Button
                        onPress={() => $warn('$warn')}
                        title="$warn('$warn')"
                    />
                    <Button
                        onPress={() =>
                            $confirm().then(res => {
                                $warn('点击了确认')
                            })
                        }
                        title="$confirm"
                    />
                </View>
                <Divider text={'分割线'} />
            </Fragment>
        )
    }
}

//  {this.props.appState.num}
