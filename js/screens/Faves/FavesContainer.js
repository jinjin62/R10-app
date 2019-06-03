import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { ActivityIndicator, View, Text } from "react-native";
import { Font } from "../../config/styles";
import { formatSessionData } from "../../helpers/index";
import FavesContext from "../../context/FavesContext/";
import Faves from "./Faves";
import styles from "../Speaker/styles";

export default class FavesContainer extends Component {
  static navigationOptions = {
    title: "Faves"
  };

  render() {
    return (
      <Query
        query={gql`
          {
            allSessions {
              id
              title
              startTime
              location
              description
              speaker {
                id
                image
                name
                url
                bio
              }
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading)
            return (
              <ActivityIndicator size="large" style={{ height: "100%" }} />
            );

          return (
            <FavesContext.Consumer>
              {({ faveIds }) => {
                const filteredSessions = data.allSessions.filter(event => {
                  return faveIds.includes(event.id);
                });

                {
                  if (filteredSessions.length === 0) {
                    return (
                      <View style={styles.noFave}>
                        <Text
                          style={{
                            fontFamily: Font.mont,
                            fontSize: 20,
                            textAlign: "center",
                            paddingTop: 150
                          }}
                        >
                          No favourites added yet
                        </Text>
                      </View>
                    );
                  } else {
                    return (
                      <Faves
                        sessions={formatSessionData(filteredSessions)}
                        faveIds={faveIds}
                        navigation={this.props.navigation}
                      />
                    );
                  }
                }
              }}
            </FavesContext.Consumer>
          );
        }}
      </Query>
    );
  }
}
