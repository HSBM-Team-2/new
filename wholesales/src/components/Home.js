// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{
      backgroundColor: '#f8f9fa',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#343a40' }}>Welcome to the Dashboard</h1>
      <p>Please choose an option below:</p>
      <Link to="/user-dashboard" className="btn btn-danger" style={{ margin: '10px', padding: '15px 30px', fontSize: '1.2rem' }}>User Dashboard</Link>
      <Link to="/admin" className="btn btn-primary" style={{ margin: '10px', padding: '15px 30px', fontSize: '1.2rem' }}>Admin Dashboard</Link>
    </div>
  );
};

export default Home;
