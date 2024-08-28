// src/App.jsx
import React, { useState } from 'react';
import PsychologistCard from './components/PsychologistCard';

const psychologists = [
  {
    name: 'Алиса',
    tags: ['ОКР', 'Панические атаки'],
    image: './src/assets/react.svg',
  },
  {
    name: 'Евгения',
    tags: ['Депрессия', 'Панические атаки'],
    image: './src/assets/react.svg',
  },
  {
    name: 'Александра',
    tags: ['ОКР', 'Депрессия'],
    image: './src/assets/react.svg',
  },
  {
    name: 'Анастасия',
    tags: ['ОКР'],
    image: './src/assets/react.svg',
  },
  {
    name: 'Иван',
    tags: ['Панические атаки', 'Депрессия'],
    image: './src/assets/react.svg',
  },
];

const App = () => {
  const [selectedTag, setSelectedTag] = useState('');

  const filteredPsychologists = selectedTag
    ? psychologists.filter(psychologist =>
        psychologist.tags.includes(selectedTag)
      )
    : psychologists;

  return (
    <div className="container">
      <h1 className="text-center my-4">Психологи</h1>

      <div className="d-flex justify-content-center mb-4">
        <button className="btn btn-primary me-2" onClick={() => setSelectedTag('')}>
          Все
        </button>
        <button className="btn btn-primary me-2" onClick={() => setSelectedTag('ОКР')}>
          ОКР
        </button>
        <button className="btn btn-primary me-2" onClick={() => setSelectedTag('Панические атаки')}>
          Панические атаки
        </button>
        <button className="btn btn-primary" onClick={() => setSelectedTag('Депрессия')}>
          Депрессия
        </button>
      </div>

      <div className="row">
        {filteredPsychologists.map((psychologist, index) => (
          <div key={index} className="col-md-6">
            <PsychologistCard
              name={psychologist.name}
              tags={psychologist.tags}
              image={psychologist.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
