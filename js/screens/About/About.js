import React from "react";
import { Text, View, Viewscroll } from "react-native";

import { styles } from "./styles";

const About = ({ conductData }) => {
  return (
    <View style={styles.container}>
      {/* <Text>{conductData.title}</Text> */}
      <Text style={styles.welcome}>{conductData}</Text>
    </View>
  );
};

export default About;
