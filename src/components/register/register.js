import {useState} from "react";
import './register.css';
import rztkLogo from './assets/rozetka-ua.png';
import {Icon} from 'react-icons-kit';
import {eye} from 'react-icons-kit/feather/eye';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import { useNavigate } from "react-router-dom"

function Register() {

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
    };
    
    const navigate = useNavigate();
    const [input, setInput] = useState(
      {name: "", 
      email: "", 
      password: ""}
      )

    const submit = (e) => {
      e.preventDefault();
      localStorage.setItem("user", JSON.stringify(input))
      navigate("/login")
    };
    
    return (

        <main className="form-sign-in">
            <form onSubmit={submit}>
                <h1 className="h3 mb-3 fw-normal">
                    <img className="img-rztk" alt="/" src={rztkLogo}/>
                </h1>

                <div className="form-floating">
                    <input
                        className="form-control"
                        placeholder="UserName"
                        name="name"
                        value={input.name}
                        onChange={(e) => setInput({
                            ...input,
                            [e.target.name]: e.target.value
                        })}/>
                    <label>User Name</label>
                </div>

                <div className="form-floating">
                    <input 
                    type="email" 
                    className="form-control" 
                    placeholder="Email"
                    name="email"
                    value={input.email}
                    onChange={(e) => setInput({
                        ...input,
                        [e.target.name]: e.target.value
                    })}/>
                    <label>Email</label>
                </div>

                <div className="form-floating">
                    <input 
                    className="form-control" 
                    type={type} 
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

                <button className="btn" type="submit">Submit</button>

            </form>

        </main>

    );
}

export default Register;