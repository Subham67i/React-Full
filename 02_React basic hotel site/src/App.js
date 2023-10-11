import React from 'react';
import './App.css';

import Navbar from './Components/Navbar';
import LandingPage from './Components/LandingPage';
import CountryCards from './Components/CountryCards';
import Contact from './Components/Contact';
import InfoBox from './Components/info';


function App() {
  return (
   <div className='App'>
       <Navbar/>       
       <LandingPage/>
       <CountryCards/>
       <CountryCards/>
       <InfoBox/>
       <Contact/>
   </div>
     
  );
}

export default App;
