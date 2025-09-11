
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Add from './pages/Add'
import List from './pages/List'
import Sidebar from './components/Sidebar'
const App = () => {
  return (
   <>
   <div className='flex'>
     <Sidebar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add' element={<Add/>}/>
        <Route path='/list' element={<List />} />
      </Routes>

   </div>
      
    </>
  )
}

export default App
