import React from "react";

class MessageCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            message : 'Hello'
        }
        
    }

     sayGoodMorning = () => {
       this.setState({
          message : 'Good morning'
       });
    };

    sayGoodEvening = (value) => {
        this.setState({
            message : value
         });
    };

    render() {
      return (
        <React.Fragment>
            <div className="container mt-3">
                 <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <h2>{this.state.message}</h2>
                                <button onClick={this.sayGoodMorning} className=" btn btn-success btn-sm">Good morning</button>
                                <button onClick={this.sayGoodEvening.bind(this,'Good evening')} className=" btn btn-warning btn-sm">good evening</button>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
        </React.Fragment>
      )
    }
    
}

export  default MessageCard;