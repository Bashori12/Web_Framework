import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Card from './Card'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component{
  render(){
    return (
      <div className="App">
        <Card/>
      </div>
    );
  } 
}

export default App;
