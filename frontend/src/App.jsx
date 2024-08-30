import Navbar from './components/Navbar/Navbar'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home'
import Add from './pages/Add/Add'
import Edit from './pages/Edit/Edit'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add' element={<Add/>}/>
        <Route path='/edit/:id' element={ <Edit/> }/>
      </Routes>
    </div>
  )
}

export default App