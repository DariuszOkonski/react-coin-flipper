import React from 'react';

const About = () => {
  return (
    <div className="card" style={{ width: '100%' }}>
      <div className="card-header bg-secondary text-light">
        <h4 className="h4 mb-0">About</h4>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item bg-primary text-light">Version: 1.0.0</li>
        <li className="list-group-item bg-primary text-light">Author: Dariusz Okonski</li>
        <li className="list-group-item bg-primary text-light">Year: 2019</li>
      </ul>
    </div>
  );
}

export default About;