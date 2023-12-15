import React from "react";
import Axios from 'axios';

class Stocks extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
         stocks : [],
          errorMessage : ''
        }
        
    }
    componentDidMount(){
      let dataURL = `https://gist.githubusercontent.com/Subham67i/85b9c34c532b1732d530c3d921d20d2d/raw/24474ed44c59f05b8ffb6e2daa268c1235ec5891/stock-07-12-2023`;
      Axios.get(dataURL).then((response)=> {
        this.setState({
          ...this.state,
           stocks : response.data
        })
      }).catch((error) =>{
          this.setState({
            ...this.state,
            errorMessage : error.Message
          })
      });
    }
    render() {
      return (
        <React.Fragment>
            <div className="container mt-3">
              <div className="row">
                <div className="col">
                  <p className="h3">welcome to Stocks</p>
                  <pre>{JSON.stringify(this.state.stocks)}</pre>
                </div>
              </div>
            </div>
        </React.Fragment>
      )
    }
    
}

export default Stocks;