import './App.css'
import CartWidget from './components/CartWidget/CartWidget'
import ItemListContainer from './components/itemListContainer/itemListContainer'
import Navbar from './components/navBar/navBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Plantas from './components/plantas/plantas'
import DetalleProducto from './components/detalleProdcto/detalleProducto'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<ItemListContainer greeting="Bienvenidos a Magus"/>} />
        <Route exact path="/plantas" element={<Plantas/>} />
        <Route exact path="/plantas/:id" element={<DetalleProducto/>} />
        <Route exact path="/macetas" element={<ItemListContainer greeting="Bienvenidos a Magus"/>} />
        <Route exact path="/venenos" element={<ItemListContainer greeting="Bienvenidos a Magus"/>} />
        <Route exact path="/fertilizantes" element={<ItemListContainer greeting="Bienvenidos a Magus"/>} />
        <Route exact path="/herramientas" element={<ItemListContainer greeting="Bienvenidos a Magus"/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App