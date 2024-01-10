import React from "react";


class Lists extends React.Component{
    render() {
        const numbers = [1,2,3,4,5];
        
        const updatedNums = numbers.map((number)=>{
            return <li>{number}</li>;
        }); 
      return (
        <div>
          <ul>{updatedNums} </ul>
         
   
        </div>
      )
    }
    
}

export default Lists;