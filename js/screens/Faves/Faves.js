import React, { Component } from "react";
import {
  Platform,
  View,
  Text,
  SectionList,
  TouchableHighlight
} from "react-native";
import styles from "./styles";
import moment from "moment";
import Ionicons from "react-native-vector-icons/Ionicons";
import PropTypes from "prop-types";

const Faves = ({ sessions, navigation }) => {
  return (
    <View style={styles.container}>
      <SectionList
        keyExtractor={item => item.id}
        sections={sessions}
        renderItem={({ item, index, section }) => {
          return (
            <View style={styles.divider}>
              <TouchableHighlight
                underlayColor={"transparent"}
                key={item.id}
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
                <View style={{ flexDirection: "row" }}>
                  <View style={styles.event}>
                    <Text style={styles.listTitle}>{item.title}</Text>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center"
                      }}
                    >
                      <Text style={styles.location}>{item.location}</Text>

                      <Ionicons
                        name={Platform.select({
                          ios: "ios-heart",
                          android: "md-heart"
                        })}
                        size={20}
                        color={"red"}
                        style={styles.fave}
                      />
                    </View>
                  </View>
                </View>
              </TouchableHighlight>
            </View>
          );
        }}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.time}>{moment(title).format("LT")}</Text>
        )}
      />
    </View>
  );
};

Faves.propTypes = {
  sessions: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired
};

export default Faves;
