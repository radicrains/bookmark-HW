import React, { Component } from 'react';
import UpdateForm from './UpdateForm.js';

const axios = require('axios');

export class Bookmark extends Component {
    deleteBookmark = async (id) => {
        // console.log(id)
        try{
            const response = await axios.delete(`/bookmark/${id}`);
            this.props.fetchData();
        } catch (err) {
            console.log(err);
        }
    }   

    render() {
        return (
            <div>
                <h1><span onClick={()=>this.deleteBookmark(this.props.bookmark._id)}>X</span> {this.props.bookmark.title} - <span>{this.props.bookmark.url}</span></h1> 
                <UpdateForm bookmark={this.props.bookmark} fetchData={this.props.fetchData} /> 
            </div>
        )
    }
}

export default Bookmark
