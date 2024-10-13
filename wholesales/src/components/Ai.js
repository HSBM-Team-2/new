import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './UserFeatures.css'; // Assume styles are moved to a CSS file

const UserFeatures = () => {
  const [designIdea, setDesignIdea] = useState('');
  const [productImage, setProductImage] = useState(null);
  const [groupName, setGroupName] = useState('');
  const [groupMembers, setGroupMembers] = useState('');

  const handleLoadForecast = () => {
    alert('Forecast data loaded (this will be linked to your AI model)');
  };

  const handleDesignSubmit = (e) => {
    e.preventDefault();
    alert('Design submitted successfully!');
  };

  const handleGroupSubmit = (e) => {
    e.preventDefault();
    alert('Group created successfully!');
  };

  return (
    <div className="container">
      {/* AI-Powered Demand Forecasting */}
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header text-center">
              <h4>AI-Powered Demand Forecasting</h4>
            </div>
            <div className="card-body">
              <p>We use AI algorithms to forecast product demand based on historical data. Below is a visual representation of predicted demand for the next quarter.</p>
              <div className="demand-forecast" id="forecastChart"></div>
              <button className="btn btn-info" onClick={handleLoadForecast}>Load Forecast Data</button>
            </div>
          </div>
        </div>
      </div>

      {/* Co-Creation with Customers */}
      <div className="row justify-content-center co-creation-card">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header text-center">
              <h4>Co-Creation with Customers</h4>
            </div>
            <div className="card-body">
              <p>Collaborate with us to design your custom product. Choose a design style, upload your ideas, and work with our team.</p>
              <form onSubmit={handleDesignSubmit}>
                <div className="form-group">
                  <label htmlFor="designIdea">Product Design Idea</label>
                  <textarea
                    className="form-control"
                    id="designIdea"
                    rows="4"
                    placeholder="Describe your design idea..."
                    value={designIdea}
                    onChange={(e) => setDesignIdea(e.target.value)}
                  ></textarea>
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="productImage">Upload Your Image</label>
                  <input
                    type="file"
                    className="form-control"
                    id="productImage"
                    onChange={(e) => setProductImage(e.target.files[0])}
                  />
                </div>
                <button type="submit" className="btn btn-success mt-3">Submit Your Design</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Collaborative Group Buying */}
      <div className="row justify-content-center group-buy-card">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header text-center">
              <h4>Collaborative Group Buying</h4>
            </div>
            <div className="card-body">
              <p>Create a group for bulk purchasing and enjoy discounted rates. Invite others to join your group for even greater discounts!</p>
              <form onSubmit={handleGroupSubmit}>
                <div className="form-group">
                  <label htmlFor="groupName">Group Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="groupName"
                    placeholder="Enter your group name"
                    required
                    value={groupName}
                    onChange={(e) => setGroupName(e.target.value)}
                  />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="groupMembers">Add Group Members</label>
                  <input
                    type="email"
                    className="form-control"
                    id="groupMembers"
                    placeholder="Enter email addresses of members"
                    multiple
                    value={groupMembers}
                    onChange={(e) => setGroupMembers(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-info mt-3">Create Group</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Subscription-Based Discounts */}
      <div className="row justify-content-center subscription-card">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header text-center">
              <h4>Subscription-Based Discounts</h4>
            </div>
            <div className="card-body">
              <p>Choose from one of our subscription plans and enjoy regular discounts on your orders!</p>
              <div className="d-flex justify-content-around">
                <button className="btn btn-primary pricing-plan-btn">Basic Plan - 5% Discount</button>
                <button className="btn btn-primary pricing-plan-btn">Pro Plan - 10% Discount</button>
                <button className="btn btn-primary pricing-plan-btn">Enterprise Plan - 15% Discount</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserFeatures;
