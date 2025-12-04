import { Navigate, Outlet } from "react-router-dom";

export function PublicRoute(){
    const token = localStorage.getItem("authorization");
    if(!token){
        return <Outlet/>
    }
    return <Navigate to="/user/todos" replace/>
}