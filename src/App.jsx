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
import ManageUser from './Components/ManageUser'
import ProtectedRoute from './Components/ProtectedRoute'


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />

        <Route path='/dashboard' element={
          <AuthProvider><ProtectedRoute>
            <Dashboard />
          </ProtectedRoute></AuthProvider>
        } />
        <Route path='/dashboard/manageuser' element={
          <ProtectedRoute>
            <ManageUser 
            />
          </ProtectedRoute>
        } />


        {/* <Route path='/dashboard' element={
          <AuthProvider>
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          </AuthProvider>
        }>
          <Route path='manageuser' element={<ManageUser />} />
          <Route path='profile' element={<Profile />} />
          <Route path='manageorder' element={<ManageOrder />} />
          <Route path='orders' element={<Orders />} />
        </Route> */}

        <Route path='*' element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
