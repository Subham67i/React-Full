import React from "react";


class About extends React.Component {
    constructor(props) {
        super(props);
        
    }
    render() {
      return (
        <React.Fragment>
           <div className="container mt-3">
            <div className="row">
              <div className="col">
                <p className="h3">About Us.</p>
                <p className="lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias voluptatem ad natus nobis corrupti voluptatibus quaerat deleniti distinctio esse facilis odio quibusdam obcaecati nemo, animi reiciendis voluptas cumque alias? Deleniti!</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p className="h3">App Name : 
                <span className="font-weight-bold"> React Routing </span></p>
                <p className="h3">Version : 
                <span className="font-weight-bold"> 1.0.4 </span></p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, rerum.</p>
              </div>
            </div>
           </div>
        </React.Fragment>
      )
    }
}

export default About;