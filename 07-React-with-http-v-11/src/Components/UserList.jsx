import React from "react";
import Axios from "axios";


class UserList extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
        users : [],
        errorMessage : "",
    }
   }

   componentDidMount(){
    Axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{
    //  console.log(response.data);
    this.setState({
        ...this.state,
        users : response.data
    })
    }).catch((error)=>{
    //  console.error(error);
    this.setState({
        ...this.state,
        errorMessage : error
    })
    });
   }

   render() {
     return (
       <React.Fragment>
         <div className="container mt-3">
            <div className="row">
                <div className="col">
                    <p className="h3">User List</p>
                    <p className="lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure doloribus voluptatum officia voluptatibus corporis recusandae impedit corrupti, inventore quam ratione obcaecati tempora asperiores culpa delectus totam aut voluptates provident quae?</p>
                </div>
            </div>
            {/* <pre>{JSON.stringify(this.state.users)}</pre> */}
            <div className="row mt-3">
                <div className="col">
                    <table className="table table-hover text-center table-striped table-primary">
                      <thead className="bg-dark text-white">
                        <tr>
                           <th className="bg-warning">SNO</th>
                           <th>NAME</th>
                           <th  className="bg-primary">Email</th>
                           <th>Street</th>
                           <th  className="bg-success">City</th>
                           <th >Website</th> 
                           <th className="bg-danger">Company</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                            this.state.users.length > 0 ? 
                            <React.Fragment>
                               {
                                this.state.users.map(users => {
                                    return(
                                       <tr key={users.id}>
                                          <td className="bg-info">{users.id}</td>
                                          <td>{users.name}</td>
                                          <td>{users.email}</td>
                                          <td >{users.address.street}</td>
                                          <td>{users.address.city}</td>
                                          <td>{users.website}</td>
                                          <td>{users.company.name}</td>
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

export default UserList;