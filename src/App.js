import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Sponsors from './pages/Sponsors/Sponsors';
import Coordinators from './pages/Coordinators/Coordinators';
import Register from './pages/Register/Register';
import Contact from './pages/Contact/Contact';
import Board from './pages/Board/Board';
import Gallery from './pages/Gallery/Gallery'; // <-- BUNUN OLDUĞUNA EMIN OL
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/iletisim" element={<Contact />} />
            <Route path="/koordinatorlukler" element={<Coordinators />} />
            <Route path="/sponsorlar" element={<Sponsors />} />
            <Route path="/kayit-ol" element={<Register />} />
            <Route path="/yonetim" element={<Board />} />
            
            {/* BU SATIR YOKSA SAYFA AÇILMAZ: */}
            <Route path="/galeri" element={<Gallery />} />
            
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;