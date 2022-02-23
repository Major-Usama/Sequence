import { StyleSheet, Text, View,TextInput,Dimensions } from 'react-native'
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize';
const WIDTH = Dimensions.get('window').width
export default function Textinput(props) {
    const [text, onChangeText] = React.useState("");
  return (
    <View style={styles.container}>
       <TextInput
       secureTextEntry={props.secure}
       keyboardType={props.keyboardtype}
       placeholder={props.placeholder}
       placeholderTextColor={"#fff"}
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
    </View>
  )
}

const styles = StyleSheet.create({

container:
{

},
input:
{
    opacity:0.85,
    textAlign:'center',
    width:WIDTH/1.5,
    height:RFValue(52),
    backgroundColor:"#4C5051",
    borderRadius: 26,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    // marginBottom: RFValue(18),
    color:'#fff',
    fontFamily:'Bold',
    paddingHorizontal:10,
    marginBottom:RFValue(20)
}

})