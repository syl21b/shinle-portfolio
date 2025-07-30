// Showcase.js
import React from 'react';
// Assuming Showcase is the component that holds your project viewer logic
import Showcase from "./Showcase.js";

function ShowcasePage() {
  return (
    
    <div className="showcase-page">
      {/* You can add a header or any other content specific to the showcase page */}
      <h1 style={{ textAlign: 'center', padding: '60px 0', color: '#333' }}>
        My Project Showcase
      </h1>
      
      {/* Render your Showcase component here */}
      <Showcase /> 
      
      {/* Or any other content you want on this dedicated page */}
    </div>
  );
}

export default ShowcasePage;