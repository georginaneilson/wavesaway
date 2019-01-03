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
    console.log('rating forecast', this.props.forecast)
    if(this.props.forecast != null || undefined){ 
    console.log('start')
    let rating = [];
     let forecast = this.props.forecast;
console.log('fs: ', forecast.solidRating)
     // Loop the solid rating on a single forecast object.
     for (let i = 0; i < forecast.solidRating; i++) {
       rating.push('<img src="http://cdnimages.magicseaweed.com/star_filled.png" />');
     }

     // Loop the faded rating on a single forecast object.
     for (let i = 0; i < forecast.fadedRating; i++) {
       rating.push('<img src="http://cdnimages.magicseaweed.com/star_empty.png" />');
     }
     let ratingObj = rating.join(" ");
     console.log('rating: ', ratingObj)
//      if(this.state.getRating === ''){
//  this.setState({
//    getRating: ratingObj
//  }, console.log('getrating: ', this.state.getRating));
//      }
    
    }
  }

  componentDidMount() {
  this.getStarRating();
  console.log('rating: ', this.state.getRating);
  }
  
  componentDidUpdate(){
     if (this.state.getRating === '') {
this.getStarRating();
     }
  }

  render() {
    return (
          <div id="ratingContainer" dangerouslySetInnerHTML={{__html: this.state.getRating}}></div>
    );
  }
}

export default StarRating;
