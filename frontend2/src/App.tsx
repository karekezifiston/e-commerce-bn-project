
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'

const App = () => {
  return (
   <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/food' element={<Products/>}/>
        <Route path='/food/:id' element={<ProductDetails />} />
      </Routes>
      <Footer/>
      
    </>
  )
}

export default App
