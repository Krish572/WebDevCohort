import { Spanobj } from "./Spanobj";
import { Inputbox } from "./Inputbox";
import { Button } from "./Button";
import { useContext } from "react";
import { emailContext } from "./context";

export function Emailpage(){
    const {email, setEmail} = useContext(emailContext);
    return (
        <>
            <Spanobj text={"Let's Get Started"} isheading={true}/>
            <div className="flex flex-col items-center gap-3">
                <Spanobj text={"please enter you Email Id"}/>
                <Inputbox text={"Email Id"} data={email} setData={setEmail}/>
            </div>
            <Button text={"Continue"} navigateTo={"/otp"} data={email}/>
        </>
    )
}