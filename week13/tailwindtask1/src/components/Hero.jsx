import { Sidebar } from "./Sidebar";
import { useContext } from "react";
import { emailContext } from "./context";

export function Hero(){

    const {email, birthYear} = useContext(emailContext);
    return (
        <div className="flex flex-row">
            <Sidebar/>
            <div className="flex flex-col w-full">
                <div className="w-full h-32 bg-gray-200 relative z-0"></div>
                <div className="flex px-10 relative z-20">
                    <div className="px-5 py-12 -mt-10 relative z-50 shadow-lg w-60 flex flex-col items-center rounded-xl gap-2">
                        <img className="w-25 h-25 rounded-xl" src="https://i.pinimg.com/1200x/1b/37/6e/1b376efd334574683266abf4b8951234.jpg" alt="hi"/>
                        <span className="font-bold text-xl">Sushant</span>
                        <span className="text-gray-500">{email || "Default@gmail.com"}</span>
                        <span className="text-gray-500">{birthYear || "01 Jan 2000"}</span>
                        <span className="text-gray-500">Delhi, India</span>
                    </div>   
                </div>    
            </div>
        </div>
    )
}