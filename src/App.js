
import './App.css';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer  from "./componentes/ItemDetailContainer";
import NavBar from './componentes/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Carrito from './componentes/Carrito';
import { Cart } from './componentes/Cart';

function App() {
  
  return (
    <BrowserRouter>
      <div>
        <  NavBar />
        < ItemDetailContainer/>
        
      </div>

      <Routes>
        <Route path="/" element={ < ItemListContainer />}/>
        <Route path="/detail/:id" element={ < ItemDetailContainer /> }></Route>
        <Route path="/carrito" element={<Carrito/> }/>
        <Route path="/cart" element={<Cart/> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
