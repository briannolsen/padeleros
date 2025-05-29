import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import ItemListContainer from './components/ItemListContainer'
import NavbarBoostrap from './components/NavbarBoostrap'
import Error from './components/Error'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {


  return (
    <BrowserRouter>
    <NavbarBoostrap/>
    <Routes>
      <Route path='/' element={<ItemListContainer greeting="Bienvenidos a mi app!"/>}/>
      <Route path='/category/:categoryId' element={<ItemListContainer greeting="Estas en la categoria: "/>}/>
      <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
   
    </BrowserRouter>
  )



}


export default App
