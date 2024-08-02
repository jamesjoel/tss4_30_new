import React from 'react'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'
import Footer from './components/Footer'
import Event1 from './components/Event1'
import Event2 from './components/Event2'
import Event3 from './components/Event3'
import Event4 from './components/Event4'
import Event5 from './components/Event5'

const App = () => {


  
  return (
    <>
        <Header />
        <div className='container-fluid' style={{ minHeight : "700px" }}>
            <Routes>
                <Route path='' element={ <Home /> } />
                <Route path='about' element={ <About /> }/>
                <Route path='contact' element={ <Contact />}/>
                <Route path='login' element={<Login />} />
                <Route path='event1' element={<Event1 />} />
                <Route path='event2' element={<Event2 />} />
                <Route path='event3' element={<Event3 />} />
                <Route path='event4' element={<Event4 />} />
                <Route path='event5' element={<Event5 />} />
            </Routes>
        </div>
        <Footer />
    </>
    

  )
}

export default App