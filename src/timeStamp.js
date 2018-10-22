import React, { Component } from 'react';
import './App.css';
import Api from '../fetchApi';
//import let1 from './fetchApi';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      json: '',
      sandendTS1: '',
      sandendTS2: '',
      sandendTS3: '',
      sandendTS4: '',
      currentTime1: '',
      currentTime2: '',
      currentTime3: '',
      currentTime4: '',
    };
    this.tm = this.tm.bind(this);
  }

  tm(unix_tm) {
     let dt = new Date(unix_tm * 1000);
     console.log(dt.getHours() + '/' + dt.getMinutes() + '/' + dt.getSeconds() + ' -- ' + dt);
     console.log(dt);
    let date = new Date(unix_tm * 1000);
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let weekDay = days[date.getDay()]
    let day = date.getDate()
    let month = date.getMonth()
    let year = (date.getYear().toString().substr(-2))

    let hours = date.getHours()
    let minutes = ("0" + date.getMinutes()).substr(-2)

    let formattedTime = weekDay + ' ' + day + '/' + month + '/' + year + ' ' + hours + ':' + minutes
    console.log('FT: ', formattedTime);
    let time = dt;
     return formattedTime;
   }


  componentDidMount() {
    const url = "http://magicseaweed.com/api/a346de26175eefe8d34252c8a6f2b14a/forecast/?spot_id=828"; //sandend url
    console.log(url);

    fetch(url).then(function (response) {
      return response.json()
    }).then(json => {
      console.log('parsed json ', json);
      this.setState({
        json: json,
        sandendTS1: json[2].localTimestamp,
        sandendTS2: json[4].localTimestamp,
        sandendTS3: json[6].localTimestamp,
        sandendTS4: json[7].localTimestamp,
      });
    }).catch((error) => {
      console.log(error);
    })


   
    
  }
  
  componentDidUpdate(){

    if (this.state.currentTime1 === '' && this.state.currentTime2 === '' && this.state.currentTime3 === '' && this.state.currentTime4 === '') {
this.setState({
  currentTime1: this.tm(this.state.sandendTS1),
  currentTime2: this.tm(this.state.sandendTS2),
  currentTime3: this.tm(this.state.sandendTS3),
  currentTime4: this.tm(this.state.sandendTS4),
});
    }
    
   console.log('json: ', this.state.json);
  }
  render() {

    return (
     
      <div className="App">
        <header className="App-header">
        
          <span role="img" aria-label="ocean emoji"> 🌊 </span>
          <p> {this.state.currentTime1} </p>
          <p> {this.state.currentTime2} </p>
          <p> {this.state.currentTime3} </p>
          <p> {this.state.currentTime4} </p>

          
        </header>
      </div>
    );
  }
}

export default App;
