import React from 'react'
import { StyleSheet,View,Image, TouchableOpacity } from 'react-native'
import colors from '../../assets/colors/colors'

export default function AddButton({onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
        <View style={styles.buttonWrapper}>
            <Image style={styles.image} source={require('../../assets/images/Plus.png')}/>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonWrapper:{
        justifyContent: 'center',
        backgroundColor:colors.Primary,
        width:45,
        height:45,
        borderRadius:17,
    },
    image:{
        alignSelf: 'center',
    }
})
