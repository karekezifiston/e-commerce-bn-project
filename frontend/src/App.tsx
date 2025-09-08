
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import VenueDetails from './pages/FoodDetails'
import Venues from './pages/Food'


const App = () => {
  return (
    <>
      {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/venues' element={<Venues/>}/>
        <Route path='/venues/:id' element={<VenueDetails />} />
      </Routes>
      <Footer/>
      
    </>
  )
}

export default App
