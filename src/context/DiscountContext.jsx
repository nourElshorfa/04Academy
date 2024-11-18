import { createContext, useState } from "react";


export let DiscountContext = createContext()

export default function DiscountContextProvider(props){

   const [discount , setDiscount] = useState(0);

   


   return <DiscountContext.Provider value={{ discount , setDiscount}}>{props.children}</DiscountContext.Provider>


}