import React from "react";
import ComponentB from "./ComponentB";

class ComponentA extends React.Component{
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
                            <div className="card-body bg-success text-white ">
                               
                                 <p className="h4">Component A</p>
                                 <pre>{JSON.stringify(this.props.userInfo)}</pre>
                                 <ComponentB userInfo={this.props.userInfo}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </React.Fragment>
      )
    }
}

export default ComponentA;