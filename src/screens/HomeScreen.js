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
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { AnimatedCircularProgress } from "react-native-circular-progress";

const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

export default function HomeScreen({ navigation }) {
  const [text, onChangeText] = React.useState("");
  const [fill, setFill] = React.useState("73");
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

            <View style={styles.searchBarContainer}>
              <TextInput
                placeholder="найти номера"
                placeholderTextColor="#A7A8AB"
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
              />

              <TouchableOpacity
                onPress={() => navigation.navigate("SearchNumber")}
                activeOpacity={0.7}
                style={styles.searchButton}
              >
                <Image
                  style={styles.searchIcon}
                  source={require("../assets/icons/search.png")}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.progressContainer}>
              <AnimatedCircularProgress
                size={RFValue(120)}
                width={20}
                fill={fill}
                tintColor="#DFDFDF"
                onAnimationComplete={() => console.log("onAnimationComplete")}
                backgroundColor="#64A15E"
              >
                {(fill) => (
                  <Text
                    style={{
                      fontSize: 19,
                      fontFamily: "Bold",
                      color: "#64A15E",
                    }}
                  >
                    {fill}%
                  </Text>
                )}
              </AnimatedCircularProgress>

              <Text style={styles.exampleText}>Загрузка</Text>
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
});
