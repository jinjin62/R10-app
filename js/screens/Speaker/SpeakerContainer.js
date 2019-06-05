import React, { Component } from "react";
import Speaker from "./Speaker";
import PropTypes from "prop-types";

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

Speaker.propTypes = {
  sessions: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired
};
