import React from "react";
import "./App.css";
import {BrowserRouter as Router ,   Route , Routes   } from 'react-router-dom';
import Navbar from "./Components/Layout/Navbar";
import Home from "./Components/Layout/Home";
import Employees from "./Components/employees/Employees";
import Stocks from "./Components/stocks/Stocks";
import About from "./Components/Layout/About";



class App extends React.Component {
   constructor(props) {
    super(props);
     
   }
   render() {
     return (
     <React.Fragment>
        <div className="App">
           
           <Router>
             <Navbar/>

             <Routes>
               <Route exact path="/" Component={Home}/>
               <Route exact path="/employees/list" Component={Employees}/>
               <Route exect path="/stocks/list" Component={Stocks} />
               <Route exect path="/about" Component={About} />
             </Routes>
           </Router>
         
           
       

         
          {/* <div style={{ marginBottom: "200px" }} /> */}
        </div>
        
      

        </React.Fragment>
     )
   }
   
}

export default App;
