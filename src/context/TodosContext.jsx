import React,{createContext} from 'react'
import { useState } from 'react';

export const TodosContext=createContext();

// const reducer=(data,action)=>{

// }

export const TodosProvider=({children})=>{

   const [data,setData]=useState("")
   const [sendData,setSendData]=useState([])
   const [toggle,setToggle]=useState(false)

   const handleChange=(e)=>{
       setData(e.target.value)
   }

   const handleClick=(value)=>{
        setSendData([...sendData,value])
        setData("")
   }

   const handleRemove=(value)=>{
       setSendData(sendData.filter((del)=>(del!==value)))
   }

   const handleChecked=(e)=>{
         setToggle(e.target.checked)
         console.log(e.target.checked)
   }

    return <TodosContext.Provider value={{handleChange,handleClick,data,sendData,setSendData,handleRemove,handleChecked,toggle,setToggle}}>{children}</TodosContext.Provider>
}