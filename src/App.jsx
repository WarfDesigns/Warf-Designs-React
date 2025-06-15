import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About-Us.html';
import Contact from './pages/Contact-Us.html';
import Accessibility from './pages/Accessibility.html';
import Header from '../src/Modules/Header/Header.jsx';
import Footer from '../src/Modules/Footer/footer.jsx';

function App() {

  return(
    <>
      <Section-1/>
      <Header/>
      <Section-1/>
      <Section-3/>
      <Section-2/>
      <Section-2/>
      <Section-1/>
      <Footer/>
    </>
  );
}

export default App
