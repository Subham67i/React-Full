import React from "react";
import { customerData } from "./CustomerStore";

class Customer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            customers : customerData
        }
    }
    render() {
      return (
        <React.Fragment>
             <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-primary">Customer List</p>
                        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem maiores pariatur ad consequuntur recusandae libero, dolores quaerat corporis distinctio necessitatibus assumenda reiciendis adipisci mollitia perspiciatis doloremque blanditiis magnam quibusdam possimus.</p>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        <table className="table table-hover table-striped text-center table-primary ">
                            <thead>
                                <tr>
                                    <th>SNO</th>
                                   
                                    <th>Name </th>
                                    <th>Age </th>
                                    <th>Email </th>
                                    <th>Location </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.customers.map(customer => {
                                        return(
                                            <tr>
                                                <td>{customer.sno}</td>
                                                <td>{customer.name}</td>
                                                <td>{customer.color}</td>
                                            </tr>
                                        )
                                    })
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

export default Customer;