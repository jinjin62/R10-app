import React from "react";
import { ScrollView, Text, View, Image } from "react-native";
import styles from "./styles";
const About = ({ conductItems }) => {
  return (
    <ScrollView>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../assets/images/r10_logo.png")}
        />
      </View>
      <View style={styles.divider} />
      <Text style={styles.paragraph}>
        R10 is a conference that focuses on just about any topic related to dev.
      </Text>
      <Text style={styles.title}>Date & Venue</Text>
      <Text style={styles.paragraph}>
        The R10 conference will take place on Tuesday, June 27, 2017 in
        Vancouver, BC.
      </Text>
      <Text style={styles.title}>Code of Conduct</Text>
      {conductItems &&
        conductItems.allConducts.map(item => {
          return (
            <View style={styles.each} key={item.id}>
              <Text style={styles.conductTitle}>{item.title}</Text>
              <Text style={styles.conductContent}>{item.description}</Text>
            </View>
          );
        })}
    </ScrollView>
  );
};
export default About;
