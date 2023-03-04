import { useState } from "react";
import './register.css';
import rztkLogo from './assets/rozetka-ua.png';
import { Icon } from 'react-icons-kit';
import { eye } from 'react-icons-kit/feather/eye';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import axios from "axios";
import {Navigate} from 'react-router-dom'

function Register() {
    
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
    };
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [navigate, setNavigate] = useState(false);

const submit = async e => {
    e.preventDefault();
    try {
        await axios.post("http://localhost:8000/api/register", {
        name, email, password});
    } catch (error) {
        setNavigate(true);
    }
}
    
    if(navigate) {
      return <Navigate to="/login" />
    }
    
  return (
    
    <main className="form-sign-in">
      <form onSubmit={submit}>
        
        <h1 className="h3 mb-3 fw-normal">
            <img className="img-rztk" alt="/" src={ rztkLogo } />
        </h1>
    
        <div className="form-floating">
          <input className="form-control" 
                onChange={e => setName(e.target.value)}
          />
          <label>User Name</label>
        </div>
        
        <div className="form-floating">
          <input type="email" className="form-control" placeholder="Password"
                onChange={e => setEmail(e.target.value)}
                    />
          <label>Email</label>
        </div>
        
        <div className="form-floating">
          <input type={type} className="form-control" placeholder="Password"
                onChange={e => setPassword(e.target.value)}
          />
          <span className="OpenEye" onClick={handleToggle}>
            <Icon className="EyeIcon" icon={icon} />
          </span>
          
          <label>Password</label>
        </div>
        
        <button className="btn" type="submit">Submit</button>
        
      </form>
    </main>
    
  );
}

export default Register;
