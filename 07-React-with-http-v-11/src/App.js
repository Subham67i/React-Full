import React from "react";
import "./App.css";
import UserList from "./Components/UserList";
import Customers from "./Components/Customers";




class App extends React.Component {
   constructor(props) {
    super(props);
     
   }


   render() {
     return (
     <React.Fragment>
        <div className="App">
          <nav className="navbar navbar-dark bg-primary navbar-expand-sm">
            <a href="/" className="navbar-brand">
               React with Http
            </a>
          </nav> 
          
          {/* <UserList/> */}
          
          <Customers/>
            
         
          <div style={{ marginBottom: "200px" }} />
        </div>
        </React.Fragment>
     )
   }
   
}

export default App;
