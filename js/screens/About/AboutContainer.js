import React, { Component } from "react";
import { Query } from "react-apollo";
import About from "./About";
import gql from "graphql-tag";
import Loader from "../../components/Loader";
class AboutContainer extends Component {
  static navigationOptions = {
    title: "About"
  };
  render() {
    return (
      <Query query={GET_CONDUCT_ITEMS}>
        {({ loading, data }) => {
          if (loading || !data) return <Loader loading={loading} />;
          console.log(data);
          return <About conductItems={data} />;
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
