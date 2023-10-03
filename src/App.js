import React, { Component, Fragment } from "react";
import CardList from "./Component/CardList";
import SearchBox from "./Component/SearchBox";
import "./App.css"
import Scroll from "./Component/Scroll";
import { requestRobots, setSearchField } from './redux/action.js';
import { connect } from "react-redux";


const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => { requestRobots(dispatch) }
  }
}

export class App extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props
    const filteredRobots = robots.filter((robots) => {
      return robots.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      isPending ?
        <h1 className="tc f1"> Loading... </h1> :

        <Fragment >
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
