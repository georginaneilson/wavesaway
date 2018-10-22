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


     //console.log('check2: ', this.props.forecast[2]);
     //console.log('solid: ', forecast.solidRating);

     // Loop the solid rating on a single forecast object.
     for (let i = 0; i < forecast.solidRating; i++) {
       rating.push('<img src="http://cdnimages.magicseaweed.com/star_filled.png" />');
     }

     // Loop the faded rating on a single forecast object.
     for (let i = 0; i < forecast.fadedRating; i++) {
       rating.push('<img src="http://cdnimages.magicseaweed.com/star_empty.png" />');
     }

     console.log('rating: ', rating);
     let ratingObj = rating.join(" ");
     if(this.state.getRating === ''){
 this.setState({
   getRating: ratingObj.toString
 }, () => { console.log('this.state: ', this.state.getRating)});
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
          <div id = "ratingContainer" >
{this.state.getRating}
            </div>
    );
  }
}

export default StarRating;
