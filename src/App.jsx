import { Routes, Route } from 'react-router'
import './App.css'
import Header from './Components/Header'
import Home from './Components/Home'
import Products from './Components/Products'
import NotFound from './Components/NotFound'
import Login from './Components/Login'
import SignUp from './Components/SignUp'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
