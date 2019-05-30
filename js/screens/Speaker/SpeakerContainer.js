import React, { Component } from "react";
import { View, Text } from "react-native";
import Speaker from "./Speaker";

export default class SpeakerContainer extends Component {
  render() {
    const speaker = this.props.navigation.getParam("speaker");
    const id = this.props.navigation.getParam("id");
    console.log("SPEAKER CONTAINER: ", speaker);

    return (
      <Speaker speaker={speaker} id={id} navigation={this.props.navigation} />
    );
  }
}
