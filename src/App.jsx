import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';
const Home = lazy(() => import("../src/pages/Home"))
const Services = lazy(() => import("../src/pages/Services"))
const ContactUs = lazy(() => import("../src/pages/ContactUs"))



function App() {
  return (
    <div className="app">
      <Suspense fallback={<Loader />}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact-us' element={<ContactUs />} />
        </Routes>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;