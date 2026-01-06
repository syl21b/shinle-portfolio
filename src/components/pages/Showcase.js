// Showcase.js - FIXED VERSION
import React from 'react';
import { useParams } from 'react-router-dom';
import { projects } from './projectsData'; // Adjust the import path as needed

function Showcase() {
  const { projectId } = useParams();
  
  // Convert projectId to number if it exists
  const id = projectId ? parseInt(projectId) : null;
  
  // Find the project or use the first one
  const project = id !== null 
    ? projects.find(p => p.id === id) 
    : projects[0]; // Default to first project if no ID provided

  if (!project) {
    return (
      <div className="showcase-page">
        <h1 style={{ textAlign: 'center', padding: '60px 0', color: '#333' }}>
          Project Not Found
        </h1>
        <p style={{ textAlign: 'center' }}>
          The requested project could not be found.
        </p>
      </div>
    );
  }

  return (
    <div className="showcase-page">
      <h1 style={{ textAlign: 'center', padding: '60px 0', color: '#333' }}>
        {project.title}
      </h1>
      
      {/* Your project details rendering logic here */}
      <div className="project-details">
        <p>{project.description}</p>
        {/* Add more project details rendering */}
      </div>
    </div>
  );
}

export default Showcase;