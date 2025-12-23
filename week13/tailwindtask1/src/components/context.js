import { createContext } from "react";

export const emailContext = createContext({
    birthYear: "",
    setBirthYear: () => {},
    email: "",
    setEmail: () => {}
});