import React from "react";
import './App.css' 
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Register from "./components/register/register";
import Login from "./components/login/login";
import Home from "./components/home/home";

function App() {
  return (
  <BrowserRouter>
  
  <header className="header">
    <div className="container">
      <div className="nav-bar">

        <ul className="nav">
          <li>
            <Link to="/home" className="nav-link">Home</Link>
            </li>
        </ul>

        <div className="button-bar">
          <Link to="/login" className="btn-login">Login</Link>
          <Link to="/register" className="btn-register">Register</Link>
        </div>
      </div>
    </div>
  </header>
  
  <Routes>
    
    <Route path="/home"  element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    
  </Routes>
  
    </BrowserRouter>
  )
}


export default App;