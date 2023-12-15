import React from "react";
import ContactCard from "./ContactCard";
import ContactList from "./ContactList";

class ContactApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedContact : {}
        }
        
    }

    receiveContact = (contact) => {
        this.setState({
            selectedContact : contact
        })
    };

    render() {
      return (
        <React.Fragment>
            {/* <pre>{JSON.stringify(this.state.selectedContact)}</pre> */}
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-primary">Contact App</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae praesentium laudantium repellat quidem consequatur ipsa enim recusandae cum debitis adipisci incidunt magnam doloribus, repudiandae error quis laboriosam earum perspiciatis molestiae?</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-9">
                       <ContactList sendContact={this.receiveContact}/>
                    </div>
                    <div className="col-md-3">
                        <ContactCard selectedContact={this.state.selectedContact}/>
                    </div>
                </div>
            </div>
        </React.Fragment>
      )
    }
    
}

export default ContactApp;