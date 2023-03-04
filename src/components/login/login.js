import React, { useState } from "react";
import './login.css'
import rztkLogo from './accets/rozetka-ua.png'
import { Icon } from 'react-icons-kit'
import { eye } from 'react-icons-kit/feather/eye'
import { eyeOff } from 'react-icons-kit/feather/eyeOff'

function Login() {
    
    const [type, setType]=useState('password');
    const [icon, setIcon]=useState(eyeOff);
  
    const handleToggle=()=>{    
      if(type === 'password'){
        setIcon(eye);      
        setType('text');
      }
      else{
        setIcon(eyeOff);     
        setType('password');
      }
    }
    
  return (
    
    <main className="form-sign-in">
      <form>
        
        <h1 className="h3 mb-3 fw-normal">
            <img className="img-rztk" alt="/" src={ rztkLogo } />
        </h1>
    
        <div className="form-floating">
          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
          <label>Email adress</label>
        </div>
        
        <div className="form-floating">
          <input type={type} className="form-control" placeholder="Password"/>
                    
          <span className="OpenEye" onClick={handleToggle}>
            <Icon className="EyeIcon" icon={icon} />
          </span>
          
          <label>Password</label>
        </div>
    
        <button className="btn" type="submit">Login</button>
        
      </form>
    </main>
    
  );
}

export default Login;
