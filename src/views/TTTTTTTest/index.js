import React, {Component} from 'react'

import {View, Text, TouchableOpacity, Modal, Image} from 'react-native'

// import StarRatingBar from '../../components/react-native-star-rating-view-purejs/StarRatingBar'
import StarRatingBar from './StarRating/StarRatingBar'

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

                    <StarRatingBar
                        readOnly={false}
                        continuous={true}
                        score={3.7}
                        // allowsHalfStars={true}
                        // accurateHalfStars={true}
                        spacing={18}
                        allowsHalfStars={true}
                        accurateHalfStars={true}
                        maximumValue={7}
                        minimumValue={2}
                        onStarValueChanged={score => {
                            console.log('new score:' + score)
                        }}
                        emptyStarImage={
                            <Image
                                style={{width: 16, height: 16}}
                                source={require('./assets/icon-star.png')}
                            />
                        }
                        filledStarImage={
                            <Image
                                style={{width: 16, height: 16}}
                                source={require('./assets/icon-star-on.png')}
                            />
                        }
                        scoreTextStyle={{color: '#ff6666'}}
                    />
                </View>
            </View>
        )
    }
}

export default CustomStarExample
