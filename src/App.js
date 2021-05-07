import React, { Component } from "react";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      edit: true,
    };
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEdit() {
    this.setState({
        edit: true,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
        edit: false,
    });
}

  render() {
    let button;
    if (this.state.edit) {
      button = <button class='btn-main' type='button' onClick={this.handleSubmit}>Submit CV</button>
    } else {
      button = <button class='btn-main' type='button' onClick={this.handleEdit}>Edit CV</button>
    }
    return (
      <div>
        {/* CHANGE h1 TO NAV */}
        <h1>CV Builder Application</h1>

        <GeneralInfo edit={this.state.edit}/>

        {button}
      </div>
    );
  };
}

export default App;