import React from "react";
import styles from "./styles";
import { View, ActivityIndicator } from "react-native";

const Loader = ({ loading }) => {
  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator animating={true} size="large" color="black" />
      ) : null}
    </View>
  );
};

export default Loader;
