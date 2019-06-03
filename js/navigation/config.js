import React from "react";
import {
  StyleSheet,
  View,
  Platform,
  TouchableOpacity,
  StatusBar
} from "react-native";
import { Header } from "react-navigation";
import LinearGradient from "react-native-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";

const GradientHeader = props => (
  <View style={{ backgroundColor: "white", overflow: "hidden" }}>
    <StatusBar barStyle="light-content" />
    <LinearGradient
      colors={["#cf392a", "#9963ea"]}
      start={{ x: 0.0, y: 1.0 }}
      end={{ x: 1.0, y: 0.0 }}
      style={[StyleSheet.absoluteFill, { height: 100, width: "100%" }]}
    />
    <Header {...props} />
  </View>
);

export const sharedNavigationOptions = navigation => ({
  headerBackTitle: null,
  header: props => <GradientHeader {...props} />,
  headerStyle: {
    backgroundColor: "transparent"
  },
  headerTintColor: "white",
  headerTitleStyle: {
    color: "white",
    fontFamily: "Montserrat"
  },
  headerLeft: Platform.OS === "android" && (
    <TouchableOpacity
      onPress={() => {
        navigation.toggleDrawer();
      }}
    >
      <Ionicons
        name="md-menu"
        color="#fff"
        size={25}
        style={{ marginLeft: 10 }}
      />
    </TouchableOpacity>
  )
});
