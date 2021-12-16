import React from 'react'
import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View, SafeAreaView, ImageBackground, Image, Pressable } from 'react-native'
import gloabalStyle from '../assets/styles/globalStyle'
import { Formik } from 'formik'
import * as yup from 'yup'
import colors from '../assets/colors/colors'
import FloatingLabelInput from './Components/FloatingLabelInput'
import PrimaryButton from './Components/PrimaryButton'
export default function SignUpScreen({navigation}) {
    const signUpSchema =yup.object().shape({
        username: yup.string().required(),
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
                    <Text style={gloabalStyle.titleStyle}>Sign Up</Text>
                    <Text style={gloabalStyle.subTitleStyle}>Enter your credentials to continue</Text>
                </View>
                <View style={styles.FormWrapper}>
                    <Formik
                    validationSchema={signUpSchema}
                    initialValues={{username:'',email:'',password:''}}
                    onSubmit={(values)=>console.log(values)}>
                        {(formikProp)=>(
                            <>
                            <FloatingLabelInput label='Username' value={formikProp.values.username} onChangeText={formikProp.handleChange('username')} />
                                <Text style={gloabalStyle.error}>{formikProp.errors.username}</Text>
                            <FloatingLabelInput label='email' keyboard='email-address' value={formikProp.values.email} onChangeText={formikProp.handleChange('email')} />
                                <Text style={gloabalStyle.error}>{formikProp.errors.email}</Text>
                                <FloatingLabelInput label='password' value={formikProp.values.password} onChangeText={formikProp.handleChange('password')} isPassword={true} />
                                <Text style={gloabalStyle.error}>{formikProp.errors.password}</Text>
                                <PrimaryButton text='Sing Up' onPress={formikProp.handleSubmit} style={{ marginTop: 30 }} />
                            </>
                        )

                        }
                    </Formik>
                    <View style={{flexDirection:'row',justifyContent:'center',marginTop:10}}>
                    <Text style={[styles.footerText,{color:colors.Title,marginRight:5,}]}>Already have an account?</Text><Pressable onPress={()=>navigation.goBack()} ><Text style={[styles.footerText,{color:colors.Primary}]}>Log in</Text></Pressable>
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
        marginTop: 11,
        marginHorizontal:15,

    },
    footerText:{
        alignSelf:'center',
        fontFamily:'Gilroy-SemiBold',
    }
})
