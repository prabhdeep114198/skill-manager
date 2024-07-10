import axios from 'axios';
import React, { useState } from 'react';
import './SearchForm.css';

const SearchForm = ({ setSkills, setHasSearched }) => {
  const [fieldOfWork, setFieldOfWork] = useState('');
  const [experience, setExperience] = useState(0);

  const handleSearch = async (e) => {
    e.preventDefault();
    console.log('Search button clicked');
    console.log('Field of Work:', fieldOfWork);
    console.log('Experience:', experience);

    try {
      const response = await axios.get(`http://localhost:8800/api/skills/fieldOfWorkAndExperience`, {
        params: { fieldOfWork, years: experience }
      });
      console.log('Response:', response.data);
      setSkills(response.data);
      setHasSearched(true);
    } catch (error) {
      console.error('Error during search:', error);
      setHasSearched(true);
    }
  };

  return (
    <form className="form-container" onSubmit={handleSearch}>
      <h2>Search Skills</h2>
      <div className="input-group">
        <label>Field Of Work:</label>
        <input
          type="text"
          value={fieldOfWork}
          onChange={(e) => setFieldOfWork(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Minimum Experience (years):</label>
        <input
          type="number"
          value={experience}
          onChange={(e) => setExperience(Number(e.target.value))}
        />
      </div>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
