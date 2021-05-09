import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

class Education extends Component {
    constructor(props) {
        super(props);
        this.state = {
            school: '',
            faculty: '',
            title: '',
            dates: '',
          };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        let {school, faculty, title, dates} = this.state;

        if (this.props.edit) {
            return (
                <div className='section'>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            School/university name:
                            <input type='text' value={school} name='school' onChange={this.handleChange}/>
                        </label>
                        <label>
                            Faculty/department:
                            <input type='text' value={faculty} name='faculty' onChange={this.handleChange}/>
                        </label>
                        <label>
                            Graduate as:
                            <input type='text' value={title} name='title' onChange={this.handleChange}/>
                        </label>
                        <label>
                            Dates of study:
                            <input type='text' value={dates} name='dates' onChange={this.handleChange}
                                placeholder='yyyy-mm to yyyy-mm'/>
                        </label>
                    </form>

                    <button className='btn-delete' type='button' onClick={this.props.delete} id={this.props.id}>
                        <FontAwesomeIcon icon={faTrash} /> Delete entry
                    </button>
                    
                </div>
            );
        }
        return (
            <div className='section'>
                <div className='education-section'>
                    <p className='dates'>{dates}</p>
                    <div>
                        <h3>{school}</h3>
                        <p>{faculty}</p>
                        {title &&
                            <p><strong>Graduated as:</strong> <u>{title}</u></p>}
                    </div>
                </div>
            </div>
        );
    }
}

export default Education