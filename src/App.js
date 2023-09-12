import React, { Component, Fragment } from "react";
import CardList from "./Component/CardList";
import { robots } from "./Component/robotsData";


export class App extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <CardList robots={robots}/>
        </div>
      </Fragment>
    );
  }
}

export default App;
