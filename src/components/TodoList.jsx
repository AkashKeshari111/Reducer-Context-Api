import React,{useContext} from 'react'
import { TodosContext } from '../context/TodosContext'

function TodoList({info}) {
    const {sendData,handleRemove,handleChecked,toggle,setToggle}=useContext(TodosContext)
  return (
    <div>

            

           <input type="checkbox" checked={toggle} onChange={handleChecked}/>
            {toggle?<s>{info}</s>:<p>{info}</p>}
            <button onClick={()=>handleRemove(info)}>Del</button>
            
            
      
    </div>
  )
}

export default TodoList