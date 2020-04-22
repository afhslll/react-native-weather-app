import React from 'react'
import {
    StyleSheet,
    View,
    FlatList,
} from 'react-native'

import { CdImage } from '@components/Card'

const dummyData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const HmDaily = (props) => {

    const renderRenderItem = (itemData) => {
        return (
            <CdImage
                containerStyle={{ width: 78 }}
                isFirst={itemData.index == 0}
                isLast={itemData.index + 1 == dummyData.length}
                title='Tue'
                value1='22°'
                value2='33°'
            />
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                keyExtractor={(item, index) => `${index}`}
                data={dummyData}
                renderItem={renderRenderItem}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 8,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
    }
})

export default HmDaily