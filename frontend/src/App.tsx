
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import FoodDetails from './pages/FoodDetails'
import Food from './pages/Food'


const App = () => {
  return (
    <>
      {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/food' element={<Food/>}/>
        <Route path='/food/:id' element={<FoodDetails />} />
      </Routes>
      <Footer/>
      
    </>
  )
}

export default App
