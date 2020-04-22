import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native'

import Colors from '@utils/colors'

const CdImage = (props) => {

    const mainContainerStyles = [styles.container]
    if (props.isFirst) {
        mainContainerStyles.push({ marginLeft: 16 })
    }
    if (props.isLast) {
        mainContainerStyles.push({ marginRight: 16 })
    }

    return (
        <View style={[
            mainContainerStyles,
            props.containerStyle
        ]}>
            <Text style={styles.text1}>{props.title}</Text>
            <Image
                source={{ uri: 'http://openweathermap.org/img/wn/10d@2x.png' }}
                style={styles.image}
                resizeMode='contain'
            />
            <View style={[
                styles.text2Container,
                props.value2 && { justifyContent: 'space-between' }
            ]}>
                <Text style={styles.text2}>{props.value1}</Text>
                {
                    props.value2 &&
                    <Text style={styles.text2}>{props.value2}</Text>
                }
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 12,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 12,
        marginHorizontal: 3,
    },
    text1: {
        fontSize: 14,
    },
    image: {
        width: 37,
        height: 37,
        marginVertical: 3,
    },
    text2: {
        fontSize: 14,
        color: Colors.accent
    },
    text2Container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center'
    }
})

export default CdImage