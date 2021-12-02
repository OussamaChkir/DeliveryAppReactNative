import React,{useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import gloabalStyle from './assets/styles/globalStyle'
import AddButton from './Screens/Components/AddButton'
import Card from './Screens/Components/Card'
import FloatingLabelInput from './Screens/Components/FloatingLabelInput'
import PrimaryButton from './Screens/Components/PrimaryButton'

export default function App() {
  const [state, setstate] = useState('')
  return (
    <View style={gloabalStyle.container}>
      <Text>App Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
