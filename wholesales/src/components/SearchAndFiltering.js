import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchAndFiltering = () => {
    // Sample Product Data
    const products = [
        { id: 1, name: 'Wireless Headphones', price: 1500, date: '2024-01-15', rating: 4.5, image: 'https://via.placeholder.com/300x200' },
        { id: 2, name: 'Smartphone 13 Pro', price: 25000, date: '2023-12-10', rating: 5, image: 'https://via.placeholder.com/300x200' },
        { id: 3, name: 'LED TV 55 inches', price: 13000, date: '2023-11-25', rating: 4, image: 'https://via.placeholder.com/300x200' },
        { id: 4, name: 'Gaming Laptop', price: 25000, date: '2024-02-01', rating: 4.8, image: 'https://via.placeholder.com/300x200' },
        { id: 5, name: 'Smart Watch', price: 5000, date: '2023-10-05', rating: 4, image: 'https://via.placeholder.com/300x200' },
        { id: 6, name: 'Bluetooth Speaker', price: 2000, date: '2024-03-15', rating: 3.5, image: 'https://via.placeholder.com/300x200' },
        { id: 7, name: 'Digital Camera', price: 9000, date: '2023-09-10', rating: 4.2, image: 'https://via.placeholder.com/300x200' },
    ];

    const [maxPrice, setMaxPrice] = useState(5000); // Adjusted initial value for better filtering
    const [dateFilter, setDateFilter] = useState('all');
    const [ratingFilter, setRatingFilter] = useState('all');

    // Filter products based on selected criteria
    const applyFilters = () => {
        return products.filter(product => {
            const priceMatch = product.price <= maxPrice;

            let dateMatch = true;
            if (dateFilter === 'new') {
                const currentDate = new Date();
                const productDate = new Date(product.date);
                dateMatch = (currentDate - productDate) < (30 * 24 * 60 * 60 * 1000); // Less than a month
            } else if (dateFilter === 'old') {
                const currentDate = new Date();
                const productDate = new Date(product.date);
                dateMatch = (currentDate - productDate) > (30 * 24 * 60 * 60 * 1000); // More than a month
            }

            const ratingMatch = ratingFilter === 'all' || product.rating >= parseFloat(ratingFilter);

            return priceMatch && dateMatch && ratingMatch;
        });
    };

    // Clear filters and reset state
    const clearFilters = () => {
        setMaxPrice(5000);
        setDateFilter('all');
        setRatingFilter('all');
    };

    // Get filtered products
    const filteredProducts = applyFilters();

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-5">Product Catalog</h1>
            <div className="row">
                {/* Filter Section */}
                <div className="col-md-3 filter-section">
                    <h3>Filters</h3>
                    {/* Price Range Filter */}
                    <div className="filter-group">
                        <label htmlFor="priceRange">Price Range</label>
                        <input
                            type="range"
                            className="range-slider"
                            id="priceRange"
                            min="0"
                            max="50000" // Adjusted for more realistic price range
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(e.target.value)}
                        />
                        <p>Price: ETB <span>{maxPrice}</span></p>
                    </div>

                    {/* Date Filter */}
                    <div className="filter-group">
                        <label htmlFor="dateFilter">Date of Product</label>
                        <select
                            id="dateFilter"
                            className="form-select"
                            value={dateFilter}
                            onChange={(e) => setDateFilter(e.target.value)}
                        >
                            <option value="all">All</option>
                            <option value="new">New Arrivals</option>
                            <option value="old">Older Products</option>
                        </select>
                    </div>

                    {/* Rating Filter */}
                    <div className="filter-group">
                        <label htmlFor="ratingFilter">Rating</label>
                        <select
                            id="ratingFilter"
                            className="form-select"
                            value={ratingFilter}
                            onChange={(e) => setRatingFilter(e.target.value)}
                        >
                            <option value="all">All Ratings</option>
                            <option value="5">5 Stars</option>
                            <option value="4">4 Stars & above</option>
                            <option value="3">3 Stars & above</option>
                        </select>
                    </div>

                    {/* Clear Filters Button */}
                    <button className="btn btn-secondary" onClick={clearFilters}>Clear Filters</button>
                </div>

                {/* Products Section */}
                <div className="col-md-9">
                    <div className="row">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map(product => (
                                <div key={product.id} className="col-md-4 mb-4">
                                    <div className="card product-card">
                                        <img src={product.image} className="card-img-top" alt={product.name} />
                                        <div className="card-body">
                                            <h5 className="card-title">{product.name}</h5>
                                            <p className="card-text">Price: ETB {product.price}</p>
                                            <p className="card-text">Rating: {product.rating} Stars</p>
                                            <p className="card-text">Manufactured: {product.date}</p>
                                        </div>
                                        <div className="card-footer">
                                            <button className="btn btn-outline-primary">View Details</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-12 text-center"><p>No products found with the selected filters.</p></div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchAndFiltering;
