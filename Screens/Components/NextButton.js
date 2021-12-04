import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../assets/colors/colors';

export default function NextButton({onPress,iconName,buttonstyle}) {
    return (
        <TouchableOpacity onPress={onPress}>
        <View style={[styles.buttonWrapper,buttonstyle]}>
            <Feather style={styles.icon} name={iconName} size={34} color={colors.TextButton}/>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonWrapper:{
        justifyContent: 'center',
        backgroundColor:colors.Primary,
        width:67,
        height:67,
        borderRadius:67,
    },
    icon:{
        alignSelf: 'center',
    }
})
