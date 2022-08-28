import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Contador from './components/Contador';


const App = () => {
  

  
  return(
    
  <>
  <NavBar/>
  <h1>Hola soy el componente Contador</h1>
  
  <Contador stock={10} initial={1}/>
  
  </>
  
  )
  
  }


export default App;
