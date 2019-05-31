import React, { Component } from "react";
import {
  Text,
  View,
  Viewscroll,
  SectionList,
  TouchableHighlight,
  Platform
} from "react-native";
import moment from "moment";
import styles from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";

const Schedule = ({ scheduleData, navigation, faveIds }) => {
  const heart = Platform.select({
    ios: "ios-heart",
    android: "md-heart"
  });
  return (
    <SectionList
      style={styles.container}
      renderItem={({ item, index, section }) => (
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
              <Text style={styles.location}>{item.location}</Text>
              {faveIds.includes(item.id) ? (
                <Ionicons name={heart} size={20} color="red" />
              ) : null}
            </View>
          </TouchableHighlight>
        </View>
      )}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.time}>{moment(title).format("LT")}</Text>
      )}
      sections={scheduleData}
      keyExtractor={(item, index) => item + index}
    />
  );
};

export default Schedule;
