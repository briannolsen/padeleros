import './App.css'
import ItemListContainer from './components/ItemListContainer'
import "bootstrap/dist/css/bootstrap.min.css"
import NavbarBoostrap from './components/NavbarBoostrap'
function App() {
  return (
    <>
    <NavbarBoostrap/>
    <ItemListContainer greeting="Bienvenidos a Padeleros!!"/>
    </>
  )
}
export default App
