// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import UserDashboard from './components/UserDashboard';
import AdminDashboard from './components/AdminDashboard';
import SearchAndFiltering from './components/SearchAndFiltering';
import Transport from './components/Transport';
import Ai from './components/Ai';
import Chatbot from './components/Chatbot';
import Payment from './components/Payment';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/SearchAndFiltering" element={<SearchAndFiltering />} />
        <Route path="/transport" element={<Transport />} />
        <Route path="/ai" element={<Ai />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/payment" element={<Payment />} />
       
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
