import { useState } from 'react';
import './App.css';
import Header from './componnet/header/header';
import { HashRouter , Route, Routes } from 'react-router-dom'; // Fix the import statement
import Aboutus from './componnet/about us/About us';
import Home from './componnet/Home/home';
import Partner from './componnet/authentification/partner';
import Footer from './componnet/Footer/Footer';


function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Aboutus/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/Partner" element={<Partner/>} />
          <Route path="/footer" element={<Footer/>} />
                  </Routes>
      </HashRouter>
    </>
  );
}

export default App;
