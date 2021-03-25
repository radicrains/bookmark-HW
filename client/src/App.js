import './App.css';
import React, { Component } from 'react';
import Bookmark from './components/Bookmark.js'
import CreateForm from './components/CreateForm.js'

const axios = require('axios');

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       bookmarks: [],
    };
  };

  fetchData = async () => {
    try {
      const response = await axios.get('/bookmark');
      console.log(response);

      this.setState({
        bookmarks:response.data,
      })

    } catch (err){
      console.log(err);
    }
  };

  componentDidMount = () => {
    this.fetchData();
  };
  
  render() {
    return (
      <React.Fragment>
        <CreateForm fetchData={this.fetchData} />
        {this.state.bookmarks.map((bookmark, index)=> {
          return <Bookmark bookmark={bookmark} key={bookmark._id} fetchData={this.fetchData}/>
        })}
      </React.Fragment>
    )
  }
}

export default App;

