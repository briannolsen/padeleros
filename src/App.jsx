import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import ItemListContainer from './components/itemListContainer/ItemListContainer'
import NavbarBootstrap from "./components/NavBar/NavbarBoostrap";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './components/Error';
import Cart from './components/Cart/Cart';
import { CartProvider } from './context/CartContext';
import Checkout from './components/Checkout/Checkout';
import CheckoutUseForm from './components/Checkout/CheckoutUseForm';


function App() {
 
  return (
    <BrowserRouter>
    <CartProvider>
      <NavbarBootstrap/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting="Bienvenidos a mi app!"/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer greeting="Estas en la categoria: "/>}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<CheckoutUseForm/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </CartProvider>
    </BrowserRouter>
  )
}

export default App
