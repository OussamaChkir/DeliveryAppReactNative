import React, { useEffect,useState } from 'react'
import { ImageBackground, Keyboard, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View, } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import gloabalStyle from '../assets/styles/globalStyle'
import Flag from 'react-native-flags';
import { Dropdown } from 'react-native-element-dropdown';
import colors from '../assets/colors/colors';
import FloatingLabelInput from './Components/FloatingLabelInput';
import NextButton from './Components/NextButton';
export default function PhoneNumberScreen() {
    const [isLoading, setLoading] = useState(false);
    const [value, setValue] = useState(null);
    const [Data, setData] = useState([]);
    const getPhoneCountry =async ()=>{
        try{
            const response =await fetch('https://gist.githubusercontent.com/anubhavshrimal/75f6183458db8c453306f93521e93d37/raw/f77e7598a8503f1f70528ae1cbf9f66755698a16/CountryCodes.json');
            const json =response.json().then((res)=>{setData(JSON.stringify(res))});
            console.log(Data)
        }catch(err){
            console.error(err)
        }finally {
            setLoading(true);
          }
    }
    const data = [
        { label: 'Item 1', value: '1' },
        { label: 'Item 2', value: '2' },
        { label: 'Item 3', value: '3' },
        { label: 'Item 4', value: '4' },
        { label: 'Item 5', value: '5' },
        { label: 'Item 6', value: '6' },
        { label: 'Item 7', value: '7' },
        { label: 'Item 8', value: '8' },
    ];
    useEffect(() => {
        fetch('https://gist.githubusercontent.com/anubhavshrimal/75f6183458db8c453306f93521e93d37/raw/f77e7598a8503f1f70528ae1cbf9f66755698a16/CountryCodes.json')
        .then((response)=>response.json())
        .then((json)=>setData(json))
        .catch((error)=>console.error(error))
        .finally(()=>{setLoading(true);console.log(Data)});
        
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
               <NextButton iconName='chevron-right' buttonstyle={styles.button}/> 
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
        backgroundColor:colors.SubTitle,
        padding:0.7,
        width:'90%',
    },
    button:{
        position: 'absolute',
        top:150,
        left:250,
    }
})
