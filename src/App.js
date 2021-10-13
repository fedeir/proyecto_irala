import Navbar from './components/Navbar/Navbar';
import './App.css';
// import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
   <div>
       <Navbar/>
       {/* <ItemListContainer greeting="Bienvenido A E-Commerce"/> */}
       <ItemDetailContainer idProd={2}/>
   </div>
  );
}

export default App;
