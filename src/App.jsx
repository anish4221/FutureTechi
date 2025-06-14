import React from 'react'
import Home from './Pages/Home'
import Services from './components/Services'
import Video from './Pages/Video'
import Navbar from './components/Navbar'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

const App = () => {
  return (
    <div >
      {/* <Navbar /> */}
      <Video/>
      <Home/>
      <Services/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App

