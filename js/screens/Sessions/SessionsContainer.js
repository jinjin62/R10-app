import React, { Component } from "react";
import Sessions from "./Sessions";
import { Query } from "react-apollo";
import Loader from "../../components/Loader";
import gql from "graphql-tag";
import FavesContext from "../../context/FavesContext";

export default class SessionsContainer extends Component {
  static navigationOptions = {
    title: "Sessions"
  };

  render() {
    const id = this.props.navigation.getParam("id");
    return (
      <Query variables={{ id }} query={GET_SPEAKERS_ID}>
        {({ loading, data }) => {
          if (loading || !data) return <Loader loading={loading} />;
          console.log(data);
          return (
            <FavesContext.Consumer>
              {({ faveIds, addFaveSession, removeFaveSession }) => (
                <Sessions
                  navigation={this.props.navigation}
                  session={data.Session}
                  faveIds={faveIds}
                  addFaveSession={addFaveSession}
                  removeFaveSession={removeFaveSession}
                />
              )}
            </FavesContext.Consumer>
          );
        }}
      </Query>
    );
  }
}

const GET_SPEAKERS_ID = gql`
  query session($id: ID!) {
    Session(id: $id) {
      id
      location
      startTime
      title
      description
      speaker {
        id
        bio
        name
        image
        url
      }
    }
  }
`;
