import React, { Component } from "react";
import { View, Text } from "react-native";
import Speaker from "./Speaker";

export default class SpeakerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Speaker />;
  }
}
