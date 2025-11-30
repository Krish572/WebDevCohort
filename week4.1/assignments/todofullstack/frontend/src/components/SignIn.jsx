import "../styles/signin.css"

export function SignIn(){
    return(
        <div className="signup">
            <div className="signup-box">
                <div>
                    <span>Email</span>
                    <input placeholder="email"/>
                </div>
                <div>
                    <span>Password</span>
                    <input placeholder="password"/>
                </div>
                <button>Sign Up</button>
            </div>
        </div>
    )
}