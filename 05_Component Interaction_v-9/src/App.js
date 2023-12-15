import React from "react";
import "./App.css";
import ParentComp from "./components/Basic/ParentComp";
import ParentCard from "./components/Intermediate/ParentCard";
import ClientCard from "./components/Advanced/ClientCard";
import ServerCard from "./components/Advanced/ServerCard";
import CounterApp from "./components/CounterApp";


class App extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      clientMessage : '',
      serverMessage : ''
    }
    
   }

   reciveClientData = (data) => {
       this.setState({
          clientMessage : data
       })
   }
   
   reciveServerData = (data) => {
      this.setState({
         serverMessage : data
      })
  }

  


   render() {
     return (
     <React.Fragment>
        <div className="App">
          <nav className="navbar navbar-dark bg-primary navbar-expand-sm">
            <a href="/" className="navbar-brand">
            React with components Intraction
            </a>
          </nav> 
    
             {/* <ParentComp/>
             <ParentCard/> */}

             <CounterApp/>

             
             {/* <div className="container">
               
                <div className="row">
                  <div className="col-md-5 offset-1">
                      <ClientCard sendData={this.reciveClientData} serverMessage={this.state.serverMessage}/>
                  </div>
                  <div className="col-md-5 offset-1">
                     <ServerCard clientMessage={this.clientMessage} sendData={this.reciveServerData}/>
                  </div>
                </div>
             </div> */}
          
         
          <div style={{ marginBottom: "200px" }} />
        </div>
        </React.Fragment>
     )
   }
   
}

export default App;
