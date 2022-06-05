import logo from './logo.svg';
import './App.css';
import  Todos from './components/Todos'
import TodoList from './components/TodoList';
import { useContext } from 'react';
import { TodosContext } from './context/TodosContext';


function App() {
 const {handleChange,handleClick,data,sendData,setSendData,handleRemove,handleChecked,toggle,setToggle}=useContext(TodosContext)
  return (
    <div className="App">
      
      <Todos/>
      {sendData.map((el,index)=>(
      <TodoList key={index} info={el} />
        ))}
    </div>
  );
}

export default App;
