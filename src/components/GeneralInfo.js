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

        if (this.props.edit) {
            return (
                <div>
                    <h2>General information</h2>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Full name:
                            <input type='text' value={name} name='name' onChange={this.handleChange} />
                        </label>
                        <label>
                            Profession:
                            <input type='text' value={profession} name='profession' onChange={this.handleChange}/>
                        </label>
                        <label>
                            Address:
                            <input type='text' value={address} name='address' onChange={this.handleChange}/>
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
                    </form>
                </div>
            );  
        }
        return (
            <div>
                <h2 id='full-name'>{name || 'Your Name'}</h2>
                <p id="profession">{profession}</p>
                {address && 
                    <p><strong>Address:</strong> {address}</p>}
                {phone && 
                    <p><strong>Phone number:</strong> {phone}</p>}
                {email && 
                    <p><strong>E-mail:</strong> {email}</p>}
                {birth && 
                    <p><strong>Date of birth:</strong> {birth}</p>}
            </div>
        );
    }
}

export default GeneralInfo