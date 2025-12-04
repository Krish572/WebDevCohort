import { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/signin.css"

export function SignIn(){

    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        "email" : "",
        "password": ""
    })

    function handleChange(e){
        const {name, value} = e.target;
        setCredentials((prev) => ({
            ...prev,
            [name] : value
        }));
    }

    async function handleSignin(){
        try{
            const response = await axios.post("http://localhost:3000/signin", credentials); 
            const {token} = response.data;
            localStorage.setItem("authorization", "Bearer " + token);
            alert("You are successfully Signed In");
            navigate("/user/todos");
        }catch(err){
            if(!err.response.data.error){
                alert(err.response.data.message);
            }else{
                alert(err.response.data.message);
            }
            console.log(err.response.data);
        }

    }

    return(
        <div className="signup">
            <div className="signup-box">
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
                <button onClick={handleSignin}>Sign In</button>
            </div>
        </div>
    )
}