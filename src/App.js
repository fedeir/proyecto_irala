import Navbar from './components/Navbar/Navbar';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
   <div>
       <Navbar/>
       <ItemListContainer greeting="Bienvenido A E-Commerce"/>
   </div>
  );
}

export default App;
