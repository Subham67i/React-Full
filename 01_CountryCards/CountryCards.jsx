import React from "react";
import card1 from "../assets/img/card 1.jpg";
import card2 from "../assets/img/card 2.jpg";
import card3 from "../assets/img/card 3.jpg";
import card4 from "../assets/img/card 4.jpg";

import "../Style/style.css";

class CountryCards extends React.Component {
  render() {
         let countryOne = 'Paris';
    return (
      <React.Fragment>
         <div className="container mt-3">
            <div className="row">
               <div className="col-md-3">
               <div className="card">
                        <img src={card1} className="img-fluid" />
                          <div className="card-body">
                          
                           <h4>Paris</h4>
                            <p>Lorem ipsum dolor Unde blanditiis numquam rem consectetur repudiandae officia eos, inventore excepturi dignissimos quis est quasi nostrum possimus assumenda.</p>
                            <button className="btn btn-info btn-sm">Read More</button>
                          </div>
                     </div>
               </div>

               <div className="col-md-3">
               <div className="card">
                        <img src={card2} className="img-fluid" />
                          <div className="card-body">
                            <p>Lorem ipsum dolor Unde blanditiis numquam rem consectetur repudiandae officia eos, inventore excepturi dignissimos quis est quasi nostrum possimus assumenda.</p>
                            <button className="btn btn-info btn-sm">Read More</button>
                          </div>
                     </div>
               </div>

               <div className="col-md-3">
               <div className="card">
                        <img src={card3} className="img-fluid" />
                          <div className="card-body">
                            <p>Lorem ipsum dolor Unde blanditiis numquam rem consectetur repudiandae officia eos, inventore excepturi dignissimos quis est quasi nostrum possimus assumenda.</p>
                            <button className="btn btn-info btn-sm">Read More</button>
                          </div>
                     </div>
               </div>

               <div className="col-md-3">
               <div className="card">
                        <img src={card4} className="img-fluid" />
                          <div className="card-body">
                            <p>Lorem ipsum dolor Unde blanditiis numquam rem consectetur repudiandae officia eos, inventore excepturi dignissimos quis est quasi nostrum possimus assumenda.</p>
                            <button className="btn btn-info btn-sm">Read More</button>
                          </div>
                     </div>
               </div>
            </div>
         </div>
       
              
      </React.Fragment>
    );
  }
}
export default CountryCards;
