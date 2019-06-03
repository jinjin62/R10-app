import React, { Component } from "react";
import {
  View,
  Text,
  LayoutAnimation,
  Platform,
  UIManager,
  Animated,
  TouchableOpacity
} from "react-native";
import styles from "./styles";
class ConductItem extends Component {
  constructor(props) {
    super(props);
    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    this.state = {
      isOpen: false,
      isPlusSign: true,
      rotate: new Animated.Value(0)
    };
  }
  toggle() {
    const animation = Animated.timing(this.state.rotate, {
      toValue: 1,
      duration: 500
    });
    animation.start(animation => {
      if (animation.finished) {
        this.setState({
          rotate: new Animated.Value(0),
          isPlusSign: !this.state.isPlusSign
        });
      }
    });
    const createAnimation = {
      duration: 1000,
      create: {
        type: "spring",
        property: "scaleY",
        springDamping: 2
      },
      update: {
        type: "easeInEaseOut"
      }
    };
    const removeAnimation = {
      duration: 300,
      delete: {
        type: "linear",
        property: "scaleXY"
      },
      update: {
        type: "easeInEaseOut"
      }
    };
    if (this.state.isOpen) {
      LayoutAnimation.configureNext(removeAnimation);
    } else {
      LayoutAnimation.configureNext(createAnimation);
    }
    // LayoutAnimation.easeInEaseOut();
    this.setState({ isOpen: !this.state.isOpen });
  }
  render() {
    const { item } = this.props;
    const { isOpen, rotate, isPlusSign } = this.state;
    const spin = rotate.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"]
    });
    let animatedStyles = {
      transform: [{ rotate: spin }]
    };

    return (
      <View style={styles.eachBlock}>
        <TouchableOpacity
          style={styles.titleContainer}
          onPress={() => this.toggle()}
        >
          <Animated.Text style={[styles.plusSign, animatedStyles]}>
            {isPlusSign ? "+" : "-"}
          </Animated.Text>
          <Text style={[styles.conductTitle]}>{item.title}</Text>
        </TouchableOpacity>
        {isOpen ? (
          <Text style={styles.conductContent}>{item.description}</Text>
        ) : null}
      </View>
    );
  }
}

export default ConductItem;
