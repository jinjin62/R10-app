import React, { Component } from "react";
import {
  Text,
  View,
  SectionList,
  TouchableHighlight,
  Platform
} from "react-native";
import moment from "moment";
import styles from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import PropTypes from "prop-types";

const Schedule = ({ scheduleData, navigation, faveIds }) => {
  const heart = Platform.select({
    ios: "ios-heart",
    android: "md-heart"
  });
  return (
    <SectionList
      style={styles.container}
      renderItem={({ item, index, section }) => {
        return (
          <View style={styles.divider}>
            <TouchableHighlight
              underlayColor={"#e6e6e6"}
              onPress={() => {
                if (!item.speaker) {
                  navigation.navigate("", {});
                } else {
                  navigation.navigate("Sessions", {
                    id: item.id
                  });
                }
              }}
            >
              <View key={item.id} style={styles.eventList}>
                <Text key={index} style={styles.eventTitle}>
                  {item.title}
                </Text>
                <View style={styles.locationContainer}>
                  <Text style={styles.location}>{item.location}</Text>
                  {faveIds.includes(item.id) ? (
                    <Ionicons
                      name={heart}
                      style={styles.fave}
                      size={15}
                      color="red"
                    />
                  ) : null}
                </View>
              </View>
            </TouchableHighlight>
          </View>
        );
      }}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.time}>{moment(title).format("LT")}</Text>
      )}
      sections={scheduleData}
      keyExtractor={(item, index) => item + index}
    />
  );
};

Schedule.propTypes = {
  scheduleData: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired,
  faveIds: PropTypes.array.isRequired
};

export default Schedule;
