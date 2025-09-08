import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'

const App = () => {
  return (
   <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/venues' element={<Products/>}/>
        <Route path='/venues/:id' element={<ProductDetails />} />
      </Routes>
      <Footer/>
      
    </>
  )
}

export default App
