import React from 'react';
import { useParams, Link } from 'react-router-dom';

const PsychologistDetails = () => {
  const { name } = useParams();

  // В реальном приложении здесь можно сделать запрос к API для получения данных о конкретном психологе.
  const psychologists = [
    { name: 'Dr. Smith', rating: 4.8, price: 120, description: 'Specialist in cognitive behavioral therapy.' },
    { name: 'Dr. Johnson', rating: 4.2, price: 100, description: 'Expert in family therapy.' },
    { name: 'Dr. Brown', rating: 4.9, price: 150, description: 'Focused on stress management and mindfulness.' },
    { name: 'Dr. Williams', rating: 4.5, price: 90, description: 'Helps with anxiety and depression.' },
    { name: 'Dr. John', rating: 5, price: 90, description: 'Helps with anxiety' },
    { name: 'Dr. Ivan', rating: 4.4, price: 200, description: 'Helps with anxiety and depression.' }
  ];

  const psychologist = psychologists.find((p) => p.name === name);

  if (!psychologist) {
    return <div>Psychologist not found</div>;
  }

  return (
    <div>
      <h2>{psychologist.name}</h2>
      <p>Rating: {psychologist.rating}</p>
      <p>Price: ${psychologist.price}</p>
      <p>{psychologist.description}</p>
      <Link to="/">
        <button>Back to List</button>
      </Link>
    </div>
  );
};

export default PsychologistDetails;
