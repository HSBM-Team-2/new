import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Ensure this is included
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';

const UserDashboard = () => {
  const handleButtonClick = () => {
    alert('Welcome to the User Page! Explore more pages.');
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{ backgroundColor: '#007bff', color: 'white' }}>
        <a className="navbar-brand" href="#">User Dashboard</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
          <li className="nav-item"><Link className="nav-link" to="/SearchAndFiltering">Search</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/transport">Transport</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/ai">AI</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/chatbot">Chat</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/payment">Payment</Link></li>
            
            <li className="nav-item"><a className="nav-link" href="/profile">User</a></li>
            <li className="nav-item"><a className="nav-link" href="/admin">Admin Dashboard</a></li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="profileDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fas fa-user"></i> Profile
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="profileDropdown">
                <li><a className="dropdown-item" href="/profile"><i className="fas fa-cog"></i> Account Settings</a></li>
                <li><a className="dropdown-item" href="#"><i className="fas fa-sign-out-alt"></i> Logout</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>

      {/* Sidebar */}
      <div className="sidebar" style={{
        width: '200px', position: 'fixed', top: '60px', left: '0', height: '100%',
        backgroundColor: '#343a40', paddingTop: '20px'
      }}>
        <a href="/search" className="text-white d-block p-3"><i className="fas fa-search"></i> Search</a>
        <a href="/transport" className="text-white d-block p-3"><i className="fas fa-truck"></i> Transport</a>
        <a href="/ai" className="text-white d-block p-3"><i className="fas fa-robot"></i> AI</a>
        <a href="/chatbot" className="text-white d-block p-3"><i className="fas fa-comments"></i> Chat</a>
        <a href="/payment" className="text-white d-block p-3"><i className="fas fa-credit-card"></i> Payment</a>
      </div>

      {/* Main Content */}
      <div className="container" style={{ marginTop: '80px', marginLeft: '200px' }}>
        <div className="row">
          <div className="col-lg-9">
            <h1>Welcome to the User Dashboard</h1>
            <p>Use the navigation bar to explore different pages.</p>

            {/* Search Bar */}
            <div className="search-bar form-inline mb-4">
              <select className="form-control col-md-3">
                <option>All Categories</option>
                <option>Electronics</option>
                <option>Books</option>
                <option>Clothing</option>
              </select>
              <input type="text" className="form-control col-md-6" placeholder="Search products..." />
              <button className="btn btn-primary col-md-2"><i className="fas fa-search"></i> Search</button>
            </div>

            {/* Notification */}
            <div className="alert alert-info alert-dismissible fade show" role="alert">
              <strong>Info:</strong> This is an informational notification!
              <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            {/* Action Button */}
            <button id="actionButton" className="btn btn-primary" onClick={handleButtonClick}>Click Me</button>

            {/* Card */}
            <div className="card mt-4">
              <div className="card-header">Quick Links</div>
              <div className="card-body">
                <h5 className="card-title">Explore our features!</h5>
                <p className="card-text">Use the navigation bar to explore different functionalities available to you.</p>
                <a href="/search" className="btn btn-success">Start Searching</a>
                <a href="/chatbot" className="btn btn-secondary">Chat with Us</a>
              </div>
            </div>

            {/* Carousel */}
            <div id="carouselExampleInterval" className="carousel slide mt-4" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active" data-interval="3000">
                  <img src="https://via.placeholder.com/800x350" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" data-interval="3000">
                  <img src="https://via.placeholder.com/800x350" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" data-interval="3000">
                  <img src="https://via.placeholder.com/800x350" className="d-block w-100" alt="..." />
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>   </>
  );
};

export default UserDashboard;
