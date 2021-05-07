import React, { Component } from "react";

class Education extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            school: '',
            title: '',
            dates: '',
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
        let {school, title, dates} = this.state;

        if (this.state.edit) {
            return (
                <div className="section">
                    <h2>Education</h2>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            School name:
                            <input type='text' value={school} name='school' onChange={this.handleChange}/>
                        </label>
                        <label>
                            Title of study:
                            <input type='text' value={title} name='title' onChange={this.handleChange}/>
                        </label>
                        <label>
                            Dates of study:
                            <input type='text' value={dates} name='dates' onChange={this.handleChange}/>
                        </label>
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            );
        }
        return (
            <div className="section">
                <h2>Education</h2>
                <p>School/university name: {school}</p>
                <p>Title of study: {title}</p>
                <p>Dates of study: {dates}</p>
                <button type='button' onClick={this.handleClick}>Edit section</button>
            </div>
        );
    }
}

export default Education