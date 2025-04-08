import React, { Suspense, lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';
const Home = lazy(() => import("../src/pages/Home"))
const Services = lazy(() => import("../src/pages/Services"))
const ContactUs = lazy(() => import("../src/pages/ContactUs"))
import { fixTouchEvents } from './fixTouchEvents';



function App() {

  useEffect(() => {
    fixTouchEvents()
  }, [])


  return (
    <div className="app">
      <Suspense fallback={<Loader />}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<ContactUs />} />
        </Routes>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;