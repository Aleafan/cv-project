import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Education = (props) => {
    const [school, setSchool] = useState('');
    const [faculty, setFaculty] = useState('');
    const [title, setTitle] = useState('');
    const [dates, setDates] = useState('');

    const lang = props.language;
    const placeholderDates = (lang === 'ru'? 'мм-гггг по мм-гггг' : 'yyyy-mm to yyyy-mm');

    if (props.edit) {
        return (
            <div className='section'>
                <form onSubmit={(e) => e.preventDefault()}>
                    <label>
                        {lang === 'ru'? 'Учебное учреждение:' : 'School/university name:'}
                        <input type='text' value={school} onChange={(e) => setSchool(e.target.value)}/>
                    </label>
                    <label>
                        {lang === 'ru'? 'Факультет:' : 'Faculty/department:'}
                        <input type='text' value={faculty} onChange={(e) => setFaculty(e.target.value)}/>
                    </label>
                    <label>
                        {lang === 'ru'? 'Специальность:' : 'Graduate as:'}
                        <input type='text' value={title} onChange={(e) => setTitle(e.target.value)}/>
                    </label>
                    <label>
                        {lang === 'ru'? 'Сроки обучения:' : 'Dates of study:'}
                        <input type='text' value={dates} onChange={(e) => setDates(e.target.value)}
                               placeholder={placeholderDates}/>
                    </label>
                </form>

                <button className='btn-delete' type='button' onClick={props.delete} id={props.id}>
                    <FontAwesomeIcon icon={faTrash} /> 
                    {lang === 'ru'? 'Удалить' : 'Delete entry'}
                </button>
            </div>
        );
    }
    return (
        <div className='section'>
            <div className='flex-section'>
                <p className='dates'>{dates}</p>
                <div>
                    <h3>{title}</h3>
                    <p><u>{school}</u></p>
                    <p><em>{faculty}</em></p>
                </div>
            </div>
        </div>
    );
}

export default Education