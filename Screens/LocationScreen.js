import React, { useEffect, useState, useCallback } from 'react'
import { StyleSheet, Text, View, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, SafeAreaView, ImageBackground, TouchableOpacity } from 'react-native'
import gloabalStyle from '../assets/styles/globalStyle'
import Feather from 'react-native-vector-icons/Feather';
import { Dropdown } from 'react-native-element-dropdown';
import colors from '../assets/colors/colors';
import PrimaryButton from './Components/PrimaryButton';

export default function LocationScreen({ navigation }) {
    const [Data, setData] = useState([]);
    const [suggestionsList, setSuggestionsList] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [country, setcountry] = useState(null);
    const [state, setState] = useState(null);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries%2Bstates.json')
            .then((response) => response.json())
            .then((json) => {
                setData(json.map((item) => ({
                    id: item.numeric_code,
                    name: item.name,
                    states: item.states,
                })));
                setSuggestionsList(json.map((item) => ({
                    id: item.numeric_code,
                    name: item.name,
                    states: item.states,
                })));
            })
            .catch((error) => console.error(error))
            .finally(() => { setLoading(true); });

    }, []);
    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "height" : "padding"} style={gloabalStyle.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={gloabalStyle.container}>
                    <SafeAreaView>
                        <View style={styles.imageWrapper}>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Feather style={styles.backIcon} name='chevron-left' size={38} />
                            </TouchableOpacity>
                            <ImageBackground style={styles.image} source={require('../assets/images/location.png')} />
                        </View>
                    </SafeAreaView>
                    <View style={styles.contentWrapper}>
                        <View style={styles.textSection}>
                            <Text style={[gloabalStyle.titleStyle, { alignSelf: 'center' }]}>Select your Location</Text>
                            <Text style={[gloabalStyle.subTitleStyle, { alignSelf: 'center', marginTop: 10 }]}>Swithch on your location to stay in tune </Text>
                            <Text style={[gloabalStyle.subTitleStyle, { alignSelf: 'center', }]}> with what’s happening in your area</Text>
                        </View>
                        {/* Autocomplete */}
                        <View style={[styles.inputWrapper,{marginBottom:25}]}>
                            <Text style={styles.textLabel}>Your Country</Text>
                            <Dropdown
                                search
                                searchPlaceholder='Search ...'
                                placeholder={country ? country.name : ''}
                                containerStyle={styles.containerStyle}
                                dropdownPosition='BOTTOM'
                                maxHeight={260}
                                placeholderStyle={styles.placeholderStyle}
                                data={Data}
                                value={country}
                                labelField="name"
                                valueField="name"
                                onChange={item => { setcountry(item); }}
                                renderItem={(item) => (
                                    <View>
                                        <Text style={styles.placeholderStyle}>{item.name}</Text>
                                    </View>
                                )}
                            />
                            <View style={styles.line}/>
                        </View>
                        {country && <View style={styles.inputWrapper}>
                            <Text style={styles.textLabel}>Your state</Text>
                            <Dropdown
                                search
                                dropdownPosition='BOTTOM'
                                maxHeight={210}
                                searchPlaceholder='Search ...'
                                placeholder={state ? state.name : ''}
                                style={styles.CountryInput}
                                placeholderStyle={styles.placeholderStyle}
                                data={country.states}
                                value={state}
                                labelField="name"
                                valueField="name"
                                onChange={item => { setState(item); }}
                                renderItem={(item) => (
                                    <View>
                                        <Text style={styles.placeholderStyle}>{item.name}</Text>
                                    </View>
                                )}
                            />
                            <View style={styles.line}/>
                        </View>}
                        {country&&state&& <PrimaryButton text='Submit'style={styles.ButtonStyle} onPress={()=>navigation.navigate('Login')}/>}
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    imageWrapper: {
        marginHorizontal: 95,
        marginTop: 80,
        justifyContent: 'center',
    },
    image: {
        alignSelf: 'center',
        width: 220,
        height: 170,
    },
    contentWrapper: {
        flex: 1,

    },
    textSection: {
        margin: 40,
        justifyContent: 'center',
    },
    backIcon: {
        position: 'absolute',
        top: -50,
        left: -80,
    },
    placeholderStyle: {
        fontSize: 18,
        color: colors.Title,
    },
    inputWrapper: {
        marginHorizontal: 25,
    },
    line:{
        backgroundColor:colors.lineColor,
        padding:0.7,
    },
    textLabel:{
        fontSize:16,
        fontFamily:'Gilroy-SemiBold',
        
    },
    containerStyle:{

    },
    ButtonStyle: {
        marginTop:25,
        marginHorizontal:25,
    }
})
