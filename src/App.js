import React, { Component, Fragment } from "react";
import CardList from "./Component/CardList";
import { robots } from "./Component/robotsData";
import SearchBox from "./Component/SearchBox";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: "",
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value, });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robots) => {
      return robots.username.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });
    return (
      <Fragment>
        <div className="tc">
          <h1>Robo Friends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <CardList robots={filteredRobots} />
        </div>
      </Fragment>
    );
  }
}

export default App;
