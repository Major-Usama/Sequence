import { ImageBackground, Platform, SafeAreaView,Dimensions, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import Button from '../components/common/Button'
const WIDTH = Dimensions.get('window').width
export default function MainPageScreen({navigation}) {
  return (

    <ImageBackground
    source={require('../assets/images/mainback.jpg')}
    style={styles.container}
    >
   <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#A89880" translucent = {true}/>
    <SafeAreaView>
      
      <View style={styles.mainLogoContainer}>
         <Text>Logo</Text>
      </View>

      <Text style={styles.logoText}>EXAMPLE</Text>

    </SafeAreaView>
    
    <View style={styles.footerContentContainer}>

<Text style={styles.helloWelcomeText}>Hello,{'\n'}
  Welcome</Text>

  <View style={styles.buttonsContainer}>
      <Button 
        onPress={()=>navigation.navigate('LoginScreen')}
      title="Login"
      bcolor="#64A15E"
      btextcolor="#fff"
      width={WIDTH/1.5}
      height={RFValue(52)}
      
      />
      <Button 
      onPress={()=>navigation.navigate('RegistrationScreen')}
      title="Registration"
      bcolor="#FFB17A"
      btextcolor="#724424"
      width={WIDTH/1.5}
      height={RFValue(52)}
      
      />
  </View>

  <Text
  style={styles.exampleText}
  >EXAMPLE</Text>

</View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({

container:
{
    flex:1,
    backgroundColor:'#fff',
    paddingTop:Platform.OS==='android'?StatusBar.currentHeight:0,

},

mainLogoContainer:
{
    alignSelf:'center',
    marginTop:RFValue(70),
},
 logoText:
 {
     fontSize:RFValue(36),
     fontFamily:'Bold',
     color:'#fff',
     textAlign:'center',
     marginTop:RFValue(18),
 },
 footerContentContainer:
 {
     position:'absolute',
     left:0,
     right:0,
     bottom:60,

 },
 helloWelcomeText:
 {
     fontSize:RFValue(30),
     fontFamily:"Bold",
     color:'#fff',
     marginLeft:RFValue(68)
 },
 buttonsContainer:
 {
     marginTop:RFValue(34),

 },
 exampleText:
 {
     fontSize:RFValue(14),
     fontFamily:"Bold",
     color:'#fff',
     alignSelf:'center',
     marginTop:RFValue(54)
 }

})