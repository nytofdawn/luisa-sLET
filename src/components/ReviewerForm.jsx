import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Book, GraduationCap, Search, BookOpen, Star, Award } from 'lucide-react';

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

  const generalEducationSubjects = [
    {
      id: 'purposive-comm',
      title: 'Purposive Communication in English',
      content: [
        {
          topic: 'Communication Process',
          explanation: 'Understanding the elements of communication: sender, message, channel, receiver, feedback, context, and noise. Essential for effective information exchange.'
        },
        {
          topic: 'Verbal and Non-verbal Communication',
          explanation: 'Mastering spoken language, body language, gestures, and facial expressions to convey messages effectively in various contexts.'
        },
        {
          topic: 'Academic Writing',
          explanation: 'Developing skills in research writing, citation styles (APA, MLA), thesis statements, and structured argumentation for scholarly purposes.'
        },
        {
          topic: 'Intercultural Communication',
          explanation: 'Understanding how culture affects communication patterns, addressing barriers, and developing sensitivity to diverse communication styles.'
        }
      ]
    },
    {
      id: 'filipino-comm',
      title: 'Malayuning Komunikasyon sa Wikang Filipino',
      content: [
        {
          topic: 'Kasaysayan ng Wikang Filipino',
          explanation: 'Pag-aaral sa evolusyon ng Filipino bilang pambansang wika, mula sa Tagalog hanggang sa modernong Filipino na ginagamit ngayon.'
        },
        {
          topic: 'Gramatika at Sintaks',
          explanation: 'Pag-unawa sa tamang pagkakabuo ng pangungusap, paggamit ng mga salitang-ugat, panlapi, at iba pang elemento ng wika.'
        },
        {
          topic: 'Panitikan at Kultura',
          explanation: 'Pagkilala sa mga akdang pampanitikan tulad ng tula, maikling kuwento, at nobela na sumasalamin sa kulturang Pilipino.'
        },
        {
          topic: 'Komunikasyon sa Iba\'t Ibang Sitwasyon',
          explanation: 'Pagsasanay sa paggamit ng Filipino sa formal at informal na komunikasyon, sa negosyo, akademya, at pang-araw-araw na pakikipag-usap.'
        }
      ]
    },
    {
      id: 'science-tech',
      title: 'Science and Technology',
      content: [
        {
          topic: 'Scientific Method',
          explanation: 'Understanding the systematic approach to investigation: observation, hypothesis formation, experimentation, data analysis, and conclusion drawing.'
        },
        {
          topic: 'History of Science',
          explanation: 'Exploring major scientific discoveries and their impact on human civilization, from ancient times to modern technological advances.'
        },
        {
          topic: 'Environmental Science',
          explanation: 'Study of ecosystems, biodiversity, climate change, pollution, and sustainable development practices for environmental conservation.'
        },
        {
          topic: 'Technology and Society',
          explanation: 'Examining how technology shapes society, ethical considerations in scientific research, and the responsible use of technology.'
        }
      ]
    },
    {
      id: 'mathematics',
      title: 'Mathematics',
      content: [
        {
          topic: 'Algebra and Functions',
          explanation: 'Mastering algebraic expressions, equations, inequalities, and various types of functions including linear, quadratic, and exponential.'
        },
        {
          topic: 'Geometry and Trigonometry',
          explanation: 'Understanding geometric properties, measurements, and trigonometric ratios used in solving real-world problems.'
        },
        {
          topic: 'Statistics and Probability',
          explanation: 'Learning data analysis, measures of central tendency, probability distributions, and statistical inference for decision-making.'
        },
        {
          topic: 'Mathematical Reasoning',
          explanation: 'Developing logical thinking, problem-solving strategies, and the ability to construct mathematical arguments and proofs.'
        }
      ]
    },
    {
      id: 'philippine-history',
      title: 'Reading in Philippine History and Society',
      content: [
        {
          topic: 'Pre-colonial Philippines',
          explanation: 'Understanding indigenous societies, trade relations, political systems, and cultural practices before Spanish colonization.'
        },
        {
          topic: 'Colonial Period',
          explanation: 'Analyzing the Spanish and American colonial periods, their impacts on Filipino society, culture, religion, and political structures.'
        },
        {
          topic: 'Philippine Revolution and Independence',
          explanation: 'Studying the struggle for independence, key revolutionary figures, and the formation of the Philippine Republic.'
        },
        {
          topic: 'Contemporary Philippine Issues',
          explanation: 'Examining modern challenges including governance, economic development, social justice, and cultural preservation.'
        }
      ]
    },
    {
      id: 'rizal',
      title: 'The Life and Works of Rizal',
      content: [
        {
          topic: 'Rizal\'s Biography',
          explanation: 'Comprehensive study of José Rizal\'s life from childhood in Calamba to his execution, including his education and travels abroad.'
        },
        {
          topic: 'Noli Me Tangere',
          explanation: 'Analysis of Rizal\'s first novel exposing colonial abuses, its characters, themes, and impact on Filipino nationalism.'
        },
        {
          topic: 'El Filibusterismo',
          explanation: 'Examination of the sequel novel, its darker themes, revolutionary undertones, and call for reform in colonial society.'
        },
        {
          topic: 'Rizal\'s Nationalism',
          explanation: 'Understanding Rizal\'s vision for Philippine independence, his advocacy for peaceful reform, and his influence on the revolution.'
        }
      ]
    },
    {
      id: 'ethics-world',
      title: 'Ethics and The Contemporary World',
      content: [
        {
          topic: 'Moral Philosophy',
          explanation: 'Exploring different ethical theories including utilitarianism, deontology, virtue ethics, and their applications to modern dilemmas.'
        },
        {
          topic: 'Globalization Ethics',
          explanation: 'Examining moral implications of globalization, international relations, human rights, and global justice issues.'
        },
        {
          topic: 'Environmental Ethics',
          explanation: 'Understanding our moral obligations to the environment, sustainability, and future generations in the face of climate change.'
        },
        {
          topic: 'Technology and Ethics',
          explanation: 'Analyzing ethical issues in artificial intelligence, social media, privacy, and the digital divide in contemporary society.'
        }
      ]
    },
    {
      id: 'art-self',
      title: 'Art Appreciation and Understanding the Self',
      content: [
        {
          topic: 'Elements and Principles of Art',
          explanation: 'Learning about line, color, form, balance, rhythm, and other fundamental concepts used in visual arts analysis and creation.'
        },
        {
          topic: 'Art History and Movements',
          explanation: 'Surveying major art periods from classical to contemporary, understanding how art reflects cultural and social changes.'
        },
        {
          topic: 'Self-Concept and Identity',
          explanation: 'Exploring psychological theories of self-development, personality formation, and factors influencing personal identity.'
        },
        {
          topic: 'Art as Self-Expression',
          explanation: 'Understanding how artistic expression serves as a medium for personal reflection, emotional processing, and identity exploration.'
        }
      ]
    }
  ];

  const professionalEducationSubjects = [
    {
      id: 'teaching-profession',
      title: 'The Teaching Profession',
      content: [
        {
          topic: 'Historical Development of Teaching',
          explanation: 'Tracing the evolution of teaching from ancient times to modern professionalization, including key educational reforms and legislation.'
        },
        {
          topic: 'Code of Ethics for Teachers',
          explanation: 'Understanding professional standards, moral obligations, and ethical guidelines that govern teacher conduct and responsibilities.'
        },
        {
          topic: 'Teacher Roles and Responsibilities',
          explanation: 'Examining multiple roles teachers play: instructor, facilitator, counselor, researcher, and community leader in educational settings.'
        },
        {
          topic: 'Professional Development',
          explanation: 'Importance of continuous learning, attending seminars, pursuing advanced degrees, and staying updated with educational trends.'
        }
      ]
    },
    {
      id: 'learner-centered',
      title: 'Facilitating Learner-centered Learning',
      content: [
        {
          topic: 'Constructivist Learning Theory',
          explanation: 'Understanding how learners build knowledge through experience, prior knowledge activation, and active participation in learning processes.'
        },
        {
          topic: 'Multiple Intelligences',
          explanation: 'Applying Gardner\'s theory to recognize diverse learning strengths and design instruction that accommodates different intelligence types.'
        },
        {
          topic: 'Collaborative Learning Strategies',
          explanation: 'Implementing group work, peer learning, and cooperative learning techniques to enhance student engagement and understanding.'
        },
        {
          topic: 'Student-Centered Assessment',
          explanation: 'Developing authentic assessments, portfolios, and self-evaluation tools that focus on student growth and learning outcomes.'
        }
      ]
    },
    {
      id: 'special-inclusive',
      title: 'Foundations of Special and Inclusive Education',
      content: [
        {
          topic: 'Inclusive Education Philosophy',
          explanation: 'Understanding the principles of inclusion, ensuring all students regardless of abilities have access to quality education in regular classrooms.'
        },
        {
          topic: 'Types of Disabilities and Exceptionalities',
          explanation: 'Learning about learning disabilities, physical disabilities, intellectual disabilities, giftedness, and their educational implications.'
        },
        {
          topic: 'Individualized Education Programs (IEP)',
          explanation: 'Developing personalized learning plans, accommodations, and modifications to meet diverse student needs and abilities.'
        },
        {
          topic: 'Assistive Technologies',
          explanation: 'Utilizing technological tools and devices that support learning for students with special needs and enhance accessibility.'
        }
      ]
    },
    {
      id: 'new-literacies',
      title: 'Building & Enhancing New Literacies',
      content: [
        {
          topic: 'Digital Literacy',
          explanation: 'Developing skills in using digital tools, evaluating online information, and understanding digital citizenship and online safety.'
        },
        {
          topic: 'Media Literacy',
          explanation: 'Teaching critical analysis of media messages, understanding bias, propaganda, and the impact of media on society and individuals.'
        },
        {
          topic: 'Information Literacy',
          explanation: 'Learning to locate, evaluate, and use information effectively from various sources for research and decision-making purposes.'
        },
        {
          topic: '21st Century Skills',
          explanation: 'Fostering critical thinking, creativity, collaboration, and communication skills essential for success in modern society.'
        }
      ]
    },
    {
      id: 'tech-teaching',
      title: 'Technology for Teaching & Learning',
      content: [
        {
          topic: 'Educational Technology Integration',
          explanation: 'Using TPACK model to effectively integrate technology with pedagogy and content knowledge for enhanced learning experiences.'
        },
        {
          topic: 'Learning Management Systems',
          explanation: 'Utilizing platforms like Google Classroom, Moodle, and Canvas to organize content, facilitate communication, and track student progress.'
        },
        {
          topic: 'Multimedia in Education',
          explanation: 'Creating and using videos, presentations, podcasts, and interactive media to engage students and support diverse learning styles.'
        },
        {
          topic: 'Online and Blended Learning',
          explanation: 'Designing effective distance learning experiences, managing virtual classrooms, and combining online and face-to-face instruction.'
        }
      ]
    },
    {
      id: 'school-community',
      title: 'Teacher & School Community/Culture',
      content: [
        {
          topic: 'School Organizational Culture',
          explanation: 'Understanding how school values, traditions, and practices influence teaching effectiveness and student achievement.'
        },
        {
          topic: 'Parent and Community Engagement',
          explanation: 'Building partnerships with families and community members to support student learning and school improvement initiatives.'
        },
        {
          topic: 'Professional Learning Communities',
          explanation: 'Collaborating with colleagues to share best practices, analyze student data, and continuously improve instructional methods.'
        },
        {
          topic: 'Cultural Responsiveness',
          explanation: 'Adapting teaching practices to reflect and respect students\' cultural backgrounds and community values in the classroom.'
        }
      ]
    },
    {
      id: 'child-adolescent',
      title: 'Child & Adolescent Learners',
      content: [
        {
          topic: 'Developmental Psychology',
          explanation: 'Understanding cognitive, social, emotional, and physical development stages from childhood through adolescence and their educational implications.'
        },
        {
          topic: 'Learning Theories',
          explanation: 'Applying Piaget\'s cognitive development, Vygotsky\'s social learning, and other theories to understand how children learn and develop.'
        },
        {
          topic: 'Motivation and Engagement',
          explanation: 'Identifying factors that motivate young learners, addressing diverse needs, and creating engaging learning environments.'
        },
        {
          topic: 'Behavioral Management',
          explanation: 'Implementing positive discipline strategies, classroom management techniques, and supporting students\' social-emotional development.'
        }
      ]
    },
    {
      id: 'curriculum-methods',
      title: 'Curriculum, Methods, Assessment',
      content: [
        {
          topic: 'Curriculum Development',
          explanation: 'Understanding curriculum design principles, alignment with standards, and adaptation to local contexts and student needs.'
        },
        {
          topic: 'Teaching Methodologies',
          explanation: 'Mastering various instructional strategies including direct instruction, inquiry-based learning, project-based learning, and differentiated instruction.'
        },
        {
          topic: 'Assessment and Evaluation',
          explanation: 'Designing formative and summative assessments, using rubrics, providing feedback, and using assessment data to improve instruction.'
        },
        {
          topic: 'Lesson Planning',
          explanation: 'Creating detailed lesson plans with clear objectives, engaging activities, appropriate resources, and alignment with curriculum standards.'
        }
      ]
    },
    {
      id: 'action-research',
      title: 'Action Research, Field Study, Internship',
      content: [
        {
          topic: 'Action Research Methodology',
          explanation: 'Learning systematic inquiry methods to investigate classroom problems, implement solutions, and evaluate results for continuous improvement.'
        },
        {
          topic: 'Field Study Observations',
          explanation: 'Conducting structured classroom observations, analyzing teaching practices, and connecting theory to real-world educational contexts.'
        },
        {
          topic: 'Student Teaching Internship',
          explanation: 'Gaining hands-on teaching experience under supervision, applying pedagogical knowledge, and developing professional teaching skills.'
        },
        {
          topic: 'Reflective Practice',
          explanation: 'Developing skills in self-reflection, professional growth planning, and continuous improvement through critical analysis of teaching experiences.'
        }
      ]
    }
  ];

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