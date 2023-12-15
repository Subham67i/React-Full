import React from "react";
import "./App.css";
import AuthUser from "./components/AuthUser";
import HobbySelector from "./components/HobbySelector";
import HobbySelectorRadio from "./components/HobbySelectorRadio";
import EmployeeCard from "./components/EmployeeCard";
import CounterButton from "./components/CounterButton";
import Customer from "./components/Customer";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-primary navbar-expand-sm">
        <a href="/" className="navbar-brand">
        React with Conditional & Looping
        </a>
      </nav>

     {/* <AuthUser/>
      <HobbySelector/>
      <HobbySelectorRadio/> */}
      {/* <EmployeeCard/> */}
      {/* <CounterButton/> */}
      <Customer/>


      <div style={{ marginBottom: "200px" }} />
    </div>
  );
}

export default App;
