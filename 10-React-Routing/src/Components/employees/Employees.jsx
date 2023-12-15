import React from "react";
import Axios from 'axios';

class Employees extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          employees : [],
          errorMessage : ''
        }
        
    }
    componentDidMount(){
      let dataURL = `https://gist.githubusercontent.com/korayguler/73ea0279cea48e705f13ad283f9c049e/raw/ed78e7c7968b89156338c14a819b23759e7d21e6/employees.json`;
      Axios.get(dataURL).then((response) =>{
         this.setState({
          ...this.state,
          employees : response.data
         })
      }).catch((error) =>{
         this.setState({
          ...this.state,
          errorMessage : error.Message
         })
      });
    }
    render() {
      return (
       <React.Fragment>
        <div className="container mt-3">
          <div className="row">
            <div className="col">
              <p className="h3"> WELCOME TO EMPLOYEES</p>
              <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatum neque et. Sit eos perferendis aliquam exercitationem eligendi, asperiores quas laudantium autem nobis. Blanditiis ea magni in dolore atque veniam.</p>
            </div>
          </div>
          <pre>{JSON.stringify(this.state.employees)}</pre>
          <div className="row">
            <div className="col">
             <table className="table table-hover text-center table-striped table-light ">
                <thead className="bg-dark text-white ">
                    <tr>
                       <th>SNO </th>
                       <th>IMG</th>
                       <th>NAME</th>
                       <th>EMAIL</th>
                       <th>AGE</th>
                       <th>LOCATION</th>
                    </tr>
                </thead>
                <tbody>
                  {
                    this.state.employees.length > 0 ?
                     <React.Fragment>
                       {
                        this.state.employees.map(employee => {
                          return(
                            <tr>
                              
                                 <td>{employee.id}</td>
                                 <td>{employee.name}</td>
                                 <td></td>

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

export default Employees;