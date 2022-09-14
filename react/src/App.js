import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer"

import ItemListContainer from "./components/ItemListContainer";

import ItemDetailCointener from "./components/ItemDetailContainer";
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from "./components/Cart";



export default function App() {


const saludo = 'hola!'

  return (

<BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path="/categoria/:categoriaId" element={<ItemListContainer/>}/>
          <Route path='/detail/:id' element={<ItemDetailCointener/>}/>
          <Route path="/Cart" element={<Cart/>}/>
        </Routes>
        </BrowserRouter>


  )
}
