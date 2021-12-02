import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import colors from '../../assets/colors/colors'

export default function PrimaryButton({text,onPress}) {
    return (
        <TouchableOpacity onPress={onPress} >
        <View style={styles.ButtonWrapper}>
            <Text style={styles.ButtonText}>{text||''}</Text>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    ButtonWrapper:{
        paddingVertical:20,
        borderRadius:19,
        backgroundColor:colors.Primary,
        justifyContent: 'center',
    },
    ButtonText:{
        alignSelf: 'center',
        color:colors.TextButton,
        fontFamily:'Gilroy-SemiBold',
        fontSize:18,

    }
})
