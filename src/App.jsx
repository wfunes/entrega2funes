
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/Navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {


  return (

    <>
  <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path ='/categoria/:idCategoria' element={<ItemListContainer/>}/>
        <Route path ='/item/:idItem' element={<ItemDetailContainer/>}/>
    </Routes>
  </BrowserRouter>

    </>
  );
}

export default App
