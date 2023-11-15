import { createContext, useContext } from "react";
import { noop } from "./utils";


export const ContactContext = createContext({
    fullName:'',
    setFullName:noop,
    phone:'',
    setPhone:noop,
});

export const useContact =()=>{
    return useContext(ContactContext);
}
