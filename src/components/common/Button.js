import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { RFValue } from "react-native-responsive-fontsize";

export default function Button(props) {
  return (
    <TouchableOpacity
    onPress={props.onPress}
      activeOpacity={0.7}
      style={{
        ...styles.buttonContainer,
        backgroundColor: props.bcolor,
        width: props.width,
        height: props.height,
      }}
    >
      <Text style={{ ...styles.btnText, color: props.btextcolor }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    
    borderRadius: 26,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: RFValue(18),
  },
  btnText: {
    fontSize: RFValue(14),
    color: "#fff",
    fontFamily: "Bold",
  },
});
