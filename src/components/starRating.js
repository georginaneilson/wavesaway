import React, { Component } from 'react';

class StarRating extends Component {
  constructor(props){
    super(props);
    this.state = {
      getRating: ''
    };
    this.getStarRating = this.getStarRating.bind(this);
  }

  getStarRating(){
    if(this.props.forecast != null || undefined){ 
    
    let rating = [];
     let forecast = this.props.forecast;

     // Loop the solid rating on a single forecast object.
     for (let i = 0; i < forecast.solidRating; i++) {
       rating.push('<img src="http://cdnimages.magicseaweed.com/star_filled.png" />');
     }

     // Loop the faded rating on a single forecast object.
     for (let i = 0; i < forecast.fadedRating; i++) {
       rating.push('<img src="http://cdnimages.magicseaweed.com/star_empty.png" />');
     }
     let ratingObj = rating.join(" ");
     if(this.state.getRating === ''){
 this.setState({
   getRating: ratingObj
 });
     }
    
    }
  }

  componentDidMount() {
  this.getStarRating();
  }
  
  componentDidUpdate(){
this.getStarRating();

  }
  render() {
    return (
          <div id="ratingContainer" dangerouslySetInnerHTML={{__html: this.state.getRating}}></div>
    );
  }
}

export default StarRating;
