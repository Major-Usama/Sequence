import {
    ImageBackground,
    Platform,
    SafeAreaView,
    Dimensions,
    StatusBar,
    StyleSheet,
    Text,
    View,
    ScrollView,
  } from "react-native";
  import React, { useState } from "react";
  import { RFValue } from "react-native-responsive-fontsize";
  import Button from "../components/common/Button";
  import Textinput from "../components/common/Textinput";
  import { heightPercentageToDP } from "react-native-responsive-screen";
import Navigation from "../navigation/Navigation";
  const WIDTH = Dimensions.get("window").width;
  export default function LoginScreen({navigation}) {
    const [username, setusername] = React.useState("");
    const [password, setpassword] = React.useState("");
    const [phone, setPhone] = React.useState("");
  
    return (
      <ImageBackground
        source={require("../assets/images/mainback.jpg")}
        style={styles.container}
      >
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="#A89880"
          translucent={true}
        />
        <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom:50}}
        >
        <SafeAreaView>
          <View style={styles.mainLogoContainer}>
            <Text>Logo</Text>
          </View>
  
          <Text style={styles.logoText}>EXAMPLE</Text>
        </SafeAreaView>
  
        <View style={styles.footerContentContainer}>
          <Textinput
            secure={false}
            keyboardtype="default"
            value={username}
            onChangeText={() => setusername()}
            placeholder="Username"
          />
  
          <Textinput
            secure={true}
            keyboardtype="default"
            value={password}
            onChangeText={() => setpassword()}
            placeholder="Password"
          />
         
  
          <View style={styles.buttonsContainer}>
            <Button
            onPress={()=>navigation.navigate('tabs')}
              title="Login"
              bcolor="#64A15E"
              btextcolor="#fff"
              width={WIDTH / 1.5}
              height={RFValue(52)}
            />
          </View>
  
          <Text style={styles.exampleText}>EXAMPLE</Text>
        </View>
        </ScrollView>
      </ImageBackground>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
  
    mainLogoContainer: {
      alignSelf: "center",
      marginTop: RFValue(70),
    },
    logoText: {
      fontSize: RFValue(36),
      fontFamily: "Bold",
      color: "#fff",
      textAlign: "center",
      marginTop: RFValue(18),
    },
    footerContentContainer: {
      marginTop: heightPercentageToDP("24%"),
    },
    helloWelcomeText: {
      fontSize: RFValue(30),
      fontFamily: "Bold",
      color: "#fff",
      marginLeft: RFValue(68),
    },
    buttonsContainer: {},
    exampleText: {
      fontSize: RFValue(14),
      fontFamily: "Bold",
      color: "#fff",
      alignSelf: "center",
      marginTop: RFValue(54),
    },
  });
  