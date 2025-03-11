import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Home from './Components/Home'
import Products from './Components/Products'
import NotFound from './Components/NotFound'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import { ToastContainer } from 'react-toastify'
import AuthProvider from '../AuthProvider'
import Dashboard from './Components/Dashboard'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/dashboard' element={<AuthProvider> <Dashboard /> </AuthProvider>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <ToastContainer/>
    </>
  )
}

export default App
