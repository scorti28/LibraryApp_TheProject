import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';

function App() {
  return (
    <>
    <Router> 
    <Navbar />
    <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
