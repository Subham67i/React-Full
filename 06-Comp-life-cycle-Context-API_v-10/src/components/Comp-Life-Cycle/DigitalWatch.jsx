import React from "react";


class DigitalWatch extends React.Component {
    constructor(props) {
        super(props);
       this. state = {
          currentTime : new Date().toLocaleTimeString()
       }
        
    }

    //when the component is fully loaded on DOM
    componentDidMount(){
      this.timer = setInterval(() => {
          this.setState({
             currentTime : new Date().toLocaleTimeString()
          })
       }, 1000);
    }
    
    // when the component is (timer) removed from DOM
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    

    render() {
      return (
       <React.Fragment>
          <div className="container mt-4">
            <div className="row">
              <div className="col-md-6 m-auto">
                <div className="card">
                  <div className="card-header bg-success text-white text-center">
                    <p className="h4">Digital Watch</p>
                  </div>
                  <div className="card-body text-center">
                      <h3 className="diasplay-3">{this.state.currentTime}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
       </React.Fragment>
      )
    }
}

export default DigitalWatch;