import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import Services from './components/Services'
import Video from './Pages/Video'
import Navbar from './components/Navbar'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import FAQ from './Pages/Faq';
import CAREER from './Pages/Career';

const App = () => {
  // return (
  //   <div >
  //     {/* <Navbar /> */}
  //     <Video/>
  //     <Home/>
  //     <Services/>
  //     <Testimonials/>
  //     <Footer/>
  //   </div>
  // )
  return (
    <Router>
      <Routes>
        {/* Home Page Route WITH Navbar */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Video />
              <Home />
              <Services />
              <Testimonials />
              <Footer />
            </>
          }
        />

        {/* FAQ Page WITHOUT Navbar */}
        <Route path="/faq" element={<FAQ />} />
        <Route path="/career" element={<CAREER/>}/>
      </Routes>
    </Router>
  );
};

export default App

