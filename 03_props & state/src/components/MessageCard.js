import React from "react";

class MessageCard extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
      // console.log(this.props);
      let {name,age,designation} = this.props //Es6 destructing concept
      return (
        <React.Fragment>
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="card m-3">
                  <div className="card-body bg-light">
                      <ul className="list-group">
                        <li className="list-group-item">NAME : {name} </li>
                        <li className="list-group-item">AGE : {age} </li>
                        <li className="list-group-item">Designation : {designation} </li>
                      </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }    
};

export default MessageCard;