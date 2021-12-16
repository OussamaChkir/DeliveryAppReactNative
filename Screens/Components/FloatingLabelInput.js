import React,{useState} from 'react'
import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import colors from '../../assets/colors/colors';
import Feather from 'react-native-vector-icons/Feather';
export default function FloatingLabelInput({label,isPassword,keyboard,iconName,onPressIcon,iconStyle,onChangeText,value,style}) {
    const [isFocused, setIsFocused] = useState(false)
    const [Password, setPassword] = useState(false)
  const  handleFocus = () => setIsFocused(true);
  const  handleBlur = () => setIsFocused(false);
  const  handlePassword = () => setPassword(!Password);
    return (
        <View style={[styles.floatingWrapper,style]}>
            <Text style={[styles.floatingLabel,isFocused||value ?{top:0,fontSize:16,color:colors.SubTitle}:{top:26,fontSize:20,color:colors.SubTitle}]}>{label||'lab'}</Text>
            <View style={styles.inputIcon}>
            <TextInput style={styles.floatingInput} keyboardType={keyboard} isPassword={isPassword} secureTextEntry={Password} value={value} onChangeText={onChangeText} onBlur={handleBlur} onFocus={handleFocus}/>
            {isPassword&&<TouchableOpacity onPress={handlePassword}>
            <Feather style={[styles.floatinIcon,iconStyle]} name={Password? "eye-off":"eye"} size={22} />
            </TouchableOpacity>}
            {iconName&&<Pressable onPress={onPressIcon}>
            <Feather style={[styles.floatinIcon,iconStyle]} name={iconName} size={22} />
            </Pressable>}
            </View>
            <View style={styles.line}/>
        </View>
    )
}

const styles = StyleSheet.create({
    floatingWrapper:{
        paddingTop:20,
       
        //flex:1,
    },

    floatingLabel:{
        position: 'absolute',
        left: 0,
        
        
    },
    inputIcon:{
        justifyContent: 'space-between',
        flexDirection: 'row',
        
    },
    floatingInput:{
        fontSize:20,
        flex:1,
        fontFamily:'Gilroy-SemiBold',
    },
    floatinIcon:{
        paddingLeft:10,
        paddingTop:13,
        alignSelf: 'center',
        
    },
    line:{
        backgroundColor:colors.lineColor,
        padding:0.7,
    }
})
