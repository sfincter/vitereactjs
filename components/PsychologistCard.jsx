// src/components/PsychologistCard.jsx
import React from 'react';

const PsychologistCard = ({ name, tags, image }) => {
  return (
    <div className="card mb-4">
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <div className="tags mt-3">
          {tags.map((tag, index) => (
            <span key={index} className="badge bg-secondary me-1">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PsychologistCard;
