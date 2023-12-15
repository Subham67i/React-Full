import React from "react";
import Axios from "axios";


class Customers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          customers : [],
          errorMessage : '',
        }
        
    }

    componentDidMount(){
      let dataURL = 'https://gist.githubusercontent.com/Subham67i/9d0be5b19607cf2d9efdc1f69cc29e8f/raw/6372201a7bebbdd5ed8b13d35209b98d7ebb66c4/customers.20-10-2023.json'
       Axios.get(dataURL).then((response) =>{
          this.setState({
            ...this.state,
            customers : response.data
          })
       }).catch((error) =>{
          this.setState({
            ...this.state,
            errorMessage : error.message
          })

       })
    }

    render() {
      return (
       <React.Fragment>
         <div className="container">
            <div className="row">
                <div className="col">
                    <p className="h3 text-primary mt-4">Customers.</p>
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis illo iure, excepturi quam sapiente aliquid natus nulla provident eveniet voluptatem reprehenderit? Nisi esse veniam in nihil beatae minus voluptatem dolore?</p>
                </div>
            </div>
             {/* <pre>{JSON.stringify(this.state.customers)}</pre> */}
            <div className="row">
              <div className="col">
                <table className="table table-hover text-center table-primary table-striped">
                   <thead className="bg-dark text-white">
                     <tr>
                         <th className="bg-info">SNO</th>
                         <th>NAME</th>
                         <th className="bg-warning">Email</th>
                         <th>STREET</th>
                         <th className="bg-success">COMPANY</th>
                         <th>WEBSITE</th>
                         <th className="bg-danger">CITY</th>
                     </tr>
                   </thead>
                   <tbody>
                    {
                      this.state.customers.length > 0 ?
                      <React.Fragment>
                        {
                          this.state.customers.map(customers =>{
                             return(
                              <tr key={customers.id}>
                               <td>{customers.id}</td>
                               <td>{customers.name}</td>
                               <td>{customers.email}</td>
                               <td>{customers.address.street}</td>
                               <td>{customers.company.name}</td>
                               <td>{customers.website}</td>
                               <td>{customers.city}</td>
                              </tr>
                             )
                          })
                        }
                      </React.Fragment> : null
                    }
                   </tbody>
                </table>
              </div>
            </div>
         </div>
       </React.Fragment>
      )
    }
    
}

export default Customers;