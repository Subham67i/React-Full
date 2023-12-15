import React from "react";

class ClientCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            message : ''
        }
    }

    submitClient = (e) => {
       e.preventDefault();
       this.props.sendData(this.state.message); // send Data to app component 
    }
    
    render() {
      return (
        <React.Fragment>
            <div className="card mt-4 ">
                <div className="card-header bg-light">
                    <p className="h4">Client Card</p>
                </div>
                <div className="card-body">
                    <form onSubmit={this.submitClient}>
                        <div className="form-group">
                            <input
                            value={this.state.message}
                            onChange={e => this.setState({message : e.target.value})} 
                            type="text" className="form-control"/>
                        </div>
                        
                        <div>
                            <input type="submit" className="btn btn-blue btn-sm" value='send'/>
                        </div>
                    </form>

                </div>
                <div className="card-footer">
                      Form Server :- {this.props.serverMessage}
                </div>
            </div>
        </React.Fragment>
      )
    }
}

export default ClientCard;