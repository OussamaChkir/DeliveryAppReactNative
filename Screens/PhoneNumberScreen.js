import React, { useEffect,useState } from 'react'
import { ImageBackground, Keyboard, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View, } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import gloabalStyle from '../assets/styles/globalStyle'
import Flag from 'react-native-flags';
import { Dropdown } from 'react-native-element-dropdown';
import colors from '../assets/colors/colors';
import NextButton from './Components/NextButton';

export default function PhoneNumberScreen({navigation}) {
    const [isLoading, setLoading] = useState(false);
    const [value, setValue] = useState(null);
    const [Data, setData] = useState([]);
    useEffect(() => {
        fetch('https://gist.githubusercontent.com/anubhavshrimal/75f6183458db8c453306f93521e93d37/raw/f77e7598a8503f1f70528ae1cbf9f66755698a16/CountryCodes.json')
        .then((response)=>response.json())
        .then((json)=>setData(json))
        .catch((error)=>console.error(error))
        .finally(()=>{setLoading(true);});
        
      }, []);
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={gloabalStyle.container}>
            <SafeAreaView>
                <ImageBackground style={styles.image} source={require('../assets/images/Background1.png')} />
            </SafeAreaView>
            <View style={styles.contentWrapper}>
                <Text style={gloabalStyle.titleStyle}>Enter your mobile number</Text>
                <Text style={styles.textLabel}>Mobile Number</Text>
              {isLoading && <View style={styles.PhoneInputWrapper}>
                  
              <Flag code={value? value.code:'ND'} size={32} style={styles.flag} />
                    <Dropdown
                        placeholder={value? value.dial_code:"item"}
                        placeholderStyle={styles.placeholderStyle}
                        style={styles.dropdown}
                        data={Data}
                        value={value}
                        renderItem={item => (
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                <Flag code={item.code} size={32} />
                                <Text style={{ alignSelf: 'center' }}>{item.dial_code}</Text>
                            </View>
                        )}
                        labelField="dial_code"
                        valueField="dial_code"
                        onChange={item => { setValue(item);}}
                         />
                         
                    <TextInput style={styles.InputStyle} keyboardType='phone-pad' placeholder="-- -- -- -- -- -- -- -- -- --"/>
                </View>}
                <View style={styles.line}/>
                {/* Button */}
               <NextButton iconName='chevron-right' onPress={()=>navigation.navigate('Location')} buttonstyle={styles.button}/> 
            </View>
        </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 280,
    },
    contentWrapper: {
        flex: 1,
        marginTop:30,
        marginHorizontal:25,
       
    },
    textLabel:{
        fontSize:16,
        fontFamily:'Gilroy-SemiBold',
        marginTop:25,
    },
    flag:{
        alignSelf: 'center',
        marginRight:5,
    },
    PhoneInputWrapper: {
        marginTop:10,
        flexDirection: 'row',
    },
    placeholderStyle:{
        fontSize:18,
        color:colors.Title,
    },
    dropdown: {
        width: 80,
    },
    InputStyle:{
        flex:1,
        fontSize:18,
    },
    line:{
        backgroundColor:colors.lineColor,
        padding:0.7,
        width:'90%',
    },
    button:{
        position: 'absolute',
        top:150,
        left:250,
    }
})
