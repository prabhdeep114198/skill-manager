import React from 'react';
import './SkillList.css';

const SkillList = ({ skills, hasSearched }) => {
  if (!hasSearched) {
    return null;
  }

  return (
    <div className="skill-list-container">
      <h2>Search Results</h2>
      {skills.length === 0 ? (
        <p>No skills found</p>
      ) : (
        <ul>
          {skills.map(skill => (
            <li key={skill.id}>
              
              <span><strong>Name:</strong> {skill.name}</span><br />
              <span><strong>Field of Work:</strong> {skill.fieldOfWork}</span><br />
              <span><strong>Skills:</strong> {skill.skills}</span><br />
              <span><strong>Email:</strong> {skill.email}</span><br />
              <span><strong>Experience:</strong> {skill.experience} years</span><br />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SkillList;
