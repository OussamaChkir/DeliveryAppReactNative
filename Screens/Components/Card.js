import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import colors from '../../assets/colors/colors'
import AddButton from './AddButton'

export default function Card() {
    return (
        <View style={styles.cardWrapper}>
            <Image style={styles.cardImage} source={require('../../assets/images/banana.png')}/>
            <View style={styles.cardContent}>
            <Text style={styles.title}>Organic Bananas</Text>
            <Text style={styles.subTitle}>7pcs, Pricing</Text>
            <View style={styles.cardAction}>
                <Text style={styles.title}>$4.99</Text>
                <AddButton/>
            </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardWrapper:{
        borderRadius:18,
        borderColor:'#E2E2E2',
        borderWidth:1,
        width:170,
        height:250,
    },
    cardImage:{
        marginVertical:25,
        alignSelf: 'center',
        marginHorizontal:15,
    },
    cardContent:{},
    cardAction:{
        marginTop:20,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    title:{
        color:colors.Title,
        fontSize:18,
        fontFamily:'Gilroy-Bold',
        alignSelf: 'center',
    },
    subTitle:{
        
        color:colors.SubTitle,
        fontSize:14,
        fontFamily:'Gilroy-Medium',
        marginLeft:10,
    }
})
