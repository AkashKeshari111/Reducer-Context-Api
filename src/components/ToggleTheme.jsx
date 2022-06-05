import React from 'react'
import { FormControl, FormLabel, Switch } from '@chakra-ui/react'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContex'
function ToggleTheme() {
    const {toogletheme,isLight} = useContext(ThemeContext)
    return (
      <div>
          <FormControl display='flex' alignItems='center'>
  <FormLabel htmlFor='email-alerts' mb='0'>
    
  </FormLabel>
  <Switch id='email-alerts' onChange={toogletheme}/>{`Make ${isLight ? "Dark":"Light"}`}
</FormControl>
       
      </div>)
}

export default ToggleTheme