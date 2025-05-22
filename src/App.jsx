import React, { Suspense, lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';
const Home = lazy(() => import("../src/pages/Home"))
const Services = lazy(() => import("../src/pages/Services"))
const ContactUs = lazy(() => import("../src/pages/ContactUs"))
const AboutUs = lazy(() => import("../src/pages/AboutUs"))
const AllTemplates = lazy(() => import("./pages/AllTemplates.jsx"))
const TemplatePage = lazy(() => import("./pages/TemplatePage.jsx"))
const ProductsPage = lazy(() => import("./pages/ProductsPage.jsx"))

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
          <Route path='/about' element={<AboutUs />} />
          <Route path="/templates" element={<AllTemplates />} />
          <Route path='/template/:id' element={<AllTemplates />} />
          <Route path='/templates/plumber1' element={<TemplatePage />} />
          <Route path='/products' element={<ProductsPage />} />
        </Routes>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;