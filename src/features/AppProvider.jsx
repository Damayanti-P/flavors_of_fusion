import React, { createContext, useContext, useEffect, useState } from 'react'
const appContext=createContext();
const useAppContext=()=>{
    return useContext(appContext)
}

const AppProvider = ({children}) => {
    const[count,setCount]=useState(0);
    const[cartItems, setCartItems ]=useState({});
    useEffect(() => {
      const total = Object.values(cartItems).length
      setCount(total);
  }, [cartItems]);

  return (
    <appContext.Provider value={{count,cartItems, setCartItems }}>
        {children}
    </appContext.Provider>
  )
}

export {AppProvider,useAppContext}
