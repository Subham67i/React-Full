import React from "react";

class Home extends React.Component {
    constructor(props) {
        super(props);
        
    }
    render() {
      return (
        <React.Fragment>
           <div className="landing-page">
            <div className="wrapper">
               <div className="d-flex flex-column text-center justify-content-center align-items-center h-100">
                <h3 className="display-3"> React Routing </h3>
                <p className="lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique assumenda, sint possimus accusantium provident debitis quaerat aspernatur modi saepe doloribus iure asperiores nesciunt excepturi ea et nostrum amet, corrupti quas!</p>
                </div> 
            </div> 
           </div>
        </React.Fragment>
      )
    }
    
}

export default Home;