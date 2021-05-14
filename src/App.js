import React, { Component } from "react";
import uniqid from "uniqid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import Header from "./components/Header";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Profession from "./components/Profession";
import Footer from "./components/Footer";


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      edit: true,
      language: 'ru',
      educationIds: [uniqid()],
      professionIds: [uniqid()],
    };
    this.changeLanguage = this.changeLanguage.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  changeLanguage() {
    let lang = this.state.language === 'ru'? 'en' : 'ru';
    this.setState({
      language: lang,
    });
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
    let lang = this.state.language;
    let spacing = this.state.language === 'ru' ? 'spacing-sm' : '';

    let button;
    if (this.state.edit) {
      button = <button className='btn-main' type='button' onClick={this.handleSubmit}>
                  {lang === 'ru'? 'ПОСТРОИТЬ РЕЗЮМЕ' : 'BUILD CV'}
                </button>
    } else {
      button = <button className='btn-main' type='button' onClick={this.handleEdit}>
                  {lang === 'ru'? 'РЕДАКТИРОВАТЬ РЕЗЮМЕ' : 'EDIT CV'}
                </button>
    }

    return (
      <div id='flex-parent' className={spacing}>
        <Header language={lang} changeLanguage={this.changeLanguage} />

        <main>
          <GeneralInfo edit={this.state.edit} language={lang} />

          {this.state.edit || this.state.educationIds[0] 
              ? <h2>{lang === 'ru'? 'Образование' : 'Education'}</h2>
              : null }
          {this.state.educationIds.map(id => 
              <Education key={id} id={id} edit={this.state.edit} delete={this.handleDelete} language={lang} />)}
          {this.state.edit &&
              <button id='educationIds' className='btn-add' type='button' onClick={this.handleAdd}>
                <FontAwesomeIcon icon={faPlus} />
                {lang === 'ru'? 'Образование' : 'Education'}
              </button>}

          {this.state.edit || this.state.professionIds[0] 
              ? <h2>{lang === 'ru'? 'Опыт работы' : 'Professional experience'}</h2>
              : null }
          {this.state.professionIds.map(id => 
              <Profession key={id} id={id} edit={this.state.edit} delete={this.handleDelete} language={lang} />)}
          {this.state.edit &&
              <button id='professionIds' className='btn-add' type='button' onClick={this.handleAdd}>
                <FontAwesomeIcon icon={faPlus} /> 
                {lang === 'ru'? 'Опыт работы' : 'Professional entry'}
              </button>}
          {button}
        </main>

        <Footer />
      </div>
    );
  };
}

export default App;