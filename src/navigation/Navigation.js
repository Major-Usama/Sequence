import * as React from "react";
import { View, Text, TouchableOpacity, StatusBar, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PolicyRuleScreen from "../screens/PolicyRuleScreen";
import SecurityRuleScreen from "../screens/SecurityRuleScreen";
import SecurityRuleScreentwo from "../screens/SecurityRuleScreentwo";
import MainPageScreen from "../screens/MainPageScreen";
import RegistrationScreen from "../screens/RegistrationScreen";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import { RFValue } from "react-native-responsive-fontsize";
import ProfileScreen from "../screens/ProfileScreen";
import HistoryScreen from "../screens/HistoryScreen";
import FeedBackScreen from "../screens/FeedBackScreen";
import SearchNumber from "../screens/SearchNumber";
import UserDeatilsScreen from "../screens/UserDeatilsScreen";

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="PolicyRuleScreen" component={PolicyRuleScreen} />
        <Stack.Screen
          name="SecurityRuleScreen"
          component={SecurityRuleScreen}
        />
        <Stack.Screen
          name="SecurityRuleScreentwo"
          component={SecurityRuleScreentwo}
        />
        <Stack.Screen name="MainPageScreen" component={MainPageScreen} />
        <Stack.Screen
          name="RegistrationScreen"
          component={RegistrationScreen}
        />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="tabs" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: -RFValue(30),
      justifyContent: "center",
      alignItems: "center",
    }}
    onPress={onPress}
  >
    <View
      style={{
        width: RFValue(66),
        height: RFValue(70),
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
);

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      lazy={false}
      tabBarOptions={{
        activeTintColor: "#64A15E",

        iconStyle: {
          top: Platform.OS === "android" ? RFValue(5) : RFValue(16),
        },

        style: {
          backgroundColor: "#fff",
          position: "absolute",
          borderTopColor: "lightgray",
          height: RFValue(59),
          zIndex: 9999,
          borderTopWidth: 0.6,
        },
      }}
    >
      <Tab.Screen
        options={{
          headerShown: false,

          tabBarLabel: "",

          tabBarIcon: ({ focused, tintColor, color }) => {
            if (focused)
              return (
                <Image
                  style={{
                    width: RFValue(20),
                    height: RFValue(17),
                    tintColor: "#64A15E",
                  }}
                  source={require("../assets/icons/home.png")}
                />
              );
            else
              return (
                <Image
                  style={{ width: 20, height: 17 }}
                  source={require("../assets/icons/home.png")}
                />
              );
          },
        }}
        name="HomeScreen"
        component={HomeStackFunc}
      />

      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: ({ focused, tintColor, color }) => {
            if (focused)
              return (
                <Image
                  style={{
                    width: RFValue(17),
                    height: RFValue(17),
                    tintColor: "#64A15E",
                  }}
                  source={require("../assets/icons/profile.png")}
                />
              );
            else
              return (
                <Image
                  style={{ width: RFValue(17), height: RFValue(17) }}
                  source={require("../assets/icons/profile.png")}
                />
              );
          },
        }}
        name="ProfileScreen"
        component={ProfileScreen}
      />

      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: "",

          tabBarIcon: ({ focused }) => (
            <Image
              style={{
                width: RFValue(66),
                height: RFValue(68),
                top: RFValue(2),
              }}
              source={require("../assets/icons/tabbutton.png")}
            />
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
        name="HomeScreeen"
        component={HomeScreen}
      />

      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: ({ focused, tintColor, color }) => {
            if (focused)
              return (
                <Image
                  style={{
                    width: RFValue(20),
                    height: RFValue(17),
                    tintColor: "#64A15E",
                  }}
                  source={require("../assets/icons/history.png")}
                />
              );
            else
              return (
                <Image
                  style={{ width: RFValue(20), height: RFValue(17) }}
                  source={require("../assets/icons/history.png")}
                />
              );
          },
        }}
        name="HistoryScreen"
        component={HistoryScreen}
      />

      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: ({ focused, tintColor, color }) => {
            if (focused)
              return (
                <Image
                  style={{
                    width: RFValue(20),
                    height: RFValue(17),
                    tintColor: "#64A15E",
                  }}
                  source={require("../assets/icons/feedback.png")}
                />
              );
            else
              return (
                <Image
                  style={{ width: RFValue(20), height: RFValue(17) }}
                  source={require("../assets/icons/feedback.png")}
                />
              );
          },
        }}
        name="FeedBackScreen"
        component={FeedBackScreen}
      />
    </Tab.Navigator>
  );
}

const HomeStack = createNativeStackNavigator();

function HomeStackFunc() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="SearchNumber" component={SearchNumber} />
      <Stack.Screen name="UserDeatilsScreen" component={UserDeatilsScreen} />
    </HomeStack.Navigator>
  );
}
