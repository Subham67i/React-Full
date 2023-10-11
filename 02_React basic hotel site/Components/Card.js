import React from "react";


class Card extends React.Component{
    render(){
      
        return(
           <React.Fragment>
               <div className="card">
                <img src={this.props.cardImg} className="img-fluid"/>
                <div className="card-body">
                   <p className="h4">{this.props.countryName}</p>
                   <p>lorem this is beatutiful nimsge in the sociyt by tne omegd</p>
                   <button className="btn btn-dark btn-sm">Read more</button>
                </div>
                </div>  
           </React.Fragment>
        )
    }
}
export default Card;