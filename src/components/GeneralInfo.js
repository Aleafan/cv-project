import React, { Component } from "react";

class GeneralInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            name: '',
            phone: '',
            email: '',
            birth: '',
          };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleClick() {
        this.setState({
            edit: true,
        });
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            edit: false,
        });
    }

    render() {
        let {name, phone, email, birth} = this.state;

        if (this.state.edit) {
            return (
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Full name:
                        <input type='text' value={name} name='name' onChange={this.handleChange}/>
                    </label>
                    <label>
                        Phone number:
                        <input type='tel' value={phone} name='phone' onChange={this.handleChange}/>
                    </label>
                    <label>
                        E-mail:
                        <input type='email' value={email} name='email' onChange={this.handleChange}/>
                    </label>
                    <label>
                        Date of birth:
                        <input type='date' value={birth} name='birth' onChange={this.handleChange}/>
                    </label>
                    <button type='submit'>Submit</button>
                </form>
            );
        }
        return (
            <div>
                <p>Full name: {name}</p>
                <p>Phone number: {phone}</p>
                <p>E-mail: {email}</p>
                <p>Date of birth: {birth}</p>
                <button type='button' onClick={this.handleClick}>Edit</button>
            </div>
        );
    }
}

export default GeneralInfo