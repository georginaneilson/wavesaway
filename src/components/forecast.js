import React, {
  Component
} from 'react';

import TimeStamp from './timeStamp.js';
import StarRating from './starRating.js';

class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {

  }

  componentDidUpdate() {

  }

  render() { 
    return ( 
      <div>
      <TimeStamp time={this.props.forecast}></TimeStamp>
      <StarRating forecast={this.props.forecast}></StarRating>
      </div>
    );
  }
}

export default Forecast;
