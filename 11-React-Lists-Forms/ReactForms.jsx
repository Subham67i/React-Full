import React from "react";

class ReactForms extends React.Component{
  
    onInputChange(event){
        console.log(event.target.value);
    }
    
    state = {inputValue : ''};
   


    render() {
      return (
        <div>
              <form>
                <label>Enter Text</label>
                <input type="text"onChange={this.onInputChange}/>
              </form>
              
              <form>
                <label> Enter Text</label>
                <input type="text"value={this.state.inputValue}
                       onChange={(e)=>this.setState(
                        {inputValue: e.target.value})}/>
              </form>
              <br />
              <div>
                Entered Value : {this.state.inputValue}
              </div>

        </div>
        

      )
    }
}

export default ReactForms;