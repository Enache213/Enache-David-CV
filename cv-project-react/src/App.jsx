import React from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';

import HomePage from './pages/Home/HomePage';
import AboutMe from './pages/Home/AboutMe';
import Contact from './components/NavBar/Contact';
import NotFound from './pages/notFound';
import Home from './components/NavBar/Home'
import Layout from './components/Layout';
import Footer from './components/Footer/Footer';
import About from './components/NavBar/About';
import ContactMe from './pages/Home/ContactMe';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<ContactMe></ContactMe>}></Route>
        <Route path='/ABOUT ME' element={<About></About>}></Route>
        <Route path="/" element={<AboutMe></AboutMe>}/>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutMe/>} />
        <Route path="/CONTACT" element={<Contact />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/" element={<HomePage/>} */}
        <Route element={<NotFound />} />
        
     
      </Routes>
  <Layout></Layout>
  <Footer></Footer>
    </>
  );
}

export default App;
