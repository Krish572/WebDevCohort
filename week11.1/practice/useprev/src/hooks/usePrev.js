import { useEffect } from "react";
import { useRef } from "react";

export function usePrev(value = 20){
    const ref = useRef();

    useEffect(() => {
        ref.current = value;
    }, [value])

    return ref.current;
}