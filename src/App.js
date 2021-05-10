import React, { Component } from "react";
import uniqid from "uniqid";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Profession from "./components/Profession";
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      edit: true,
      educationIds: [uniqid()],
      professionIds: [uniqid()],
    };
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleEdit() {
    this.setState({
        edit: true,
    });
  }

  handleSubmit() {
    this.setState({
        edit: false,
    });
  }

  handleAdd(e) {
    let stateName = e.target.id;
    this.setState({
      [stateName]: this.state[stateName].concat(uniqid()),
    })
  }

  handleDelete(e) {
    let stateName = e.target.dataset.section;
    let newIds = [...this.state[stateName]];
    let deleteIndex = newIds.indexOf(e.target.id);
    newIds.splice(deleteIndex, 1);
    this.setState({
      [stateName]: newIds,
    })
  }

  render() {
    let button;
    if (this.state.edit) {
      button = <button className='btn-main' type='button' onClick={this.handleSubmit}>Submit CV</button>
    } else {
      button = <button className='btn-main' type='button' onClick={this.handleEdit}>Edit CV</button>
    }
    
    return (
      <div>
        {/* CHANGE h1 TO NAV */}
        <h1>CV Builder Application</h1>

        <GeneralInfo edit={this.state.edit} />

        {this.state.edit || this.state.educationIds[0] 
            ? <h2>Education</h2>
            : null }
        {this.state.educationIds.map(id => 
            <Education key={id} id={id} edit={this.state.edit} delete={this.handleDelete} />)}
        {this.state.edit &&
            <button id='educationIds' className='btn-add' type='button' onClick={this.handleAdd}>
				<FontAwesomeIcon icon={faPlus} /> Add Education entry
            </button>}

        {this.state.edit || this.state.professionIds[0] 
            ? <h2>Professional experience</h2>
            : null }
        {this.state.professionIds.map(id => 
            <Profession key={id} id={id} edit={this.state.edit} delete={this.handleDelete} />)}
        {this.state.edit &&
            <button id='professionIds' className='btn-add' type='button' onClick={this.handleAdd}>
				<FontAwesomeIcon icon={faPlus} /> Add Professional entry
            </button>}

        {button}
      </div>
    );
  };
}

export default App;