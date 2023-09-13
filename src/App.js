import React, { Component, Fragment } from "react";
import CardList from "./Component/CardList";
import SearchBox from "./Component/SearchBox";
import "./App.css"

export class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value, });
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }

  render() {
    const filteredRobots = this.state.robots.filter((robots) => {
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });
    return (
      <Fragment>
        <div className="tc">
          <h1 className="f1">Robo Friends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <CardList robots={filteredRobots} />
        </div>
      </Fragment>
    );
  }
}

export default App;
