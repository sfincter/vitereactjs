import React from 'react';

const Filters = ({ ratingFilter, setRatingFilter, priceFilter, setPriceFilter, resetFilters }) => {
  return (
    <div className="filters">
      <div>
        <label>Rating from:</label>
        <input className='filterInp'
          type="number"
          min="0"
          max="5"
          step="0.1"
          value={ratingFilter}
          onChange={(e) => setRatingFilter(e.target.value)}
        />
      </div>
      <div>
        <label>Max Price:</label>
        <input className='filterInp'
          type="number"
          value={priceFilter}
          onChange={(e) => setPriceFilter(e.target.value)}
        />
      </div>
      <button onClick={resetFilters}>Reset Filters</button>
    </div>
  );
};

export default Filters;
