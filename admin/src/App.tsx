
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Add from './pages/Add'
import List from './pages/List'
import Sidebar from './components/Sidebar'
import Statistics from './pages/Statistics'
const App = () => {
  return (
   <>
   <div className='flex'>
     <Sidebar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add' element={<Add/>}/>
        <Route path='/list' element={<List />} />
        <Route path='/statistics' element={<Statistics />} />
      </Routes>

   </div>
      
    </>
  )
}

export default App
