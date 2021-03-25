import './App.css';
import React, { Component } from 'react';

const axios = require('axios');

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       bookmarks: [],
    };
  };

  fetchInfo = async() => {
    try {
      const response = await axios.get('/bookmark');
      console.log(response);
    } catch (err){
      console.log(err.message);
    }
  };

  componentDidMount = () => {
    this.fetchInfo();
  };
  
  render() {
    return (
      <div>
        <h1> Hello, Welcome to my bookmark!</h1>
      </div>
    )
  }
}

export default App

