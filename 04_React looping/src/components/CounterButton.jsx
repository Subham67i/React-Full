import React from "react";


class CounterButton extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            counter : 0,

            student : [{
                name : 'subham'

            },
            {
                name : 'rahul'
            },
            {
                name : 'suraj'
            },
            {
                name : 'janmejay'
            }
        
        ]
        }
         
    }
    render() {
      return (
        <React.Fragment>
            <pre>{JSON.stringify(this.state.counter)}</pre>
             <button 
              onClick={c => this.setState({...this.state,counter : this.state.counter + 1})}
              className="btn  btn-blue btn-sm">count</button>
              <p className="h3">{this.state.student[`${this.state.counter}`].name}</p>
        </React.Fragment>
      )
    }
    
}

export default CounterButton;