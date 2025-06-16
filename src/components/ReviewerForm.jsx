import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Book, GraduationCap, Search, BookOpen, Star, Award } from 'lucide-react';
import generalEducationSubjects from './subjects/generaled';
import professionalEducationSubjects from './subjects/profed';

const ReviewerFORM = () => {
  const [expandedSections, setExpandedSections] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('general');

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const filteredSubjects = (subjects) => {
    if (!searchTerm) return subjects;
    return subjects.filter(subject =>
      subject.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      subject.content.some(item =>
        item.topic.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.explanation.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  const SubjectCard = ({ subject }) => {
    const isExpanded = expandedSections[subject.id];
    
    return (
      <div className="card border-0 shadow-lg mb-4 overflow-hidden" style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.98) 100%)',
        backdropFilter: 'blur(10px)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: isExpanded ? 'translateY(-2px)' : 'translateY(0)',
        boxShadow: isExpanded ? '0 20px 40px rgba(0,0,0,0.1)' : '0 10px 30px rgba(0,0,0,0.08)'
      }}>
        <div
          className="card-header bg-transparent border-0 p-4 cursor-pointer"
          onClick={() => toggleSection(subject.id)}
          style={{
            background: isExpanded 
              ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
              : 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            transition: 'all 0.4s ease'
          }}
        >
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <div 
                className="me-3 p-2 rounded-circle"
                style={{
                  background: 'rgba(255,255,255,0.2)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <BookOpen size={24} color="white" />
              </div>
              <h5 className="mb-0 text-white fw-bold">{subject.title}</h5>
            </div>
            <div 
              className="p-2 rounded-circle"
              style={{
                background: 'rgba(255,255,255,0.2)',
                transition: 'transform 0.3s ease',
                transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)'
              }}
            >
              {isExpanded ? (
                <ChevronDown size={20} color="white" />
              ) : (
                <ChevronRight size={20} color="white" />
              )}
            </div>
          </div>
        </div>
        
        {isExpanded && (
          <div 
            className="card-body p-4"
            style={{
              animation: 'slideDown 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            <div className="row g-3">
              {subject.content.map((item, index) => (
                <div key={index} className="col-12">
                  <div 
                    className="p-4 rounded-4 border-0"
                    style={{
                      background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)',
                      borderLeft: '4px solid #6366f1',
                      transition: 'all 0.3s ease',
                      animation: `slideInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s both`
                    }}
                  >
                    <div className="d-flex align-items-start">
                      <div 
                        className="me-3 p-2 rounded-circle flex-shrink-0"
                        style={{
                          background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
                          width: '40px',
                          height: '40px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <Star size={18} color="white" />
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="fw-bold text-primary mb-2">{item.topic}</h6>
                        <p className="text-muted mb-0 lh-base">{item.explanation}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <style>
        {`
          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes slideInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
          }
          
          .hero-pattern {
            background-image: 
              radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.2) 0%, transparent 50%);
          }
          
          .glass-effect {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
          }
          
          .search-input {
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(10px);
            border: 2px solid rgba(255, 255, 255, 0.3);
            color: white;
            transition: all 0.3s ease;
          }
          
          .search-input::placeholder {
            color: rgba(255, 255, 255, 0.7);
          }
          
          .search-input:focus {
            background: rgba(255, 255, 255, 0.25);
            border-color: rgba(255, 255, 255, 0.5);
            box-shadow: 0 0 30px rgba(255, 255, 255, 0.3);
            color: white;
          }
          
          .tab-button {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border: 2px solid rgba(255, 255, 255, 0.2);
            color: rgba(255, 255, 255, 0.8);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .tab-button.active {
            background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
            border-color: rgba(255, 255, 255, 0.8);
            color: #1e293b;
            transform: translateY(-2px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          }
          
          .tab-button:hover:not(.active) {
            background: rgba(255, 255, 255, 0.2);
            border-color: rgba(255, 255, 255, 0.4);
            transform: translateY(-1px);
          }
          
          .floating-icon {
            animation: float 6s ease-in-out infinite;
          }
        `}
      </style>
      
      <div 
        className="min-vh-100 hero-pattern"
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)'
        }}
      >
        <div className="container-fluid px-3 px-md-5">
          {/* Hero Header */}
          <div className="text-center py-5">
            <div className="mb-4">
              <div 
                className="d-inline-flex align-items-center justify-content-center mb-3 floating-icon"
                style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                  borderRadius: '50%',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                }}
              >
                <Award size={40} className="text-primary" />
              </div>
            </div>
            <h1 
              className="display-4 fw-bold text-white mb-3"
              style={{
                textShadow: '2px 4px 20px rgba(0,0,0,0.3)',
                background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Education Reviewer
            </h1>
            <p 
              className="lead text-white-50 mx-auto"
              style={{ 
                maxWidth: '600px',
                textShadow: '1px 2px 10px rgba(0,0,0,0.2)'
              }}
            >
              Master your studies with our comprehensive guide for General Education and Professional Education
            </p>
          </div>

          {/* Search Bar */}
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 col-xl-6">
              <div className="position-relative">
                <Search 
                  className="position-absolute text-white-50" 
                  size={20}
                  style={{
                    left: '20px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 10
                  }}
                />
                <input
                  type="text"
                  placeholder="Search subjects, topics, or concepts..."
                  className="form-control form-control-lg ps-5 pe-4 py-3 rounded-pill search-input"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{ fontSize: '1.1rem' }}
                />
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 col-xl-6">
              <div className="d-flex gap-3">
                <button
                  className={`btn flex-fill py-3 px-4 rounded-pill fw-semibold tab-button ${
                    activeTab === 'general' ? 'active' : ''
                  }`}
                  onClick={() => setActiveTab('general')}
                >
                  <Book size={20} className="me-2" />
                  General Education
                </button>
                <button
                  className={`btn flex-fill py-3 px-4 rounded-pill fw-semibold tab-button ${
                    activeTab === 'professional' ? 'active' : ''
                  }`}
                  onClick={() => setActiveTab('professional')}
                >
                  <GraduationCap size={20} className="me-2" />
                  Professional Education
                </button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="row justify-content-center">
            <div className="col-12 col-xl-10">
              {activeTab === 'general' && (
                <div>
                  <div className="text-center mb-5">
                    <h2 className="h3 fw-bold text-white mb-2">
                      <Book size={32} className="me-3 text-white-50" />
                      General Education Subjects
                    </h2>
                    <p className="text-white-50">
                      Building strong foundations across diverse academic disciplines
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      {filteredSubjects(generalEducationSubjects).map((subject) => (
                        <SubjectCard key={subject.id} subject={subject} />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'professional' && (
                <div>
                  <div className="text-center mb-5">
                    <h2 className="h3 fw-bold text-white mb-2">
                      <GraduationCap size={32} className="me-3 text-white-50" />
                      Professional Education Subjects
                    </h2>
                    <p className="text-white-50">
                      Developing expertise in teaching methods and educational psychology
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      {filteredSubjects(professionalEducationSubjects).map((subject) => (
                        <SubjectCard key={subject.id} subject={subject} />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* No Results */}
          {searchTerm && filteredSubjects(activeTab === 'general' ? generalEducationSubjects : professionalEducationSubjects).length === 0 && (
            <div className="text-center py-5">
              <div 
                className="d-inline-flex align-items-center justify-content-center mb-4 glass-effect rounded-circle"
                style={{ width: '100px', height: '100px' }}
              >
                <Search size={40} className="text-white-50" />
              </div>
              <h3 className="h4 fw-bold text-white mb-3">No results found</h3>
              <p className="text-white-50 mb-4">
                We couldn't find any subjects or topics matching your search.
              </p>
              <button 
                className="btn btn-outline-light rounded-pill px-4 py-2"
                onClick={() => setSearchTerm('')}
              >
                Clear Search
              </button>
            </div>
          )}

          {/* Footer */}
          <div className="text-center py-5 mt-5">
            <div 
              className="d-inline-block glass-effect rounded-pill px-4 py-3"
            >
              <p className="mb-0 text-white-50 fw-medium">
                <Star size={16} className="me-2" />
                Created by Daniel De Guzman
              </p>
            <button className='text-black-80 fw-large d-inline-block glass-effect rounded-pill px-4 py-3' onClick={()=>(window.location.href='/form')}>
                →Take Test Exercise
            </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewerFORM;