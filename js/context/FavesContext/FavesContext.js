import React, { Component, createContext } from "react";
import { queryFaves, createFave, removeFave } from "../../config/models";

const FavesContext = createContext();

class FavesProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faveIds: []
    };
  }

  componentDidMount() {
    this.getFavedSessionIds();
  }

  getFavedSessionIds = async () => {
    try {
      const faves = await queryFaves();
      const faveIds = faves.map(fave => fave[0]);
      this.setState({ faveIds });
    } catch (e) {
      throw Error(e);
    }
  };

  addFaveSession = async id => {
    try {
      await createFave(id);
      this.getFavedSessionIds();
    } catch (error) {
      return false;
    }
  };

  removeFaveSession = async id => {
    try {
      await removeFave(id);
      this.getFavedSessionIds();
    } catch (error) {
      return false;
    }
  };
  render() {
    console.log(this.state.faveIds);
    return (
      <FavesContext.Provider
        value={{
          ...this.state,
          addFaveSession: this.addFaveSession,
          removeFaveSession: this.removeFaveSession
        }}
      >
        {this.props.children}
      </FavesContext.Provider>
    );
  }
}
export { FavesProvider };
export default FavesContext;
