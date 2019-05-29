import React, { Component } from "react";
import About from "./About";
import { Text } from "react-native";
import { Query } from "react-apollo";
import gql from "graphql-tag";

class AboutContainer extends Component {
  static navigationOptions = {
    title: "About"
  };
  render() {
    return (
      <Query query={GET_CONDUCT_ITEMS}>
        {({ loading, data }) => {
          if (loading || !data) return <Text>"Loading..."</Text>;
          // console.log(data);
          return (
            <About
              conductData={data.allConducts.map(
                conductsDesc => conductsDesc.description
              )}
            />
          );
        }}
      </Query>
    );
  }
}

const GET_CONDUCT_ITEMS = gql`
  query {
    allConducts(orderBy: order_ASC) {
      id
      description
      title
    }
  }
`;

export default AboutContainer;
