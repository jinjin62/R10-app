import React, { Component } from "react";
import Schedule from "./Schedule";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { formatSessionData } from "../../helpers/index";
import { Text, View, Viewscroll, SectionList } from "react-native";

class ScheduleContainer extends Component {
  static navigationOptions = {
    title: "Schedule"
  };
  render() {
    return (
      <Query query={GET_SCHEDULE_ITEMS}>
        {({ loading, data }) => {
          if (loading || !data) return <Text>"Loading..."</Text>;
          // console.log(data);
          return (
            <Schedule
              scheduleData={formatSessionData(data.allSessions)}
              navigation={this.props.navigation}
            />
          );
        }}
      </Query>
    );
  }
}

const GET_SCHEDULE_ITEMS = gql`
  query {
    allSessions {
      title
      description
      location
      speaker {
        name
      }
      startTime
    }
  }
`;

export default ScheduleContainer;
