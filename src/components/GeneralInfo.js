import React, { useState } from "react";

const GeneralInfo = (props) => {
    const [name, setName] = useState('');
    const [profession, setProfession] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [birth, setBirth] = useState('');

    const lang = props.language;

    if (props.edit) {
        return (
            <div>
                <h2>
                    {lang === 'ru' ? 'Общая информация' : 'General information'}
                </h2>
                <form onSubmit={(e) => e.preventDefault()}>
                    <label>
                        {lang === 'ru' ? 'Полное имя:' : 'Full name:'}
                        <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
                    </label>
                    <label>
                        {lang === 'ru' ? 'Профессия:' : 'Profession:'}
                        <input type='text' value={profession} onChange={(e) => setProfession(e.target.value)}/>
                    </label>
                    <label>
                        {lang === 'ru' ? 'Адрес:' : 'Address:'}
                        <input type='text' value={address} onChange={(e) => setAddress(e.target.value)}/>
                    </label>
                    <label>
                        {lang === 'ru' ? 'Мобильный телефон:' : 'Phone number:'}
                        <input type='tel' value={phone} onChange={(e) => setPhone(e.target.value)}/>
                    </label>
                    <label>
                        {lang === 'ru' ? 'Электронная почта:' : 'E-mail:'}
                        <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </label>
                    <label>
                        {lang === 'ru' ? 'Дата рождения:' : 'Date of birth:'}
                        <input type='date' value={birth} onChange={(e) => setBirth(e.target.value)}/>
                    </label>
                </form>
            </div>
        );  
    }
    return (
        <div>
            <h2 id='full-name'>{name || (lang === 'ru'? 'Ваше имя' : 'Your Name')}</h2>
            <p id="prof-name">{profession}</p>
            {address && 
                <p><strong>{lang === 'ru' ? 'Адрес:' : 'Address:'}</strong> {address}</p>}
            {phone && 
                <p><strong>{lang === 'ru' ? 'Моб. телефон:' : 'Phone number:'}</strong> {phone}</p>}
            {email && 
                <p><strong>{lang === 'ru' ? 'Эл. почта:' : 'E-mail:'}</strong> {email}</p>}
            {birth && 
                <p><strong>{lang === 'ru' ? 'Дата рождения:' : 'Date of birth:'}</strong> {birth}</p>}
        </div>
    );
}

export default GeneralInfo