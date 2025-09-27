import React from 'react';
import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import Home from './pages/Home/Home';
//import Login from './pages/Login/Login';
//import Register from './pages/Register/Register';
import Write from './pages/Write/Write';
import Explore from './pages/Explore/Explore';
import Auth from './pages/Auth/Auth'; // ✅ now matches exactly


function App() {
  return (
    
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/*<Route path="/login" element={<Login />} />*/}
        {/*<Route path="/register" element={<Register />} />*/}
        <Route path="/write" element={<Write />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/join" element={<Auth />} />
      </Routes>
    </>
  );
}

export default App;
