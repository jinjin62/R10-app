import React from "react";
import { ScrollView, Text, View, Image } from "react-native";
import styles from "./styles";
import Conducts from "../../components/Conducts";

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
      <Text style={styles.desc}>
        R10 is a conference that focuses on just about any topic related to dev.
      </Text>
      <Text style={styles.title}>Date & Venue</Text>
      <Text style={styles.desc}>
        The R10 conference will take place on Tuesday, June 27, 2017 in
        Vancouver, BC.
      </Text>
      <Text style={styles.title}>Code of Conduct</Text>

      {conductItems &&
        conductItems.allConducts.map(item => {
          return <Conducts item={item} key={item.id} />;
        })}
    </ScrollView>
  );
};
export default About;
  