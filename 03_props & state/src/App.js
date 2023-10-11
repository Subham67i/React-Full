import React from 'react';
import './App.css';
import MessageCard from './components/MessageCard';
import Student from './components/Student';



function App() {
  return (
   <div className='App'>
     <nav className='navbar navbar-dark bg-primary navbar-expand-sm'>
      <a href="/" className='navbar-brand'>React with Props & State </a>
     </nav>

  
      

{/* <MessageCard name='subham' age='22' designation="software Engineer"/>
<MessageCard name='rahul' age='24' designation="MERN"/>
<MessageCard name='SURAJ' age='25' designation="B.TECH "/>
<MessageCard name='JANMEJAY' age='22' designation="MCA"/> */}

<Student/>
     
       <div style={{marginBottom : '200px'}}/>
   </div>
     
  );
}

export default App;
