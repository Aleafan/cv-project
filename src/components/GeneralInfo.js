import React, { Component } from "react";

class GeneralInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            profession: '',
            address: '',
            phone: '',
            email: '',
            birth: '',
          };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        let {name, profession, address, phone, email, birth} = this.state;
        let lang = this.props.language;

        if (this.props.edit) {
            return (
                <div>
                    <h2>
                        {lang === 'ru' ? 'Общая информация' : 'General information'}
                    </h2>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            {lang === 'ru' ? 'Полное имя:' : 'Full name:'}
                            <input type='text' value={name} name='name' onChange={this.handleChange} />
                        </label>
                        <label>
                            {lang === 'ru' ? 'Профессия:' : 'Profession:'}
                            <input type='text' value={profession} name='profession' onChange={this.handleChange}/>
                        </label>
                        <label>
                            {lang === 'ru' ? 'Адрес:' : 'Address:'}
                            <input type='text' value={address} name='address' onChange={this.handleChange}/>
                        </label>
                        <label>
                            {lang === 'ru' ? 'Мобильный телефон:' : 'Phone number:'}
                            <input type='tel' value={phone} name='phone' onChange={this.handleChange}/>
                        </label>
                        <label>
                            {lang === 'ru' ? 'Электронная почта:' : 'E-mail:'}
                            <input type='email' value={email} name='email' onChange={this.handleChange}/>
                        </label>
                        <label>
                            {lang === 'ru' ? 'Дата рождения:' : 'Date of birth:'}
                            <input type='date' value={birth} name='birth' onChange={this.handleChange}/>
                        </label>
                    </form>
                </div>
            );  
        }
        return (
            <div>
                <h2 id='full-name'>{name || (lang === 'ru'? 'Ваше имя' : 'Your Name')}</h2>
                <p id="profession">{profession}</p>
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
}

export default GeneralInfo