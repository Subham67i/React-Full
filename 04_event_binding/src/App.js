import React from 'react';
import './App.css';
import MessageCard from './components/MessageCard';
import ProductItem from './components/ProductItems';



function App() {
  return (
   <div className='App'>
     <nav className='navbar navbar-dark bg-primary navbar-expand-sm'>
      <a href="/" className='navbar-brand'>React with Event Binding </a>
     </nav>

    {/* <MessageCard/> */}
    <ProductItem/>
   
      


       <div style={{marginBottom : '200px'}}/>
   </div>
     
  );
}

export default App;
