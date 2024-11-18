import { createContext, useState } from "react";


export let SessionsContext = createContext()


export default function SessionsContextProvider(props) {
    const [selectedValue, setSelectedValue] = useState('1');
    
      const handleChange = (event) => {
        console.log(event.target.value);
        setSelectedValue(event.target.value);
      };
    return <SessionsContext.Provider value={{handleChange , selectedValue}}>{props.children}</SessionsContext.Provider>;
}