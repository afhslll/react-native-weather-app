import React from 'react'
import {
    StyleSheet,
    View,
    Text
} from 'react-native'

const BxMessage = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.messageContainer}>
                <Text>{props.message}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    messageContainer: {
        backgroundColor: 'white',
        padding: 12,
        borderRadius: 10,
    }
})

export default BxMessage