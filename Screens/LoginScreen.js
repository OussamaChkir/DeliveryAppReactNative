import React from 'react'
import { TouchableWithoutFeedback, StyleSheet, Text, View, Keyboard, ImageBackground, Image, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import gloabalStyle from '../assets/styles/globalStyle'
import { Formik } from 'formik'
import * as yup from 'yup'
import FloatingLabelInput from './Components/FloatingLabelInput'
import PrimaryButton from './Components/PrimaryButton'
import colors from '../assets/colors/colors'

export default function LoginScreen({navigation}) {
    const loginSchema =yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(6).required(),
    })
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={gloabalStyle.container}>
                <SafeAreaView>
                    <View style={{ justifyContent: 'center', }}>
                        <ImageBackground style={styles.imageWrapper} blurRadius={20} source={require('../assets/images/logo.png')} />
                        <Image style={styles.image} source={require('../assets/images/logo.png')} />
                    </View>
                </SafeAreaView>
                <View style={styles.TitleWrapper}>
                    <Text style={gloabalStyle.titleStyle}>Login</Text>
                    <Text style={gloabalStyle.subTitleStyle}>Enter your emails and password</Text>
                </View>
                <View style={styles.FormWrapper} >
                    <Formik
                        validationSchema={loginSchema}
                        initialValues={{ email: '', password: '' }}
                        onSubmit={(values) => console.log(values)}>
                        {(formikProp) => (
                            <>
                                <FloatingLabelInput label='email' keyboard='email-address' value={formikProp.values.email} onChangeText={formikProp.handleChange('email')} />
                                <Text style={gloabalStyle.error}>{formikProp.errors.email}</Text>
                                <FloatingLabelInput label='password' style={{marginTop:10}} value={formikProp.values.password} onChangeText={formikProp.handleChange('password')} isPassword={true} />
                                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                <Text style={gloabalStyle.error}>{formikProp.errors.password}</Text>
                                <Text style={{color:colors.Title}}>Forget Password ?</Text>
                                </View>
                                <PrimaryButton text='Login' onPress={formikProp.handleSubmit} style={{ marginTop: 35 }} />
                            </>
                        )}

                    </Formik>
                    <View style={{flexDirection:'row',justifyContent:'center',marginTop:10}}>
                    <Text style={[styles.footerText,{color:colors.Title,marginRight:5,}]}>Don't have an account ?</Text><Pressable onPress={()=>navigation.navigate('SignUp')} ><Text style={[styles.footerText,{color:colors.Primary}]}>Singup</Text></Pressable>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    imageWrapper: {
        padding: 80,

    },
    image: {
        alignSelf: 'center',
        position: 'absolute',
    },
    TitleWrapper: {
        marginTop: 20,
        marginLeft: 25,
    },
    FormWrapper: {
        flex:1,
        marginTop: 13,
        marginHorizontal:10,

    },
    footerText:{
        alignSelf:'center',
        fontFamily:'Gilroy-SemiBold',
    }
})
