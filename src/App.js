import React, { Component } from "react";
import uniqid from "uniqid";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      edit: true,
      educationIds: [uniqid()],
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

  handleAdd() {
    this.setState({
      educationIds: this.state.educationIds.concat(uniqid()),
    })
  }

  handleDelete(e) {
    let newEducationIds = [...this.state.educationIds];
    let deleteIndex = newEducationIds.indexOf(e.target.id);
    newEducationIds.splice(deleteIndex, 1);
    this.setState({
      educationIds: newEducationIds,
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
            <button className='btn-add' type='button' onClick={this.handleAdd}>
				<FontAwesomeIcon icon={faPlus} /> Add Education entry
            </button>}

        {button}
      </div>
    );
  };
}

export default App;