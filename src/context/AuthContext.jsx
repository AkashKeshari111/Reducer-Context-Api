import React,{createContext} from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

export const AuthContext=createContext();


export const AuthProvider=({children})=>{

 const [isAuth,setIsAuth]=useState(false)

 

 const login=(email)=>{
    // console.log(email,first_name)
     if(email)
     
    setIsAuth(true)

 }

 const logout=()=>{
     setIsAuth(false)
 }

   
    return <AuthContext.Provider value={{isAuth,setIsAuth,login,logout}}>{children}</AuthContext.Provider>
}