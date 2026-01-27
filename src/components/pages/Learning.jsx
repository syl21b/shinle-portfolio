// Learning.jsx - Compact Dashboard with single-row controls
import React, { useState, useMemo } from 'react';
import { Search, Filter, PlayCircle, BookOpen, Code, Database, Brain, ExternalLink, Grid3x3, ChevronDown, X } from 'lucide-react';

const Learning = () => {
  // All resources with detailed metadata
  const allResources = [
    {
      id: 1,
      title: "Build AI Chatbots: Full Guide (2025)",
      category: "AI & ML",
      subcategory: "Chatbots",
      instructor: "Bo Sar",
      duration: "2h 15m",
      level: "Intermediate",
      year: 2025,
      description: "Complete 2025 guide covering AI landscape updates, LLM comparisons, and toolkit overviews.",
      videoId: "Y_DicBz78Yo",
      tags: ["AI", "Chatbot", "LLM", "Agents", "Automation"],
      links: [
        { type: "youtube", url: "https://www.youtube.com/watch?v=Y_DicBz78Yo" },
        { type: "course", url: "https://aif.academy/" }
      ]
    },
    {
      id: 2,
      title: "Multimodal Data Analysis with LLMs",
      category: "AI & ML",
      subcategory: "LLMs",
      instructor: "Dr. Immanuel Trummer",
      duration: "1h 30m",
      level: "Advanced",
      year: 2024,
      description: "Leverage LLMs for sophisticated text, image, and audio analysis with Python.",
      videoId: "3-4qAkFRpAk",
      tags: ["LLM", "Multimodal", "Python", "NLP", "Analysis"],
      links: [
        { type: "youtube", url: "https://www.youtube.com/watch?v=3-4qAkFRpAk" },
        { type: "article", url: "https://www.freecodecamp.org/news/master-multimodal-data-analysis-with-llms-and-python/" }
      ]
    },
    {
      id: 3,
      title: "Data Analysis with Python: Zero to Pandas",
      category: "Data Science",
      subcategory: "Foundations",
      instructor: "freeCodeCamp",
      duration: "6h",
      level: "Beginner",
      year: 2023,
      description: "Complete beginner-friendly introduction to data analysis with Python and Pandas.",
      videoId: "EsDFiZPljYo",
      tags: ["Python", "Pandas", "Beginner", "Data Analysis", "Tutorial"],
      links: [
        { type: "youtube", url: "https://www.youtube.com/watch?v=EsDFiZPljYo" },
        { type: "certificate", url: "https://zerotopandas.com" }
      ]
    },
    {
      id: 4,
      title: "Machine Learning with TensorFlow",
      category: "AI & ML",
      subcategory: "ML",
      instructor: "freeCodeCamp",
      duration: "4h",
      level: "Beginner",
      year: 2023,
      description: "Beginner-friendly ML course using TensorFlow with practical implementations.",
      videoId: "i_LwzRVP7bg",
      tags: ["ML", "TensorFlow", "Beginner", "Deep Learning"],
      links: [
        { type: "youtube", url: "https://www.youtube.com/watch?v=i_LwzRVP7bg" }
      ]
    },
    {
      id: 5,
      title: "PyTorch Beginner Tutorial",
      category: "AI & ML",
      subcategory: "ML",
      instructor: "freeCodeCamp",
      duration: "3h",
      level: "Beginner",
      year: 2023,
      description: "Coding-first PyTorch course covering tensors, gradients, and linear regression.",
      videoId: "vo_fUOk-IKk",
      tags: ["PyTorch", "ML", "Beginner", "Deep Learning"],
      links: [
        { type: "youtube", url: "https://www.youtube.com/watch?v=vo_fUOk-IKk" }
      ]
    },
    {
      id: 6,
      title: "Data Engineering with DataWithBaraa",
      category: "Data Engineering",
      subcategory: "Tutorials",
      instructor: "Baraa Khatib Salkini",
      duration: "Multiple",
      level: "All Levels",
      year: 2024,
      description: "Hand-sketched data engineering tutorials from 15+ years industry experience.",
      videoId: "-7s3uFl3XnE",
      tags: ["Data Engineering", "Tutorials", "Real-world", "PostgreSQL"],
      links: [
        { type: "youtube", url: "https://www.youtube.com/@DataWithBaraa/videos" }
      ]
    },
    {
      id: 7,
      title: "Learn Data Science: Full Course",
      category: "Data Science",
      subcategory: "Comprehensive",
      instructor: "freeCodeCamp",
      duration: "8h",
      level: "Beginner",
      year: 2023,
      description: "Complete data science fundamentals covering principles, practices, and tools.",
      videoId: "ua-CiDNNj30",
      tags: ["Data Science", "Comprehensive", "Beginner", "Statistics"],
      links: [
        { type: "youtube", url: "https://www.youtube.com/watch?v=ua-CiDNNj30" }
      ]
    }
  ];

  // State for filtering
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showLevelDropdown, setShowLevelDropdown] = useState(false);

  // Extract unique categories and levels
  const categories = ['All', ...new Set(allResources.map(r => r.category))];
  const levels = ['All', ...new Set(allResources.map(r => r.level))];

  // Filter resources
  const filteredResources = useMemo(() => {
    return allResources.filter(resource => {
      const matchesSearch = searchTerm === '' || 
        resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
        resource.instructor.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'All' || resource.category === selectedCategory;
      const matchesLevel = selectedLevel === 'All' || resource.level === selectedLevel;
      
      return matchesSearch && matchesCategory && matchesLevel;
    });
  }, [searchTerm, selectedCategory, selectedLevel]);

  // Get category icon
  const getCategoryIcon = (category) => {
    switch(category) {
      case 'AI & ML': return <Brain size={16} />;
      case 'Data Science': return <BookOpen size={16} />;
      case 'Data Engineering': return <Database size={16} />;
      default: return <Grid3x3 size={16} />;
    }
  };

  // Reset all filters
  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    setSelectedLevel('All');
  };

  // Check if any filter is active
  const hasActiveFilters = searchTerm || selectedCategory !== 'All' || selectedLevel !== 'All';

  return (
    <div className="learning-dashboard-wrapper">
      {/* Header - Compact Version */}
      <div className="compact-header">
        <div className="header-left">
          <h1 className="dashboard-title">
            <BookOpen size={24} />
            Learning Hub
          </h1>
          <p className="dashboard-subtitle">{allResources.length} curated resources</p>
        </div>
        
        <div className="header-right">
          {/* Search Box */}
          <div className="search-box">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Search resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                className="clear-search-btn"
                aria-label="Clear search"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Compact Stats */}
          <div className="compact-stats">
            <div className="stat-item">
              <span className="stat-number">{filteredResources.length}</span>
              <span className="stat-label">Showing</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">{allResources.length}</span>
              <span className="stat-label">Total</span>
            </div>
          </div>

          {/* Category Filter */}
          <div className="dropdown-filter">
            <button 
              className={`filter-btn ${selectedCategory !== 'All' ? 'active' : ''}`}
              onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
            >
              {getCategoryIcon(selectedCategory === 'All' ? 'Category' : selectedCategory)}
              <span className="filter-text">
                {selectedCategory === 'All' ? 'Category' : selectedCategory}
              </span>
              <ChevronDown size={16} />
            </button>
            
            {showCategoryDropdown && (
              <div className="dropdown-menu">
                {categories.map(category => (
                  <button
                    key={category}
                    className={`dropdown-item ${selectedCategory === category ? 'selected' : ''}`}
                    onClick={() => {
                      setSelectedCategory(category);
                      setShowCategoryDropdown(false);
                    }}
                  >
                    {getCategoryIcon(category)}
                    {category}
                    {category !== 'All' && (
                      <span className="item-count">
                        ({allResources.filter(r => r.category === category).length})
                      </span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Level Filter */}
          <div className="dropdown-filter">
            <button 
              className={`filter-btn ${selectedLevel !== 'All' ? 'active' : ''}`}
              onClick={() => setShowLevelDropdown(!showLevelDropdown)}
            >
              <span className="filter-text">
                {selectedLevel === 'All' ? 'Level' : selectedLevel}
              </span>
              <ChevronDown size={16} />
            </button>
            
            {showLevelDropdown && (
              <div className="dropdown-menu">
                {levels.map(level => (
                  <button
                    key={level}
                    className={`dropdown-item ${selectedLevel === level ? 'selected' : ''}`}
                    onClick={() => {
                      setSelectedLevel(level);
                      setShowLevelDropdown(false);
                    }}
                  >
                    <span className={`level-indicator level-${level.toLowerCase().replace(' ', '-')}`}></span>
                    {level}
                    {level !== 'All' && (
                      <span className="item-count">
                        ({allResources.filter(r => r.level === level).length})
                      </span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Reset Button (only when filters active) */}
          {hasActiveFilters && (
            <button className="reset-btn" onClick={resetFilters}>
              <X size={16} />
              Reset
            </button>
          )}
        </div>
      </div>

      {/* Quick Category Pills - Compact Navigation */}
      <div className="category-pills">
        {categories.slice(1).map(category => (
          <button
            key={category}
            className={`category-pill ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {getCategoryIcon(category)}
            {category}
            <span className="pill-count">
              {allResources.filter(r => r.category === category).length}
            </span>
          </button>
        ))}
      </div>

      {/* Main Content - Resources Grid */}
      <div className="main-content">
        {filteredResources.length === 0 ? (
          <div className="empty-state">
            <Search size={48} className="empty-icon" />
            <h3>No resources found</h3>
            <p>Try adjusting your search or filters</p>
            <button className="reset-filters" onClick={resetFilters}>
              Reset all filters
            </button>
          </div>
        ) : (
          <>
            {/* Results Summary */}
            <div className="results-summary">
              <span className="results-count">
                Showing {filteredResources.length} of {allResources.length} resources
              </span>
              {hasActiveFilters && (
                <button className="clear-filters-btn" onClick={resetFilters}>
                  <X size={14} />
                  Clear filters
                </button>
              )}
            </div>

            {/* Resources Grid */}
            <div className="resources-grid compact-grid">
              {filteredResources.map(resource => (
                <div key={resource.id} className="resource-card compact-card">
                  {/* Video Thumbnail */}
                  <div className="card-thumbnail">
                    <img 
                      src={`https://img.youtube.com/vi/${resource.videoId}/mqdefault.jpg`} 
                      alt={`${resource.title} thumbnail`}
                    />
                    <div className="play-overlay">
                      <PlayCircle size={20} />
                    </div>
                    <div className="duration-badge">
                      {resource.duration}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="card-content">
                    <div className="card-header">
                      <div className="card-category">
                        {getCategoryIcon(resource.category)}
                        <span>{resource.category}</span>
                      </div>
                      <div className={`card-level level-${resource.level.toLowerCase().replace(' ', '-')}`}>
                        {resource.level}
                      </div>
                    </div>

                    <h3 className="card-title">{resource.title}</h3>
                    <p className="card-instructor">By {resource.instructor}</p>
                    <p className="card-description">{resource.description}</p>

                    {/* Tags */}
                    <div className="card-tags">
                      {resource.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                      {resource.tags.length > 2 && (
                        <span className="tag-more">+{resource.tags.length - 2}</span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="card-actions">
                      <a
                        href={`https://www.youtube.com/watch?v=${resource.videoId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="watch-btn"
                      >
                        <PlayCircle size={16} />
                        Watch
                      </a>
                      {resource.links.slice(1).map((link, idx) => (
                        <a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="extra-link"
                          title={`Additional resource: ${link.type}`}
                        >
                          <ExternalLink size={14} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Learning;