import { useState } from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MyNavbar from './components/MyNavbar'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Products from './pages/Products'
import About from './pages/About'
import { ProductsProvider } from './context/ProductsContext'
import ProductDetails from './pages/ProductDetails'



function App() {

  return (
    <>
  <ProductsProvider>
    <BrowserRouter>
    <MyNavbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/products' element={<Products />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/products/:id' element={<ProductDetails />}/>
      </Routes>
    </BrowserRouter>
  </ProductsProvider>
    </>
  )
}

export default App
