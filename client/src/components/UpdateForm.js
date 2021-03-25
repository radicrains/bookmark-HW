import React, { Component } from 'react';
const axios = require('axios');

export class UpdateForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            title: this.props.bookmark.title,
            url: this.props.bookmark.url,
             
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.id]: event.target.value});
    };

    updateData = async() => {
        try {
            const response = await axios.put(`/bookmark/${this.props.bookmark._id}`, {
                title: this.state.title,
                url: this.state.url,
            });
            console.log(response);

        } catch (err){
            console.log(err);
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.updateData();
        this.props.fetchData();
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' value={this.state.title} id='title' onChange={this.handleChange}/>
                    <input type='text' value={this.state.url} id='url' onChange={this.handleChange} />

                    <button type="submit">Update</button>
                </form>
            </div>
        )
    }
}

export default UpdateForm
