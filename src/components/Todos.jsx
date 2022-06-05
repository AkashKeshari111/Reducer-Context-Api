import React from 'react'
import { useContext } from 'react'
import { TodosContext } from '../context/TodosContext'

function Todos() {
    const {handleChange,handleClick,data,sendData,setSendData}=useContext(TodosContext)
  return (
    <div>
        <input type="text" value={data} onChange={handleChange} />
        <button onClick={()=>(handleClick(data))}>add</button>
    </div>
  )
}

export default Todos