import React from "react";

class ChildCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            cMessage : ''
        };
    }
    
    updateInput =(e)=> {
        this.setState({
            cMessage : e.target.value
        })
        this.props.sendData(e.target.value)
    }
    
    
    render() {
      return (
        <React.Fragment>
           <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header bg-light">
                                <p className="h3">Child Card</p>
                            </div>
                            <div className="card-body">
                               
                                <form className="form-inline">
                                    <div className="form-group">
                                        <input 
                                         value={this.state.cMessage}
                                         onChange={this.updateInput}
                                        type="text" className="form-control"/>
                                    </div>
                                </form>
                                <p>Form Parent :- {this.props.pMessage}</p>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
      )
    }
}

export default ChildCard;