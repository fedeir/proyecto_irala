import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import './App.css';
// import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Home from './pages/Home';
import DetailPage from './pages/DetailPage';


function App() {
  return (
   <>
        <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route exact path="/productos">
                    <ItemListContainer/>
                </Route>

                <Route exact path="/productos/:idPro">
                    <DetailPage/>
                </Route>
                
                <Route exact path="/">
                    <Home/>
                </Route>
            </Switch>
       </BrowserRouter>

        {/* <ItemListContainer greeting="Bienvenido A E-Commerce"/>
        <ItemDetailContainer id={1}/> */}
   </>
  );
}

export default App;
