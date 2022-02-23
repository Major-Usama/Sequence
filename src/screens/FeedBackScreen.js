import {
  Dimensions,
  Image,
  ImageBackground,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { RFValue } from "react-native-responsive-fontsize";

const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

export default function FeedBackScreen({ navigation }) {
  const [username, setUserName] = useState("");
  const [email, setEmails] = useState("");
  const [message, setMessage] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#fff"
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{}}
      >
        <ImageBackground
          resizeMode="contain"
          style={styles.homebackImage}
          source={require("../assets/images/homeback.jpg")}
        >
          <Image
            style={styles.phoneIcon}
            source={require("../assets/icons/phone.png")}
          />
        </ImageBackground>

        <View style={styles.mainFooter}>
          <View style={styles.innerFooter}>
            <Text style={styles.exampleText}>EXAMPLE</Text>

            <Text style={styles.screenTitle}>Связаться с нами</Text>

            <View style={styles.inputsContainer}>
              <TextInput
                style={styles.input}
                placeholder="ваше имя"
                placeholderTextColor={"#8D8D8D"}
                onChangeText={setUserName}
                value={username}
              />

              <TextInput
                style={styles.input}
                placeholder="Эл.адрес"
                placeholderTextColor={"#8D8D8D"}
                onChangeText={setEmails}
                value={email}
              />

              <View style={styles.meesageInputContainer}>
                <TextInput
                  numberOfLines={4}
                  multiline
                  style={styles.messageinput}
                  placeholder="Эл.адрес"
                  placeholderTextColor={"#8D8D8D"}
                  onChangeText={setMessage}
                  value={message}
                />

                <TouchableOpacity activeOpacity={0.7} style={styles.sendButton}>
                  <Text style={styles.sendText}>Отправить</Text>
                </TouchableOpacity>
              </View>

              <View></View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D8E7D7",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  homebackImage: {
    width: WIDTH,
    height: HEIGHT / 3,
  },

  phoneIcon: {
    width: RFValue(37),
    height: RFValue(37),
    position: "absolute",
    top: RFValue(20),
    left: RFValue(32),
  },

  mainFooter: {
    width: WIDTH,
    height: HEIGHT / 1.4,
    backgroundColor: "#F3F3F3",
    borderTopRightRadius: 51,
    borderTopLeftRadius: 51,
  },

  innerFooter: {
    width: WIDTH,
    height: HEIGHT,
    backgroundColor: "#fff",
    borderTopRightRadius: 51,
    borderTopLeftRadius: 51,
    marginTop: RFValue(13),
  },

  exampleText: {
    fontSize: RFValue(14),
    fontFamily: "Bold",
    color: "#DCDEEC",
    textAlign: "center",
    marginTop: RFValue(18),
  },

  searchBarContainer: {
    width: WIDTH - RFValue(64),
    height: RFValue(78),
    borderRadius: 20,
    backgroundColor: "#F5F6FC",
    alignSelf: "center",
    marginTop: RFValue(18),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    width: WIDTH - RFValue(140),
    color: "#373737",
    fontFamily: "Regular",
    height: RFValue(78),
    paddingHorizontal: RFValue(30),
    fontSize: RFValue(18),
  },
  searchButton: {
    width: RFValue(55),
    height: RFValue(55),
    borderRadius: 18,
    backgroundColor: "#CCE7C2",
    justifyContent: "center",
    alignItems: "center",
  },
  searchIcon: {
    width: RFValue(19),
    height: RFValue(19),
  },

  progressContainer: {
    alignSelf: "center",
    marginTop: RFValue(50),
  },
  screenTitle: {
    fontSize: RFValue(22),
    fontFamily: "Bold",
    color: "#000",
    textAlign: "center",
    marginTop: RFValue(40),
    textTransform: "uppercase",
  },
  inputsContainer: {},

  input: {
    width: WIDTH - RFValue(66),
    height: RFValue(53),
    alignSelf: "center",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    paddingHorizontal: RFValue(30),
    borderRadius: 26,
    marginBottom: 15,
  },

  meesageInputContainer: {
    width: WIDTH - RFValue(66),
    height: RFValue(150),
    alignSelf: "center",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    paddingHorizontal: RFValue(30),
    borderRadius: 26,
  },
  messageinput: {},
  sendButton: {
    width: RFValue(117),
    height: RFValue(34),
    backgroundColor: "#BF0101",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    borderRadius: 26,
    bottom: 6,
    right: 9,
  },

  sendText: {
    fontSize: RFValue(12),
    color: "#fff",
    fontFamily: "Bold",
  },
});
