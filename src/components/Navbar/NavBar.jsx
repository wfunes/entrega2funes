import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import {NavLink, Link} from "react-router-dom"



const NavBar = () => {
  return (
    <header>
      <Link to ={"/"}>

        <h1>Vehículos</h1>
        </Link>
      
        <nav>
            <ul>
                <li>
                  <NavLink  to ={'/categoria/1'}> Autos </NavLink> 
                  </li>
                  <li>
                  <NavLink to ={'/categoria/2'}> Motos </NavLink> 
                  </li>
                  <li>
                  <NavLink to ={'/categoria/3'}> Camionetas</NavLink> 
                  </li>
               
            </ul>
        </nav>

        <CartWidget />

    </header>
  )
}

export default NavBar