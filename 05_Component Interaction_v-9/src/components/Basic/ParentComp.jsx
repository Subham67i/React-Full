import React from "react";
import ChildComp from "./ChildComp";

class ParentComp extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            message : 'hello iam Parent',
            wishMessage : '',
        }


    }

    receiveData = (data) => {
        this.setState({
            ...this.state,
            wishMessage : data
        })
    }



    render() {
      return (
        <div>
          <React.Fragment>
          <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card bi-light">
                            <div className="card-body">
                               {/* {this.state.message} */}
                               <p className="h3">Parent Component</p>
                               <p>Form Child : </p>
                               <ChildComp message={this.state.message} sendData={this.receiveData} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

          </React.Fragment>
        </div>
      )
    }
    
}

export default ParentComp;