import React, { useState } from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
import SkillList from './components/SkillList';

const App = () => {
  const [skills, setSkills] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  return (
    <div className="app-container">
      <SearchForm setSkills={setSkills} setHasSearched={setHasSearched} />
      <SkillList skills={skills} hasSearched={hasSearched} />
    </div>
  );
};

export default App;
