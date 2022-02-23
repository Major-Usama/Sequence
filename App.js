import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./src/navigation/Navigation";
import { useFonts } from "expo-font";
import { LogBox } from "react-native";

export default function App() {
  const [loaded] = useFonts({
    Regular: require("./src/assets/fonts/Segoe-UI.ttf"),
    Bold: require("./src/assets/fonts/Segoe-UI-Bold.ttf"),
  });
  if (!loaded) {
    return false;
  }

  LogBox.ignoreLogs(["Warning: ..."]);
  LogBox.ignoreAllLogs();
  return <Navigation />;
}
