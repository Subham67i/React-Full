import React from "react";
import CompTwo from "./CompTwo";

class CompOne extends React.Component {
    constructor(props) {
        super(props);
      
    }
    
    render() {
      return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body bg-info">
                                <p className="h3">Component One</p>
                               
                                <CompTwo  />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
      )
    }
}

export default CompOne;