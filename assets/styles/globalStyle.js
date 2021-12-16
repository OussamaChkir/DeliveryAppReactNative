import { StyleSheet } from "react-native"
import colors from "../colors/colors";


const gloabalStyle = StyleSheet.create({
container:{
    flex:1,
    backgroundColor:'#FCFCFC',
},
titleStyle:{
color:colors.Title,
fontSize:26,
fontFamily:'Gilroy-Bold',
},
subTitleStyle:{
    color:colors.SubTitle,
    fontSize:16,
    fontFamily:'Gilroy-Medium',
},
error:{
color:colors.Error,
},
})


export default gloabalStyle;