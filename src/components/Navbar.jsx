import "../css/Navbar.css"
import Carticon from "./Carticon.jsx"

const Navbar = () => {
    return(
        <nav className="nav-container">
            <h2>Coder shop</h2>
            <div className="a-container">
                <a href="">Nuevos</a>
                <a href="">ofertas</a>
                <a href="">Nuevos</a>
            </div>
            <Carticon/>
        </nav>
    )
}
export default Navbar