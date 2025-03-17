import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
const Home = lazy(() => import("../src/pages/Home"))
const Services = lazy(() => import("../src/pages/Services"))



function App() {
  return (
    <div className="app">
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
        </Routes>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;