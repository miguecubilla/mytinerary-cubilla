import React from 'react';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Cities from './pages/cities.js';
import {City} from './components/City';
import Home from './pages/home.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
    return(
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cities" element={<Cities />} />
          <Route path="/city/:id" element={<City />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    )
}
export default App;