import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      pokedata: []
    };
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <h1>{2*2}</h1>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <input></input>
          <h3>{this.state.pokedata.name}</h3>
          <h3>{this.state.pokedata.id}</h3>
          <button onClick={() =>this.search()}>Catch em</button>
        </div>
      </div>
    );
  }

  search = () => {
    var pokeSearch = 'weedle';
  $.get('http://pokeapi.co/api/v2/pokemon/'+ pokeSearch)
    .done((data) => {
      console.log(data)
      this.setState({pokedata: data});
    });
  };


}






export default App;
