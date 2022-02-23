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
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { RFValue } from "react-native-responsive-fontsize";

const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

export default function UserDeatilsScreen({ navigation, route }) {
  const [text, onChangeText] = React.useState("");

  const { title, image, number } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#fff"
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 150 }}
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

            <Image style={styles.profileImage} source={image} />

            <Text style={styles.title}>{title}</Text>

            <Text style={styles.number}>{number}</Text>

            <View style={styles.socailIconsContainer}>
              <TouchableOpacity>
                <Image
                  style={{
                    width: RFValue(50),
                    height: RFValue(50),
                    marginRight: RFValue(20),
                  }}
                  source={require("../assets/icons/call.png")}
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <Image
                  style={{
                    width: RFValue(50),
                    height: RFValue(50),
                    marginRight: RFValue(20),
                  }}
                  source={require("../assets/icons/message.png")}
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <Image
                  style={{ width: RFValue(50), height: RFValue(50) }}
                  source={require("../assets/icons/share.png")}
                />
              </TouchableOpacity>
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
    height: HEIGHT / 2,
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
    fontSize: 14,
    fontFamily: "Bold",
    color: "#DCDEEC",
    textAlign: "center",
    marginTop: RFValue(18),
  },

  searchBarContainer: {
    width: WIDTH - 64,
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
    width: WIDTH - 140,
    color: "#373737",
    fontFamily: "Regular",
    height: RFValue(78),
    paddingHorizontal: 30,
    fontSize: RFValue(15),
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
  listImage: {
    width: RFValue(47),
    height: RFValue(47),
  },
  title: {
    fontSize: RFValue(17),
    fontFamily: "Regular",
    color: "#373737",
  },

  number: {
    fontSize: RFValue(13),
    fontFamily: "Regular",
    color: "#979797",
    marginTop: RFValue(5),
  },
  flatlist: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 32,
  },
  seprator: {
    width: WIDTH - 65,
    height: 1,
    backgroundColor: "#DFDFDF",
    alignSelf: "center",
    marginTop: RFValue(24),
  },
  profileImage: {
    width: RFValue(95),
    height: RFValue(95),
    alignSelf: "center",
    marginTop: RFValue(51),
    borderRadius: 0,
  },

  title: {
    fontSize: RFValue(20),
    fontFamily: "Bold",
    color: "#000",
    textAlign: "center",
    marginTop: RFValue(11),
  },
  number: {
    fontSize: RFValue(16),
    fontFamily: "Regular",
    color: "#979797",
    textAlign: "center",
    marginTop: RFValue(5),
  },
  socailIconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginTop: RFValue(16),
  },
});
