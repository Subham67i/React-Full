import React from "react";
import CompThre from "./CompThree";

class CompTwo extends React.Component{
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
                            <div className="card-body bg-danger">
                                <p className="h3">Comp Two</p>
                                
                                <CompThre />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
      )
    }
}

export default CompTwo;