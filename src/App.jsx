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
      <Navbar />
      <Routes>
        <Route path="/" element={<Home greeting="Bienvenidos a Magus"/>} />
        <Route path="/category/plantas" element={<Plantas/>} />
        <Route path="/detail/:id" element={<DetalleProducto/>} />
        <Route path="/category/macetas" element={<ItemListContainer greeting="Macetas"/>} />
        <Route path="/category/venenos" element={<ItemListContainer greeting="Venenos"/>} />
        <Route path="/category/fertilizantes" element={<ItemListContainer greeting="Fertilizantes"/>} />
        <Route path="/category/herramientas" element={<ItemListContainer greeting="Herramientas"/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App