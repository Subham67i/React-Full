import React,{useState} from "react";

function CounterApp() {
    
    const [count, setCount] = useState(0);

    const [inputValue,setInputValue] = useState(0);

    const increment = () =>{
        if(count < 50){
            setCount(count + 1)
        }
        
    }

    const decrement =() =>{
        if(count > 0){
            setCount(count -1)
        }
    }
  
    const handleIncrement =() =>{
        if(inputValue < 100){

            setInputValue(inputValue + 1);
        }
        
    }

    const handleDecrement = () => {
        if(inputValue > 0){
            setInputValue(inputValue -1)
        }
       
    }


return (
    <React.Fragment>
        <div className="container mt-4">
            <div className="card text-center">
                <div className="card-body">
                    <h1>Counter App </h1>
                    
                    <div className="my-5">
                        <h2 className="count">{count}</h2>
                        <button
                        onClick={increment} 
                        className="btn btn-danger btn-sm mt-4 mr-4">increment</button>
                        <button 
                         onClick={decrement}
                        className="btn btn-success btn-sm mt-4 ml-4">decrement</button>
                        
                        
                        
                    </div>
                </div>
            </div>
     </div>
        <div className="container">
        <div className="card mt-4 text-center">
                        <p className="h4">Counter</p>
                            <div className="card-body">
                                <input
                                onChange={(e)=> setInputValue(e.target.value) } 
                                type="text" maxlength="100" value={inputValue} />
                                <button 
                                onClick={handleIncrement}
                                className="btn btn-sm btn-blue">incrment</button>

                             <button 
                                onClick={handleDecrement}
                                className="btn btn-sm btn-info">decrement</button>
                            </div>
                        </div>
        </div>
    </React.Fragment>
  )   
    
}
   
export default CounterApp;