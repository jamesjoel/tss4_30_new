import React from 'react'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'
import Footer from './components/Footer'

const App = () => {


  
  return (
    <>
        <Header />
        <div className='container my-4' style={{ minHeight : "700px" }}>
            <Routes>
                <Route path='' element={ <Home /> } />
                <Route path='about' element={ <About /> }/>
                <Route path='contact' element={ <Contact />}/>
                <Route path='login' element={<Login />} />
            </Routes>
        </div>
        <Footer />
    </>
    

  )
}

export default App