import React from "react"
import { useState } from "react"
import { createContext } from "react"

export const ThemeContext = createContext()

export const ThemeProvider = ({children})=>{
    const [theme,setTheme] = useState("light")

    const toogletheme = () =>{
         if(theme === "light"){
             setTheme("dark")
         }
         else{
             setTheme("light")
         }
    }
  return  <ThemeContext.Provider value={{toogletheme,
    isLight:theme==="light",
    theme}}>{children}</ThemeContext.Provider>
}