import React from "react";

class ServerCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            message : '',
        }
    }
    
    submitServer = (e) => {
        e.preventDefault();
        this.props.sendData(this.state.message);
    };

    render() {
      return (
       <React.Fragment>
        <div className="card mt-4 ">
            <div className="card-header bg-light">
                <p className="h4">Server Card</p>
            </div>
            <div className="card-body">
                <form onSubmit={this.submitServer} >
                    <div className="from-group">
                    <input 
                      value={this.state.message}
                      onChange={e => this.setState({message : e.target.value})}
                    type="text" className="form-control"/>
                    </div>
                    {/* <pre>{this.state.message}</pre> */}
                    <div>
                        <input type="submit" className="btn btn-blue btn-sm" value='send'/>
                    </div>
                </form>

            </div>
            <div className="card-footer">
                From Client :- {this.props.clientMessage}
            </div>
        </div>
       </React.Fragment>
      )
    }
}

export default ServerCard;