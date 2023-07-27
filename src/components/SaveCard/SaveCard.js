import React from 'react'
import { View, TextInput, TouchableOpacity, Text } from 'react-native'
import styles from './SaveCard.styles'

const SearchBar = props => {
    return (
        <View style={styles.container} >
            <View style={styles.input_container}>
                <TextInput
                    placeholder={"Yapılacak.."}
                    value={props.input}
                    onChangeText={props.changeText}
                />
            </View>
            <View style={styles.button_container}>
                <TouchableOpacity onPress={props.press} >
                    <Text style={styles.button_title} >Kaydet</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SearchBar