import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Work from './Pages/Work'
import Contact from './Pages/Contact'
import Blog from './Pages/Blog'
import Services from './Pages/Services'

function App() {
  

  return (
    <>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/home" element={ <Home /> } />
          <Route path="/work" element={ <Work /> } />
          <Route path="/contact" element={ <Contact /> } />
          <Route path="/blog" element={ <Blog /> } />
          <Route path="/service" element={ <Services /> } />
          
        </Routes>

    </>
  )
}

export default App
