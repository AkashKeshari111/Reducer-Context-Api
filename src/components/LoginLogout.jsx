import React from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useState,useEffect } from 'react';


function LoginLogout() {
    const {isAuth,setIsAuth,login,logout,email,first_name}=useContext(AuthContext)


    const [datas,setData]=useState([])

    useEffect(()=>{
       fetch('https://reqres.in/api/users/2')
       .then((res)=>(res.json()))
       .then((data)=>{
           setData(data)
          //  console.log(datas)
       })
    },[])
    console.log(datas.data.email)
  return (
    <div>
     
      
    
      <Button colorScheme='blue'  onClick={()=>{
            if(isAuth) logout()
            else login(datas.data)
                 
    }}> { isAuth?"logout":"login" }Login   </Button>



        
    </div>
  )
}

export default LoginLogout