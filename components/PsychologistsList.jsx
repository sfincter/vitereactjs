import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PsychologistCard from './PsychologistCard';

const PsychologistsList = () => {
  const [ratingFilter, setRatingFilter] = useState(0);
  const [priceFilter, setPriceFilter] = useState(Infinity);

  const psychologists = [
    { name: 'Dr. Smith', rating: 4.8, price: 120, description: 'Specialist in cognitive behavioral therapy.' },
    { name: 'Dr. Johnson', rating: 4.2, price: 100, description: 'Expert in family therapy.' },
    { name: 'Dr. Brown', rating: 4.9, price: 150, description: 'Focused on stress management and mindfulness.' },
    { name: 'Dr. Williams', rating: 4.5, price: 90, description: 'Helps with anxiety and depression.' },
    { name: 'Dr. John', rating: 5, price: 90, description: 'Helps with anxiety and depression.' },
    { name: 'Dr. Ivan', rating: 4.4, price: 200, description: 'Helps with anxiety and depression.' }
  ];

  const resetFilters = () => {
    setRatingFilter(0);
    setPriceFilter(Infinity);
  };

  const filteredPsychologists = psychologists.filter(
    (psychologist) => psychologist.rating >= ratingFilter && psychologist.price <= priceFilter
  );

  return (
    <div className="App">
      <h1>Psychologist Directory</h1>
      <div className="filters">
        <div>
          <label>Rating from:</label>
          <input
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
          <input
            type="number"
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
          />
        </div>
        <button onClick={resetFilters}>Reset Filters</button>
      </div>
      <div className="psychologists-list">
        {filteredPsychologists.map((psychologist) => (
          <div key={psychologist.name}>
            <PsychologistCard {...psychologist} />
            <Link to={`/psychologist/${psychologist.name}`}>
              <button>View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PsychologistsList;
