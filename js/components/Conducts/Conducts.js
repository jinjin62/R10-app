import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  Animated
} from "react-native";
import styles from "./styles";

export default class Conducts extends Component {
  constructor(props) {
    super(props);
    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    const currentIsOpen = this.state.isOpen;
    LayoutAnimation.easeInEaseOut();
    this.setState({
      isOpen: !currentIsOpen
    });
  }

  render() {
    const { isOpen } = this.state;
    const { item } = this.props;
    console.log("item props:", item);

    return (
      <View style={styles.each}>
        <TouchableOpacity onPress={() => this.toggle()}>
          <Text style={styles.conductTitle}>
            {isOpen ? "-" : "+"} {item.title}
          </Text>
        </TouchableOpacity>

        {isOpen ? (
          <Text style={styles.conductContent}>{item.description}</Text>
        ) : null}
      </View>
    );
  }
}
