import React, { Component } from "react";
import GeneralInfo from "./components/GeneralInfo";
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>CV builder App</h1>

        <GeneralInfo />

      </div>
    );
  };
}

export default App;