import React, { createContext, useContext, useEffect, useState } from 'react'
const appContext=createContext();
const useAppContext=()=>{
    return useContext(appContext)
}

const AppProvider = ({children}) => {
    const[count,setCount]=useState(0);
    const[cartItems, setCartItems ]=useState({});
    const [selectedCategory, setSelectedCategory] = useState('Pizza');
    useEffect(() => {
      const total = Object.values(cartItems).length
      setCount(total);
  }, [cartItems]);

  return (
    <appContext.Provider value={{count,cartItems, setCartItems ,selectedCategory, setSelectedCategory}}>
        {children}
    </appContext.Provider>
  )
}

export {AppProvider,useAppContext}
