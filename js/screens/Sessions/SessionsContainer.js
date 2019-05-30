import React, { Component } from "react";
import Sessions from "./Sessions";
import { Query } from "react-apollo";
import Loader from "../../components/Loader";
import gql from "graphql-tag";
// import FavesContext  from "./context/FavesContext";
export default class SessionsContainer extends Component {
  static navigationOptions = {
    title: "Sessions"
  };

  render() {
    const id = this.props.navigation.getParam("id");
    return (
      <Query variables={{ id }} query={GET_SPEAKERS_ID}>
        {({ loading, data }) => {
          console.log("QUERY DATA: ", data);
          if (loading || !data) return <Loader loading={loading} />;
          return (
            <Sessions
              navigation={this.props.navigation}
              speaker={data.allSpeakers[0]}
              item={this.props.navigation.getParam("item")}
            />
          );
        }}
      </Query>
    );
  }
}

const GET_SPEAKERS_ID = gql`
  query allSpeakers($id: ID) {
    allSpeakers(filter: { id: $id }) {
      id
      bio
      name
      image
      url
    }
  }
`;
