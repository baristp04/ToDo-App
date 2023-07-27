import React from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import styles from './ToDo.styles'

const ToDo = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}> {props.chore} </Text>
            <View>
                <TouchableOpacity onPress={props.click}>
                    <Text style={styles.button_text}> X </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ToDo