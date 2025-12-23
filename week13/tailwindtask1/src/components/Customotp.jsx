import { useRef } from "react"

export function CustomOtp({length, otp, setOtp}){
    const inputRef = useRef([]);

    function handleChange(e, index){
        const value = e.target.value;
        if(!value){
            return;
        }
        if(!/^\d?$/.test(value)) {
            console.log("Enter only numbers");
            return;
        }
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
        if(value && index < length-1){
            inputRef.current[index+1].focus();
        }
    }

    function handleBack(e, index){
        if(e.key !== "Backspace") return;
        e.preventDefault();

        let newOtp = [...otp];  
        
        if(newOtp[index]){
            newOtp[index] = "";
            setOtp(newOtp);
            inputRef.current[index].focus();
            return;
        }

        if(index > 0){
            inputRef.current[index-1].focus();
            newOtp[index-1] = "";
            setOtp(newOtp)
        }
    }

    return (
        <>  
            {
                Array(length).fill(0).map((value, index) => (
                    <input 
                        className="w-9 h-10 px-3 rounded-lg text-white outline-none"
                        onKeyDown={(e) => handleBack(e, index)}
                        key={index}
                        value={otp[index]}
                        onChange={(e) => handleChange(e, index)}
                        ref={(el) => inputRef.current[index] = el}
                        style={{backgroundColor : "#18406a"}}
                    />
                ))
            }
        </>
    )
}