import React, { Component } from "react";
import {
  Text,
  View,
  Viewscroll,
  SectionList,
  TouchableHighlight
} from "react-native";
import moment from "moment";
import styles from "./styles";

const Schedule = ({ scheduleData, navigation, favesMethods }) => {
  console.log("THE FAVES:", favesMethods);
  return (
    <View style={styles.container}>
      <SectionList
        renderItem={({ item, index, section }) => (
          <View style={styles.divider}>
            <TouchableHighlight
              underlayColor={"#e6e6e6"}
              onPress={() =>
                navigation.navigate("Sessions", {
                  item: item,
                  id: item.speaker.id
                })
              }
            >
              <View style={styles.eventList}>
                <Text key={index} style={styles.eventTitle}>
                  {item.title}
                </Text>
                <Text key={item} style={styles.location}>
                  {item.location}
                </Text>
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
    </View>
  );
};

export default Schedule;
