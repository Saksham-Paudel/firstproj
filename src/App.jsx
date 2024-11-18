import { useState } from 'react'
import Home from './Home'
import Single from './Single'
import Edit from './Edit'
import Create from './Create'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/single/:id' element={<Single />}/>
      <Route path='/create' element={<Create />}/>
      <Route path='/edit' element={<Edit />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
