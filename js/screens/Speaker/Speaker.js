import React, { Component } from "react";
import {
  Image,
  Linking,
  ScrollView,
  Text,
  TouchableHighlight,
  View,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/Ionicons";
import LinearGradient from "react-native-linear-gradient";

const Speaker = props => {
  return (
    <ScrollView style={styles.container}>
      <TouchableHighlight
        underlayColor={"transparent"}
        onPress={() => props.navigation.goBack()}
      >
        <View style={styles.speakerHeader}>
          <Icon
            size={30}
            color={"white"}
            style={{ justifyContent: "flex-start" }}
          />
          <Text style={styles.x}>X</Text>
          <Text style={styles.speakerTitle}>About the Speaker</Text>
          <View />
        </View>
      </TouchableHighlight>

      <ScrollView style={styles.wrapper}>
        <Image
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            alignSelf: "center"
          }}
          source={{ uri: props.speaker.image }}
        />
        <Text style={styles.name}>{props.speaker.name}</Text>
        <Text style={styles.bio}>{props.speaker.bio}</Text>

        <TouchableOpacity
          onPress={() => {
            Linking.openURL(`${props.speaker.url}`);
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 90
            }}
          >
            <LinearGradient
              colors={["#9963ea", "#cf392a"]}
              start={{ x: 0.0, y: 0.5 }}
              end={{ x: 0.5, y: 0.0 }}
              style={[StyleSheet.absoluteFill, styles.btn]}
            >
              <Text style={styles.btnText}>Read More On Wikipedia</Text>
            </LinearGradient>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </ScrollView>
  );
};

export default Speaker;
