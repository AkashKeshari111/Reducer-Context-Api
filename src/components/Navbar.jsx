import React, { useContext } from 'react'
import { Box } from '@chakra-ui/react'
import LoginLogout from './LoginLogout'
import ToggleTheme from './ToggleTheme'

import { ThemeContext } from '../context/ThemeContex';
function Navbar() {
  const {isLight} = useContext(ThemeContext)
  return (
    <div>
       <Box  w='100%' p={4} color='white' className={`App ${isLight?"light":"dark"}`}>
         <LoginLogout/>
       <ToggleTheme/>
       </Box>
    </div>
  )
}

export default Navbar