import React from "react";
import Card from "./Card";
import card1 from '../assets/img/card 1.jpg';
import card2 from "../assets/img/card 2.jpg";
import card3 from '../assets/img/card 3.jpg';
import card4 from '../assets/img/card 4.jpg';


class CountryCards extends React.Component{
  render(){
    let countries = ['Paris', 'Bangkok','Indonesia','Malaysia'];
      return(
         <React.Fragment>
              <div className="container mt-5">
                <div className="row">
                  <div className="col-md-3">
                         
                        <Card cardImg={card1} countryName={countries[0]}/>
                  </div>

                  <div className="col-md-3">
                       
                        <Card cardImg={card2} countryName={countries[1]}/>
                  </div>

                  <div className="col-md-3">
                        <Card cardImg={card3} countryName={countries[2]}/>
                  </div>

                  <div className="col-md-3">
                        <Card cardImg={card4} countryName={countries[3]}/>
                  </div>
                </div>
              </div> 
               
         </React.Fragment>
      )
  }
}
export default CountryCards;
