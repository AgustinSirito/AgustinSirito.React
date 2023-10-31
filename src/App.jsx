import './App.css'
import ItemListContainer from './components/itemListContainer/itemListContainer'
import Navbar from './components/navBar/navBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Plantas from './components/plantas/plantas'
import DetalleProducto from './components/detalleProducto/detalleProducto'
import Home from './components/home/home'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home greeting="Bienvenidos a Magus"/>} />
        <Route exact path="/plantas" element={<Plantas/>} />
        <Route exact path="/plantas/:id" element={<DetalleProducto/>} />
        <Route exact path="/macetas" element={<ItemListContainer greeting="Macetas"/>} />
        <Route exact path="/venenos" element={<ItemListContainer greeting="Venenos"/>} />
        <Route exact path="/fertilizantes" element={<ItemListContainer greeting="Fertilizantes"/>} />
        <Route exact path="/herramientas" element={<ItemListContainer greeting="Herramientas"/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App