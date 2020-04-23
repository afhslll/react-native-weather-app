import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native'

import Colors from '@utils/colors'

const HmCurrent = (props) => {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: props.image }}
                style={styles.image}
                resizeMode='contain'
            />
            <Text style={styles.text1}>{props.location}</Text>
            <Text style={styles.text2}>{props.description}</Text>
            <Text style={styles.text3}>{props.temperature}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 68,
        height: 68,
        marginVertical: 3,
    },
    text1: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'black'
    },
    text2: {
        fontSize: 20,
        color: Colors.accent,
        marginTop: 4,
    },
    text3: {
        fontSize: 80,
        color: 'black'
    },
})

export default HmCurrent