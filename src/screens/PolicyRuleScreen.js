import {
  Dimensions,
  Image,
  ImageBackground,
  Platform,
  PlatformColor,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Entypo } from "@expo/vector-icons";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;
export default function PolicyRuleScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/images/background.png")}
      style={styles.container}
    >
      <SafeAreaView>
        <Image
          source={require("../assets/images/p3.png")}
          style={styles.onboardImage}
        />

        <Text style={styles.title}>политика</Text>

        <Text style={styles.description}>
          Давно выяснено, что при оценке дизайна и{"\n"}композиции читаемый
          текст мешает{"\n"}сосредоточиться. Lorem Ipsum используют
        </Text>
      </SafeAreaView>
      <View style={styles.nextButtonContainer}>
        <View style={styles.tilesContainer}>
          <View style={styles.ActiveTile} />
          <View style={styles.nonnActiveTile} />

          <View style={styles.nonnActiveTile} />
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("SecurityRuleScreen")}
          activeOpacity={0.7}
          style={styles.nextButton}
        >
          <Text style={styles.nextButtonText}>Следующий</Text>

          <Entypo name="chevron-right" size={16} color="#fff" />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    marginTop: 10,
  },

  onboardImage: {
    width: RFPercentage(45),
    height: RFPercentage(23),
    alignSelf: "center",
    marginTop: RFValue(170),
  },

  title: {
    fontSize: RFValue(30),
    fontFamily: "Bold",
    color: "#000000",
    textAlign: "center",
    marginTop: RFValue(38),
  },
  description: {
    fontSize: RFValue(12),
    fontFamily: "Regular",
    color: "#373737",
    textAlign: "center",
    marginTop: RFValue(23),
  },

  nonnActiveTile: {
    width: RFValue(11),
    height: RFValue(8),
    backgroundColor: "#CCE7C2",
    borderRadius: 23,
    marginRight: RFValue(3),
  },
  ActiveTile: {
    width: RFValue(29),
    height: RFValue(8),
    backgroundColor: "#64A15E",
    borderRadius: 23,
    marginRight: RFValue(3),
  },
  tilesContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: RFValue(32),
  },

  nextButton: {
    width: RFValue(130),
    height: RFValue(34),
    backgroundColor: "#64A15E",
    borderTopLeftRadius: 23,
    borderBottomLeftRadius: 23,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  nextButtonText: {
    fontSize: RFValue(10),
    fontFamily: "Regular",
    color: "#fff",
    marginRight: RFValue(14),
  },
  nextButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",

    left: 0,
    right: 0,
    bottom: RFValue(25),
  },
});
