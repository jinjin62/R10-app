import React, { Component } from "react";
import {
  Text,
  View,
  Viewscroll,
  SectionList,
  TouchableHighlight
} from "react-native";
import moment from "moment";

const Schedule = ({ scheduleData, navigation }) => {
  console.log(scheduleData);
  return (
    <View>
      <SectionList
        renderItem={({ item, index, section }) => (
          <TouchableHighlight onPress={() => navigation.navigate("Sessions")}>
            <View>
              <Text key={index}>{item.title}</Text>
              <Text key={item}>{item.location}</Text>
            </View>
          </TouchableHighlight>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={{ fontWeight: "bold" }}>
            {moment(title).format("LT")}
          </Text>
        )}
        sections={scheduleData}
        keyExtractor={(item, index) => item + index}
      />
    </View>
  );
};

export default Schedule;
