import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Work from './Pages/Projects';
import GlobalStyle from './GlobalStyle';
import Contact from './Pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import useLocomotiveScroll from './hooks/useLocomotiveScroll';

function AppContent() {
  const location = useLocation();
  const scrollRef = useLocomotiveScroll(location);

  return (
    <div className="App" ref={scrollRef} data-scroll-container>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} index />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router basename="/">
      <AppContent />
    </Router>
  );
}

export default App;
