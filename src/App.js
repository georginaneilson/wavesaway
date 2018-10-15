import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import var1 from './fetchApi';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      sandend: 'something'
    };
  }

  componentDidMount() {
    const url = "http://magicseaweed.com/api/a346de26175eefe8d34252c8a6f2b14a/forecast/?spot_id=828"; //sandend url
    console.log(url);

    fetch(url).then(function (response) {
      return response.json()
    }).then(json => {
      console.log('parsed json ', json);
      this.setState({ sandend: json[0] });
    }).catch((error) => {
      console.log(error);
    })
  }

  render() {

    console.log('state: ', this.state.sandend);


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          
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
