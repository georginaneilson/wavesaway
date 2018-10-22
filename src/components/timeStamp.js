import React, { Component } from 'react';

class TimeStamp extends Component {
  constructor(props){
    super(props);
    this.state = {
     
    };
    this.tm = this.tm.bind(this);
  }

  tm(unix_tm) {

    let date = new Date(unix_tm * 1000);
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let weekDay = days[date.getDay()]
    let day = date.getDate()
    let month = date.getMonth()
    let year = (date.getYear().toString().substr(-2))
    let hours = date.getHours()
    let minutes = ("0" + date.getMinutes()).substr(-2)

    let formattedTime = weekDay + ' ' + day + '/' + month + '/' + year + ' ' + hours + ':' + minutes
     return formattedTime;
   }

  componentDidMount() {}
  
  componentDidUpdate(){}

  render() {
    return (     
      <div className="timeStamp">
        <p>{this.tm(this.props.time)}</p>
      </div>
    );
  }
}

export default TimeStamp;
