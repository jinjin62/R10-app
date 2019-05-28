import React, { Component } from "react";
import { View, Text } from "react-native";
import Sessions from "./Sessions";

export default class SessionsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Sessions />;
  }
}
