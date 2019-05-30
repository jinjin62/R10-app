import React, { Component } from "react";
import Schedule from "./Schedule";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { formatSessionData } from "../../helpers/index";
import { Text, View, Viewscroll, SectionList } from "react-native";
import Loader from "../../components/Loader";
import FavesContext from "../../context/FavesContext";

class ScheduleContainer extends Component {
  static navigationOptions = {
    title: "Schedule"
  };
  render() {
    return (
      <Query query={GET_SCHEDULE_ITEMS}>
        {({ loading, error, data }) => {
          if (loading) return <Loader loading={loading} />;

          if (error) return <Text>Error</Text>;

          return (
            <FavesContext.Consumer>
              {value => (
                <Schedule
                  scheduleData={formatSessionData(data.allSessions)}
                  navigation={this.props.navigation}
                  favesMethods={value}
                />
              )}
            </FavesContext.Consumer>
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
        image
      }
      startTime
    }
  }
`;

export default ScheduleContainer;
