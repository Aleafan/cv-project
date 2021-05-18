import React, { useState } from "react";

import uniqid from "uniqid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import Header from "./components/Header";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Profession from "./components/Profession";
import Footer from "./components/Footer";


const App = () => {
  const [edit, setEdit] = useState(true);
  
  const [lang, setLang] = useState('ru');
  const changeLanguage = () => {
    lang === 'ru'? setLang('en') : setLang('ru');
  }

  const [educIds, setEducIds] = useState([uniqid()]);
  const addEducation = () => setEducIds(educIds.concat(uniqid()));
  const deleteEducation = (e) => setEducIds(handleDelete(educIds, e.target.id));

  const [profIds, setProfIds] = useState([uniqid()]);
  const addProfession = () => setProfIds(profIds.concat(uniqid()));
  const deleteProfession = (e) => setProfIds(handleDelete(profIds, e.target.id))

  // Helper function
  function handleDelete(array, element) {
    const newArray = [...array];
    const deleteIndex = newArray.indexOf(element);
    newArray.splice(deleteIndex, 1);
    return newArray;
  }

  let button;
  if (edit) {
    button = <button className='btn-main' type='button' onClick={() => setEdit(false)}>
                {lang === 'ru'? 'ПОСТРОИТЬ РЕЗЮМЕ' : 'BUILD CV'}
              </button>
  } else {
    button = <button className='btn-main' type='button' onClick={() => setEdit(true)}>
                {lang === 'ru'? 'РЕДАКТИРОВАТЬ РЕЗЮМЕ' : 'EDIT CV'}
              </button>
  }

  const spacing = (lang === 'ru'? 'spacing-sm' : '');

  return (
    <div id='flex-parent' className={spacing}>
      <Header language={lang} changeLanguage={changeLanguage} />

      <main>
        <GeneralInfo edit={edit} language={lang} />

        {edit || educIds[0] 
            ? <h2>{lang === 'ru'? 'Образование' : 'Education'}</h2>
            : null }
        {educIds.map(id => 
            <Education key={id} id={id} edit={edit} delete={deleteEducation} language={lang} />)}
        {edit &&
            <button id='education' className='btn-add' type='button' onClick={addEducation}>
              <FontAwesomeIcon icon={faPlus} />
              {lang === 'ru'? 'Образование' : 'Education'}
            </button>}
        {edit || profIds[0] 
            ? <h2>{lang === 'ru'? 'Опыт работы' : 'Professional experience'}</h2>
            : null }
        {profIds.map(id => 
            <Profession key={id} id={id} edit={edit} delete={deleteProfession} language={lang} />)}
        {edit &&
            <button id='profession' className='btn-add' type='button' onClick={addProfession}>
              <FontAwesomeIcon icon={faPlus} /> 
              {lang === 'ru'? 'Опыт работы' : 'Professional entry'}
            </button>}
        {button}
      </main>

      <Footer />
    </div>
  );
}

export default App;