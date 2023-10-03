import React, { Component, Fragment } from "react";
import CardList from "./Component/CardList";
import SearchBox from "./Component/SearchBox";
import "./App.css"
import Scroll from "./Component/Scroll";
import { setSearchField } from './redux/action.js';
import { connect } from "react-redux";


const mapStateToProps = state => {
  return {
    searchField: state.searchField
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
  }
}

export class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }

  render() {
    const { robots } = this.state;
    const { searchField, onSearchChange } = this.props
    const filteredRobots = robots.filter((robots) => {
      return robots.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      !robots.length ?
        <h1 className="tc f1"> Loading... </h1> :
        <Fragment>
          <div className="tc">
            <h1 className="f1">Robo Friends</h1>
            <SearchBox searchChange={onSearchChange} />
            <Scroll>
              <CardList robots={filteredRobots} />
            </Scroll>
          </div>
        </Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
