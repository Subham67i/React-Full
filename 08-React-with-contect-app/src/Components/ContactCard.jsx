import React from "react";

 class ContactCard extends React.Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
      return (
       <React.Fragment>
       {
        Object.keys(this.props.selectedContact).length > 0 ? 
         <React.Fragment>
            <div className="card text-center">
               
               <div className="card-body text-center">
                  <ul>
                    <li className="list-group-item list-group-item-primary">
                          NAME : {this.props.selectedContact.name}
                    </li>
                    <li className="list-group-item list-group-item-primary">
                          EMAIL : {this.props.selectedContact.email}
                    </li>
                    <li className="list-group-item list-group-item-primary">
                         PHONE : {this.props.selectedContact.phone}
                    </li>
                    <li className="list-group-item list-group-item-primary">
                          LOCATION : {this.props.selectedContact.address.street}
                    </li>
                  </ul>
               </div>
            </div>
          </React.Fragment> : null
       }
       </React.Fragment>
      )
    }
 }

 export default ContactCard;