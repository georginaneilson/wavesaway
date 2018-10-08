import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import var1 from './fetchApi';

class App extends Component {
  constructor(){
    super();
    this.state = {
      sandend : ''
    } 
  }

  componentDidMount() {
    const url = "http://magicseaweed.com/api/a346de26175eefe8d34252c8a6f2b14a/forecast/?spot_id=828"; //sandend url
    console.log(url);
    let dataTest;

    function test(data){
      dataTest = data;
      console.log('datatest func: ', dataTest);
      if(this.state.sandend === ''){
        this.setState({
            sandend: dataTest
        });
      }
      
    }

    function callback() {
      fetch(url)
        .then((response) => response.json())
        .then(function (data) {
          console.log('data: ', data[0]);
          // do something
          test(data);

        });
      
    }
    console.log(dataTest);
    callback();
  }

  render() {

    


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
