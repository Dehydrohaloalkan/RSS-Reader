import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

type Props = {
    onPress: (event: GestureResponderEvent) => void,
}

const RssChangeButton = (props: Props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.button}>
            <Text>RSS</Text>
        </TouchableOpacity>
    )
}

export default RssChangeButton

const styles = StyleSheet.create({
    button: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E7EEFE',
        borderRadius: 10,
    },
});

