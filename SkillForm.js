import axios from 'axios';
import React, { useState } from 'react';

const SkillForm = ({ fetchSkills }) => {
  const [name, setName] = useState('');
  const [experience, setExperience] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:8800/api/skills', { name, experience });
    fetchSkills();
    setName('');
    setExperience(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Skill</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Experience (years):</label>
        <input
          type="number"
          value={experience}
          onChange={(e) => setExperience(Number(e.target.value))}
          required
        />
      </div>
      <button type="submit">Add Skill</button>
    </form>
  );
};

export default SkillForm;
