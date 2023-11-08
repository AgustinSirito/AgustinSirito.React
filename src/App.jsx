import './App.css'
import ItemListContainer from './components/itemListContainer/itemListContainer'
import Navbar from './components/navBar/navBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer'
import Home from './components/home/home'
import plantasDB from './DB/plantasDB'
import macetasDB from './DB/macetasDB'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home greeting="Bienvenidos a Magus"/>} />
        <Route path="/category/plantas" element={<ItemListContainer listaProducto={plantasDB}/>}/>
        <Route path="/detail/:id" element={<ItemDetailContainer/>} />
        <Route path="/category/macetas" element={<ItemListContainer listaProducto={macetasDB}/>}/>
        {/* <Route path="/category/venenos" element={<ItemListContainer greeting="Venenos"/>} />
        <Route path="/category/fertilizantes" element={<ItemListContainer greeting="Fertilizantes"/>} />
        <Route path="/category/herramientas" element={<ItemListContainer greeting="Herramientas"/>} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App