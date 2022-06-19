import { createContext } from "react";
export const CartContext=createContext();

export const CartContextProvider=({children})=>{
return <CartContext.Provider value={{len,handleLength}}>
 {children}
</CartContext.Provider>}


