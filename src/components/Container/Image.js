import React from 'react'
import {
    ImageBackground,
    StyleSheet
} from 'react-native'

const ImContainer = (props) => (
    <ImageBackground
        source={props.source}
        style={styles.container}
        resizeMode='stretch'
    >
        {props.children}
    </ImageBackground>
)

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%'
    },
})

export default ImContainer