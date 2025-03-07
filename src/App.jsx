import { Routes, Route } from 'react-router'
import './App.css'
import Header from './Components/Header'
import HeroSection from './Components/HeroSection'
import Home from './Components/Home'
import Products from './Components/Products'

function App() {

  return (
    <>
      <Header />
      <HeroSection />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  )
}

export default App
