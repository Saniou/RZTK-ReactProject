import React, {useState} from "react";
import './login.css'
import rztkLogo from './assets/rozetka-ua.png'
import {Icon} from 'react-icons-kit'
import {eye} from 'react-icons-kit/feather/eye'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import { useNavigate } from "react-router-dom"

function Login() {

    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);

    const handleToggle = () => {
        if (type === 'password') {
            setIcon(eye);
            setType('text');
        } else {
            setIcon(eyeOff);
            setType('password');
        }
    }
    
    const navigate = useNavigate();
    const [input, setInput] = useState({
      email: "", 
      password: ""}
      )

      const submit = (e) => {
        e.preventDefault();
        const logger = JSON.parse(localStorage.getItem("user"));
        if(input.email === logger.email && input.password === logger.password) {
          localStorage.setItem("logIN", true)
          navigate("/todoList")
        } else {
          alert("NeOk")
        }
      };
      
    return (

        <main className="form-sign-in">
            <form onSubmit={submit}>

                <h1 className="h3 mb-3 fw-normal">
                    <img className="img-rztk" alt="/" src={rztkLogo}/>
                </h1>

                <div className="form-floating">
                    <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        name="email"
                        value={input.email}
                        onChange={(e) => setInput({
                            ...input,
                            [e.target.name]: e.target.value
                        })}/>
                    <label>Email adress</label>
                </div>

                <div className="form-floating">
                    <input
                        type={type}
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        value={input.password}
                        onChange={(e) => setInput({
                            ...input,
                            [e.target.name]: e.target.value
                        })}/>

                    <span className="OpenEye" onClick={handleToggle}>
                        <Icon className="EyeIcon" icon={icon}/>
                    </span>

                    <label>Password</label>
                </div>

                <button className="btn" type="submit">Login</button>

            </form>
        </main>

    );
}

export default Login;