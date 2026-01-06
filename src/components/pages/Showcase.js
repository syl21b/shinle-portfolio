import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from './projectsData';

function Showcase() {
  return (
    <div className="projects-grid">
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          {/* Add link to project detail */}
          <Link 
            to={`/showcase/${project.id}`}
            className="btn btn-primary mt-4"
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Showcase;