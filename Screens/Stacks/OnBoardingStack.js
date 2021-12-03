import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PhoneNumberScreen from '../PhoneNumberScreen';
import LocationScreen from '../LocationScreen';
import LoginScreen from '../LoginScreen';
import SignUpScreen from '../SignUpScreen';


const Stack = createNativeStackNavigator();
export default function OnBoardingStack() {
    return (
        <Stack.Navigator screenOptions={{
           headerShown:false, 
        }}>
        <Stack.Screen name="PhoneNumber" component={PhoneNumberScreen} />
        <Stack.Screen name="Location" component={LocationScreen}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="SignUp" component={SignUpScreen}/>
      </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})
