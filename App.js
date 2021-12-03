import React,{useEffect, useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import store from './store'
import { Provider } from 'react-redux'
import SplashScreen from 'react-native-splash-screen'
import OnBoardingStack from './Screens/Stacks/OnBoardingStack';

export default function App() {
  const [state, setstate] = useState('')
  useEffect(()=>{
    SplashScreen.hide();
  },[])
  return (
    <Provider store={store}>
      <NavigationContainer>
      <OnBoardingStack/>
    </NavigationContainer> 
    </Provider>
  )
}

const styles = StyleSheet.create({})
