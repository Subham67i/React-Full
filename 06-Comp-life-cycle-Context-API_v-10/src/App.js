import React from "react";
import "./App.css";
import ComponentA from "./components/Props-drilling/ComponentA";
import CompOne from "./components/Context-api/CompOne";
import UserContext from "./components/Context-api/userContext";
import DigitalWatch from "./components/Comp-Life-Cycle/DigitalWatch";



class App extends React.Component {
   constructor(props) {
    super(props);
     this.state = {
      userInfo : {
         name : 'subham'
      }
     }
   }


   render() {
     return (
     <React.Fragment>
        <div className="App">
          <nav className="navbar navbar-dark bg-primary navbar-expand-sm">
            <a href="/" className="navbar-brand">
               React with Props Component life Cycle
            </a>
          </nav> 

          {/* ------------ component life cycle -----------*/}

           <DigitalWatch/>


           {/*------------------- context API--------------- */}
          {/* <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body bg-success">
                                <p className="h3"> App Component </p>
                                <pre>{JSON.stringify(this.state.userInfo)}</pre>
                                
                                <UserContext.Provider value={this.state.userInfo}>
                                  <CompOne/>
                                </UserContext.Provider>

                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
         
             {/* props Drilling Example */}
             {/* <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body bg-info  ">
                                 <p className="h4"> Aapp  Component</p>
                                 <pre>{JSON.stringify(this.state.userInfo)}</pre>
                                 <ComponentA userInfo={this.state.userInfo}/>
                            </div>
                        </div>
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
