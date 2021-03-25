import React, { Component } from 'react'
const axios = require('axios');

export class CreateForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            title: '',
            url: '',
             
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.id]: event.target.value});
    };

    createNewData = async() => {
        try {
            const response = await axios.post('/bookmark', {
                title: this.state.title,
                url: this.state.url,
            });
            console.log(response);

        } catch (err){
            console.log(err);
        }
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.createNewData();
        this.props.fetchData();

        this.setState ({
            title: '',
            url: '',
             
        });
    };
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' value={this.state.title} id='title' placeholder='title' onChange={this.handleChange}/>
                    <input type='text' value={this.state.url} id='url' placeholder='url' onChange={this.handleChange} />

                    <input type='submit' />
                </form>
            </div>
        )
    }
}

export default CreateForm
