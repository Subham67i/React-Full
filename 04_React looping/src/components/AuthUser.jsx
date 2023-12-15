import React from "react";

class AuthUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn : true 
        }
    }

    login = () => {
       this.setState({
        isLoggedIn : true
       })
    };

    logOut = () => {
      this.setState({
       isLoggedIn : false
      })
   };




    render() {
      return (
        <React.Fragment>
          {/* <pre>{JSON.stringify(this.state.isLoggedIn)}</pre> */}
           <div className="container mt-3">
             <div className="row">
               <div className="col">
                  <div className="card">
                  <div className="card-body">
                    {
                      !this.state.isLoggedIn ? 
                      <button onClick={this.login} className="btn btn-blue btn-sm" >LogIn</button> :
                    <button onClick={this.logOut} className="btn btn-blue btn-sm" >LogOut</button>
                    }
                    {
                      this.state.isLoggedIn ?
                      <p className="h3">Hello! Welcome User</p> :

                      <p className="h3"> Welcome Guest</p>
                    }
                 </div>
                  </div>
               </div>
             </div>
           </div>
        </React.Fragment>
      )
    }
    
}

export default AuthUser;