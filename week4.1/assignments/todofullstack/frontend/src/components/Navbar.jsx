import { useNavigate } from "react-router-dom"

export function Navbar(){
    const navigate = useNavigate();

    function handleLogout(){
        localStorage.clear();
        alert("You are successfully logged out!")
        navigate("/signin");
    }

    const token = localStorage.getItem("authorization");

    return (
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <h1>To-Do App</h1>
            {token && <button style={{height: 40}} onClick={handleLogout}>Log Out</button>}
        </div>
    )
}