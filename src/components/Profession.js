import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

class Profession extends Component {
    constructor(props) {
        super(props);
        this.state = {
            company: '',
            position: '',
            dates: '',
            responsibilities: '',
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
        let {company, position, dates, responsibilities} = this.state;

        if (this.props.edit) {
            return (
                <div className='section'>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Company:
                            <input type='text' value={company} name='company' onChange={this.handleChange}/>
                        </label>
                        <label>
                            Position:
                            <input type='text' value={position} name='position' onChange={this.handleChange}/>
                        </label>
                        <label>
                            Dates of work:
                            <input type='text' value={dates} name='dates' onChange={this.handleChange}
                                placeholder='yyyy-mm to yyyy-mm'/>
                        </label>
                        <label>
                            Responsibilities:
                            <textarea rows='4' value={responsibilities} name='responsibilities' onChange={this.handleChange}/>
                        </label>
                    </form>

                    <button className='btn-delete' type='button' onClick={this.props.delete} id={this.props.id} 
                            data-section='professionIds'>
                        <FontAwesomeIcon icon={faTrash} /> Delete entry
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
                                <p>Responsibilities:</p>
                                <p id='responsibilities'>{responsibilities}</p>
                            </div>}
                    </div>
                </div>
            </div>
        );
    }
}

export default Profession