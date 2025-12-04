import { useState } from "react"
import {useNavigate}  from "react-router-dom"
import axios from "axios";
import "../styles/signin.css"

export function SignUp(){

    const navigate = useNavigate();

    const [userInfo, setUserInfo] = useState({
        "username": "",
        "password": "",
        "email": ""
    });

    function handleChange(e){
        const {name, value} = e.target;
        setUserInfo((prev) => ({
            ...prev,
            [name] : value
        }));
    }

    async function handleSignup(){
        try{
            const response = await axios.post("http://localhost:3000/signup", userInfo);
            const {data} = response;
            alert(data.message + ", you can Signin now")
            navigate("/signin");
        }catch(err){
            console.log(err.response.data);
            alert(err.response.data);
        }
    }



    return(

        <div className="signup">
            <div className="signup-box">
                <div>
                    <span>Username</span>
                    <input 
                        placeholder="username"
                        name="username"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <span>Email</span>
                    <input placeholder="email"
                        name="email"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <span>Password</span>
                    <input placeholder="password"
                        name="password"
                        onChange={handleChange}
                    />
                </div>
                <button onClick={handleSignup}>Sign Up</button>
            </div>
        </div>
    )
}