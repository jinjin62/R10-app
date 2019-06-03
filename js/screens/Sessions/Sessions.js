import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import styles from "./styles";
import moment from "moment";
import Ionicons from "react-native-vector-icons/Ionicons";
import PropTypes from "prop-types";

// create a component
const Session = ({
  navigation,
  session,
  faveIds,
  addFaveSession,
  removeFaveSession
}) => {
  const { id, title, location, startTime, description, speaker } = session;
  return (
    session && (
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
          {faveIds.includes(id) ? (
            <Ionicons
              name="ios-heart"
              size={25}
              color="red"
              style={styles.fave}
            />
          ) : null}
        </View>

        <Text style={styles.title}>{title}</Text>
        <Text style={styles.time}>{moment(startTime).format("LT")} </Text>
        <Text style={styles.description}>{description}</Text>

        <Text style={styles.location}>Presented by:</Text>
        <TouchableHighlight
          underlayColor={"transparent"}
          onPress={() =>
            navigation.navigate("Speaker", {
              speaker: speaker
            })
          }
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
        <TouchableOpacity
          onPress={() => {
            faveIds.includes(id) ? removeFaveSession(id) : addFaveSession(id);
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 60
            }}
          >
            <LinearGradient
              colors={["#9963ea", "#cf392a"]}
              start={{ x: 0.0, y: 0.5 }}
              end={{ x: 0.5, y: 0.0 }}
              style={[StyleSheet.absoluteFill, styles.btn]}
            >
              <Text style={styles.btnText}>
                {faveIds.includes(id) ? "Remove from Faves" : "Add to Faves"}
              </Text>
            </LinearGradient>
          </View>
        </TouchableOpacity>
      </ScrollView>
    )
  );
};

Session.propTypes = {
  session: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
  faveIds: PropTypes.array.isRequired
};

export default Session;
