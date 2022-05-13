
import './App.css';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer  from "./componentes/ItemDetailContainer";
import NavBar from './componentes/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Carrito from './componentes/Carrito';
import { Cart } from './componentes/Cart';
import CustomProvider from './componentes/CartContext';

function App() {
  
  return (
    <BrowserRouter>

    <CustomProvider>
      <div>
        <  NavBar />
        
      </div>

      <Routes>
        <Route path="/" exact element={< ItemListContainer/>} />
        <Route path="/detail/:id" exact element={ < ItemDetailContainer /> }></Route>
        <Route path="/carrito" exact element={<Carrito/> }/>
        <Route path="/cart" exact element={<Cart/> }/>
        <Route path="/categories/:name" exact element={<ItemListContainer/> }/>
        
      </Routes>

      </CustomProvider>
    </BrowserRouter>
  );
}

export default App;
