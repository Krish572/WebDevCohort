import { Outlet } from "react-router-dom";
import Icon from '@mdi/react';
import { mdiLaptop } from '@mdi/js';
import { useState } from "react";
import { emailContext } from "./context";

export function Layout(){

    const [birthYear, setBirthYear] = useState("");
    const [email, setEmail] = useState("");

    return (
        <>
            <emailContext.Provider value={{email, setEmail, birthYear, setBirthYear}}>
                <div className="h-screen flex flex-col gap-15 justify-center items-center" style={{backgroundColor: "#002b5a"}}>
                    <div className="flex items-center gap-2 text-white">
                        <div>
                            <Icon path={mdiLaptop} className="w-10"/>
                        </div>
                        <span className="text-3xl" style={{color: "#34c3bd"}}>Webinar<span className="text-white">.gg</span></span>
                    </div>
                    <Outlet/>
                </div>
            </emailContext.Provider>
        </>
        
    )
}