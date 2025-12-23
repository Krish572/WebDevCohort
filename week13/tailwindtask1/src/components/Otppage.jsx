import { useContext, useState } from "react"
import { emailContext } from "./context";
import { Spanobj } from "./Spanobj";
import { CustomOtp } from "./Customotp";
import { Button } from "./Button";

export function Otppage(){
    const length = 5;
    const {email} = useContext(emailContext);
    const [otp, setOtp] = useState(Array(length).fill(""));

    const otpstring = otp.every(digit => digit != "") ? otp.join("") : "";

    return (
        <>
            <Spanobj text={"Check Your Email For A Code"} isheading={true}/>
            <div className="flex flex-col items-center gap-3">
                <Spanobj text={"please enter the verification code sent to your email Id: " + email}/>
                <div className="flex gap-3">
                    <CustomOtp length={length} otp={otp} setOtp={setOtp}/>
                </div>
            </div>
            <Button navigateTo={"/home"} text={"Continue"} data={otpstring}/>
        </>
    )
}