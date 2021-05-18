import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Profession = (props) => {
    const [company, setCompany] = useState('');
    const [position, setPosition] = useState('');
    const [dates, setDates] = useState('');
    const [responsibilities, setResponsibilities] = useState('');

    const lang = props.language;
    const placeholderDates = (lang === 'ru'? 'мм-гггг по мм-гггг' : 'yyyy-mm to yyyy-mm');

    if (props.edit) {
        return (
            <div className='section'>
                <form onSubmit={(e) => e.preventDefault()}>
                    <label>
                        {lang === 'ru'? 'Компания:' : 'Company:'}
                        <input type='text' value={company} onChange={(e) => setCompany(e.target.value)}/>
                    </label>
                    <label>
                        {lang === 'ru'? 'Должность:' : 'Position:'}
                        <input type='text' value={position} onChange={(e) => setPosition(e.target.value)}/>
                    </label>
                    <label>
                        {lang === 'ru'? 'Сроки работы:' : 'Dates of work:'}
                        <input type='text' value={dates} onChange={(e) => setDates(e.target.value)}
                               placeholder={placeholderDates} />
                    </label>
                    <label>
                        {lang === 'ru'? 'Должностные обязанности:' : 'Responsibilities:'}
                        <textarea rows='4' value={responsibilities} onChange={(e) => setResponsibilities(e.target.value)}/>
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
                    <h3>{position}</h3>
                    <p><u>{company}</u></p>
                    {responsibilities &&
                        <div>
                            <p id='responsibilities-header'>
                                {lang === 'ru'? 'Должностные обязанности:' : 'Responsibilities:'}
                            </p>
                            <p id='responsibilities'>{responsibilities}</p>
                        </div>}
                </div>
            </div>
        </div>
    );
}

export default Profession