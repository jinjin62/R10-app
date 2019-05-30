import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableHighlight,
  Button
} from "react-native";
import styles from "./styles";
import moment from "moment";
// import FavesContext  from "./context/FavesContext";

// create a component
const Session = props => {
  const { id, title, location, startTime, description, speaker } = props.item;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%"
        }}
      >
        <Text style={styles.location}>{location}</Text>
      </View>

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.time}>{moment(startTime).format("LT")} </Text>
      <Text style={styles.description}>{description}</Text>

      <Text style={styles.location}>Presented by:</Text>
      <TouchableHighlight
        underlayColor={"transparent"}
        onPress={() => props.navigation.navigate("Speaker", { speaker })}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            style={{ width: 60, height: 60, borderRadius: 30 }}
            source={{ uri: speaker.image }}
          />
          <Text style={styles.speaker}>{speaker.name}</Text>
        </View>
      </TouchableHighlight>

      <View style={styles.divider} />

      <Button title={"Add to Faves"} />
    </ScrollView>
  );
};

export default Session;
