import React, { Component } from 'react';
import './App.css';
import Forecast from './components/forecast.js';
//import let1 from './fetchApi';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      json: ''
    };
    this.fetchData = this.fetchData.bind(this);
  }

  fetchData() {
        const url = "http://magicseaweed.com/api/a346de26175eefe8d34252c8a6f2b14a/forecast/?spot_id=828"; //sandend url
        //console.log(url);

        fetch(url).then(function (response) {
          return response.json()
        }).then(json => {
          console.log('parsed json ', json);
          this.setState({
            json: json
          });
        }).catch((error) => {
          console.log(error);
        })
  }

  componentDidMount() {
 
this.fetchData();
this.forceUpdate();
   
  }
  
  componentDidUpdate(){
if(this.state.json === ''){
  
  this.fetchData();}
   console.log("state: ", this.state.json)

  }

  render() {
    return (
     
      <div className="App">
        <header className="App-header">
        
          <span role="img" aria-label="ocean emoji"> 🌊 </span>
< div className = "forecastContainer" >
          <Forecast forecast={this.state.json[2]}></Forecast>
          <Forecast forecast={this.state.json[4]}></Forecast>
          <Forecast forecast={this.state.json[6]}></Forecast>
          <Forecast forecast={this.state.json[7]}></Forecast>
          </div>
          
        </header>
      </div>
    );
  }
}

export default App;
