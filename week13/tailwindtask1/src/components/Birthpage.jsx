import { Spanobj } from "./Spanobj";
import { Inputbox } from "./Inputbox";
import { Button } from "./Button";
import { useContext, useState } from "react";
import { emailContext } from "./context";


export function Birthpage(){
    const {birthYear, setBirthYear} = useContext(emailContext);
    return (
        <>
            <Spanobj text={"Verify Your Age"} isheading={true}/>
            <div className="flex flex-col items-center gap-3">
                <Spanobj text={"please confirm your birth year. This data will not be stored."}/>
                <Inputbox text={"Your Birth Year"} data={birthYear} setData={setBirthYear}/>
            </div>
            <Button navigateTo={"/email"} text={"Continue"} data={birthYear}/>
        </>
    )
}