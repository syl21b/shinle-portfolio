import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from './projectsData';

function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const projectId = parseInt(id);
  
  const project = projects.find(p => p.id === projectId);
  
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <button 
            onClick={() => navigate('/showcase')}
            className="btn btn-primary"
          >
            Back to Showcase
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={() => navigate('/showcase')}
          className="mb-6 btn btn-outline"
        >
          ← Back to All Projects
        </button>
        
        {/* Your project detail content here */}
        <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
        <div className="text-gray-600 mb-6">{project.date}</div>
        <p className="text-lg mb-8">{project.description}</p>
        
        {/* Add more project details as needed */}
      </div>
    </div>
  );
}

export default ProjectDetail;