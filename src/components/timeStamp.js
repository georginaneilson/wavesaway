import React, { Component } from 'react';
let calcTime;
class TimeStamp extends Component {
  constructor(props){
    super(props);
   this.state = {
     time: '',
   };
    this.tm = this.tm.bind(this);
  }

  tm(unix_tm) {

  if (unix_tm !== (null || undefined)) {

    unix_tm = unix_tm.localTimestamp;

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
  }


  componentDidMount() {
   calcTime = this.tm(this.props.time);
    if (this.state.time !== calcTime) {
      this.setState({
        time: calcTime
      }, () => {
        console.log('mount :', this.state.time);
      });
    }
  }
  
  componentDidUpdate(){
     calcTime = this.tm(this.props.time);
     if(this.state.time !== calcTime){
this.setState({
  time: calcTime
}, () => {
  console.log('update :', this.state.time);
});
     }
     
    

  }

  render() {
    return (     
      <div className="timeStamp">
        <p dangerouslySetInnerHTML={{__html: this.state.time}}></p>
      </div>
    );
  }
}

export default TimeStamp;
