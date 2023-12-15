import React from "react";

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           register : {
            username : '',
            email : '',
            password : '',
            designation : '',
            terms : false
           },
           signup : {
            username : '',
            email : '',
            password : '',
            designation : '',
            terms : false
           }
        }
    }

    //updateInput
    updateInput = (event) => {
        if(event.target.type === 'checkbox'){
            this.setState({
                [event.target.name] : event.target.checked
            })
        }
        else{
            this.setState ({
                [event.target.name] : event.target.value
               
            }); 
        }
    };

    // registerUser

    registerUser = (event) => {
        event.preventDefault(); // to avoid page refresh
        console.log(this.state);
    };





    //updateTerms
    // updateTerms = (event) => {
    //     this.setState ({
    //         terms : event.target.checked
    //     });
    // };

    //updateEmail
    // updateEmail = (event) => {
    //     this.setState ({
    //      email : event.target.value
    //     });
    // };

    //updatePassword
    // updatePassword = (event) => {
    //    this.setState({
    //      password : event.target.value
    //    });
    // };

    render() {
      return (
        <React.Fragment>
            {/* <pre>{JSON.stringify(this.state)}</pre> */}
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header bg-info text-white">
                           <p className="h4">Register here</p>
                        </div>
                        <div className="card-body bg-light">
                           <form onSubmit={this.registerUser}>
                            <div className="form-group">
                                <input 
                                 name='username'
                                 value={this.state.username}
                                 onChange={this.updateInput}
                                type="text" className="form-control" placeholder="Username"/>
                            </div>
                            <div className="form-group">
                                <input
                                name='email' 
                                 value={this.state.email}
                                 onChange={this.updateInput}
                                type="email" className="form-control" placeholder="Email"/>
                            </div>
                            <div className="form-group">
                                <input 
                                  name='password' 
                                  value={this.state.password}
                                  onChange={this.updateInput}
                                type="password" className="form-control" placeholder="Password"/>
                            </div>
                            <div className="form-group">
                          <select className="form-control"
                                   name='designation' 
                                   value={this.state.designation}
                                   onChange={this.updateInput}>
                                <option value="">select Designation</option>
                                <option value="Software Engineer">Software Engineer</option>
                                <option value="Mechnical Engineer">Mechnical Engineer</option>
                                <option value="Civil Engineer">Civil Engineer</option>
                          </select>

                               <div className="form-check">
                               <input 
                                name="terms"
                                value={this.state.terms}
                                onChange={this.updateInput}
                               className="form-check-input" type="checkbox"  id="flexCheckDefault"/>
                               <label className="form-check-label" for="flexCheckDefault">
                                 Accept Terms & Conditions
                                </label>
                                </div>
                                <div className="form-group">
                                    <input type="submit" className="btn btn-blue btn-sm " value='Register'/>
                                </div>
                              
                            </div>
                            </form>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
      )
    }
    
}

export default Register;