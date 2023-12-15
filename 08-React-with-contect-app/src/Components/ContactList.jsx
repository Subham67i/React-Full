import React from "react";
import Axios from 'axios';
 
 class ContactList extends React.Component {
    constructor(props) {
         super(props);
         this.state = {
           contacts : [],
           errorMessage : ''
         }
        
    }

  componentDidMount(){
      let dataURL = 'https://gist.githubusercontent.com/Subham67i/9d0be5b19607cf2d9efdc1f69cc29e8f/raw/6372201a7bebbdd5ed8b13d35209b98d7ebb66c4/customers.20-10-2023.json'
      Axios.get(dataURL).then((response) =>{
        this.setState({
          ...this.state,
          contacts : response.data
         })

      }).catch((error)=>{
        this.setState({
          ...this.state,
          errorMessage : error
        })
      })
  }

  clickContact = (contact) => {
      this.props.sendContact(contact);
  };


    render() {
      return (
        <React.Fragment>
         <table className="table table-hover text-center  table-primary table-striped">
               <thead className="bg-dark text-white">
               <tr>
                    <th>SNO </th>
                    <th>NAME </th>
                    <th>EMAIL </th>
                    <th>PHONE </th>
                    <th>LOCATION </th>
                    <th></th>
                </tr>
               </thead>
               <tbody>
               { 
                 this.state.contacts.length > 0 ? 
                 <React.Fragment>
                     {
                       this.state.contacts.map(contact => {
                         return(
                          <tr key={contact} onClick={this.clickContact.bind(this,contact)}>
                              <td>{contact.id}</td>
                              <td>{contact.name}</td>
                              <td>{contact.email}</td>
                              <td>{contact.phone.substr(contact.phone.length - 6)}</td>
                              <td>{contact.address.street}</td>
                          </tr>
                         )
                       })
                     }
                 </React.Fragment> : null
               }
            </tbody>
            </table>
            
        </React.Fragment>
      )
    }
    
 }

 export default ContactList;