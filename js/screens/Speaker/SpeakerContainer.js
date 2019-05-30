import React, { Component } from "react";
import { View, Text } from "react-native";
import Speaker from "./Speaker";

export default class SpeakerContainer extends Component {
  render() {
    const speaker = this.props.navigation.getParam("speaker", "description");
    console.log("CONTAINER SPEAKER: ", speaker);
    return <Speaker speaker={speaker} navigation={this.props.navigation} />;
  }
}
