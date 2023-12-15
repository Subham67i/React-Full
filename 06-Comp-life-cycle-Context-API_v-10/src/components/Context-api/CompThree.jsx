 import React from "react";
 import UserContext from "./userContext";

 class CompThre extends React.Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
      return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body bg-warning">
                                <p className="h3">Comp Three </p>
                               <UserContext.Consumer>
                                {
                                    (value) => {
                                       return(
                                        <pre>{JSON.stringify(value)}</pre>
                                       )
                                    }
                                }
                               </UserContext.Consumer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
      )
    }
 }

 export default CompThre;