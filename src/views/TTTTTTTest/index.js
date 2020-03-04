import React, {Component} from 'react'

import {View, Text, TouchableOpacity, Modal, Image} from 'react-native'

class CustomStarExample extends Component {
    constructor(props) {
        super(props)
        this.state = {
            starCount: 2.5,
        }
    }

    onStarRatingPress(rating) {
        this.setState({
            starCount: rating,
        })
    }

    render() {
        return (
            <View>
                {/*// customize star size(自定义尺寸大小)*/}
                <View
                    style={{
                        height: 60,
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                    <Text>ttttttttttttt</Text>
                </View>
            </View>
        )
    }
}

export default CustomStarExample
