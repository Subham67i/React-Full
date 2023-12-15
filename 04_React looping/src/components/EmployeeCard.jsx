import React from "react";

class EmployeeCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            employees : [
                {
                  sno : 'AA6769',
                  name : 'Rahul',
                  age : 25,
                  designation : 'Software Engineer',
                  location : 'Mohali' 
                },
                {
                    sno : 'AA8869',
                    name : 'suraj',
                    age : 35,
                    designation : 'team lead',
                    location : 'Chandigarh' 
                  },
                  {
                    sno : 'BA6769',
                    name : 'Ritanshu',
                    age : 27,
                    designation : 'Project manager',
                    location : 'USA' 
                  },
                  {
                    sno : 'AA8989',
                    name : 'Rahul',
                    age : 35,
                    designation : 'director',
                    location : 'Noida' 
                  }
    
            ]
        }
        
    }
    render() {
      return (
       <React.Fragment>
        <div className="container  mt-3">
            <div className="row">
               <div className="col-md-9">
                 {
                    this.state.employees.map(employee => {
                        return(
                            <div key={employee.sno} className="card  mt-2 " > 
                            <div className="card-body bg-light ">
                                
                                 <ul className="list-group  ">
                                    <li className="list-group-item">
                                         SNO : {employee.sno}
                                    </li>
                                    <li className="list-group-item">
                                        NAME : {employee.name}
                                    </li>
                                    <li className="list-group-item">
                                         AGE : {employee.age}
                                    </li>
                                    <li className="list-group-item">
                                    Designation : {employee.designation}
                                    </li>
                                    <li className="list-group-item">
                                    Location : {employee.location}
                                    </li>
                                    
                                 </ul>
                            </div>
                        </div>
                        )
                    })
                 }
                
                  
               </div>
            </div>
        </div>
       </React.Fragment>
      )
    }
    
}

export default EmployeeCard;