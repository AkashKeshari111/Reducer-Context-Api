import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ToggleTheme from './components/ToggleTheme';
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContex';


function App() {
  const {isLight} = useContext(ThemeContext)
  return (
    <div className={`App`}>
     <Navbar/>
    
    </div>
  );
}

export default App;
