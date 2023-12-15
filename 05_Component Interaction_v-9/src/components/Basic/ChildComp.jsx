import React from "react";

class ChildComp extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {
            wishMessage : 'hello iam from child' 
         }
    
    }

    

    clickButton = () => {
        this.props.sendData(this.state.wishMessage);
   }



    render() {
      return (
        <div>
          <React.Fragment>
          <div className="container mt-3">
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-body bg-light">
                            <p className="h3">Child Component</p>
                            <span>{this.props.message}</span>
                            {/* <span>{this.state.wishMessage}</span> */}
                            <button 
                            onClick={this.clickButton}
                            className="btn btn-secondary btn-sm">send</button>

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

export default ChildComp;