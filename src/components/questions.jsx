const questions = [
  // GENERAL EDUCATION - Purposive Communication in English
  {
    question: 'Which of the following is NOT a barrier to effective communication?',
    choices: ["Physical noise", "Semantic noise", "Psychological noise", "Active listening"],
    answer: 3,
  },
  {
    question: 'What type of communication involves the use of gestures and body language?',
    choices: ["Verbal communication", "Non-verbal communication", "Written communication", "Digital communication"],
    answer: 1,
  },
  {
    question: 'What is the main purpose of purposive communication?',
    choices: ["Entertainment", "Achieving specific goals", "Casual conversation", "Academic discussion"],
    answer: 1,
  },
  {
    question: 'Which element is essential in the communication process?',
    choices: ["Feedback", "Technology", "Money", "Time"],
    answer: 0,
  },
  {
    question: 'What does "context" mean in communication?',
    choices: ["The message content", "The surrounding circumstances", "The speaker\'s voice", "The written text"],
    answer: 1,
  },

  // GENERAL EDUCATION - Malayuning Komunikasyon sa Wikang Filipino
  {
    question: 'Ano ang pangunahing layunin ng Komisyon sa Wikang Filipino?',
    choices: ["Pagpaplano ng wika", "Pagtataguyod ng Filipino", "Pagsasalin ng mga aklat", "Pagtuturo ng Ingles"],
    answer: 1,
  },
  {
    question: 'Alin sa mga sumusunod ang hindi kabilang sa mga antas ng wika?',
    choices: ["Pormal", "Di-pormal", "Lalawiganin", "Pandaigdig"],
    answer: 3,
  },
  {
    question: 'Ano ang tawag sa pagkakaiba-iba ng wika sa iba\'t ibang lugar?',
    choices: ["Dayalek", "Register", "Idyolek", "Sosyolek"],
    answer: 0,
  },
  {
    question: 'Kailan ginawang pambansang wika ang Filipino?',
    choices: ["1935", "1973", "1987", "1946"],
    answer: 2,
  },
  {
    question: 'Ano ang ibig sabihin ng "barayti ng wika"?',
    choices: ["Mga uri ng wika", "Mga salitang hiram", "Mga tunog ng wika", "Mga titik ng alpabeto"],
    answer: 0,
  },

  // GENERAL EDUCATION - Science and Technology
  {
    question: 'What is the basic unit of heredity?',
    choices: ["Cell", "Gene", "Chromosome", "DNA"],
    answer: 1,
  },
  {
    question: 'Which of the following is a renewable energy source?',
    choices: ["Coal", "Natural gas", "Solar energy", "Nuclear energy"],
    answer: 2,
  },
  {
    question: 'What is the chemical symbol for gold?',
    choices: ["Go", "Gd", "Au", "Ag"],
    answer: 2,
  },
  {
    question: 'Which organ in the human body produces insulin?',
    choices: ["Liver", "Kidney", "Pancreas", "Heart"],
    answer: 2,
  },
  {
    question: 'What is the speed of light in vacuum?',
    choices: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"],
    answer: 0,
  },
  {
    question: 'Which planet is closest to the Sun?',
    choices: ["Venus", "Earth", "Mercury", "Mars"],
    answer: 2,
  },
  {
    question: 'What is the main component of Earth\'s atmosphere?',
    choices: ["Oxygen", "Carbon dioxide", "Nitrogen", "Argon"],
    answer: 2,
  },
  {
    question: 'Which scientist proposed the theory of evolution?',
    choices: ["Albert Einstein", "Charles Darwin", "Isaac Newton", "Gregor Mendel"],
    answer: 1,
  },
  {
    question: 'What is the pH of pure water?',
    choices: ["6", "7", "8", "9"],
    answer: 1,
  },
  {
    question: 'Which type of blood cell fights infection?',
    choices: ["Red blood cells", "White blood cells", "Platelets", "Plasma"],
    answer: 1,
  },

  // GENERAL EDUCATION - Mathematics
  {
    question: 'What is the value of x in the equation 2x + 5 = 15?',
    choices: ["3", "5", "7", "10"],
    answer: 1,
  },
  {
    question: 'What is the area of a triangle with base 8 cm and height 6 cm?',
    choices: ["24 cm²", "48 cm²", "14 cm²", "32 cm²"],
    answer: 0,
  },
  {
    question: 'What is 15% of 200?',
    choices: ["25", "30", "35", "40"],
    answer: 1,
  },
  {
    question: 'What is the circumference of a circle with radius 7 cm? (Use π = 22/7)',
    choices: ["22 cm", "44 cm", "66 cm", "88 cm"],
    answer: 1,
  },
  {
    question: 'If a = 3 and b = 4, what is the value of a² + b²?',
    choices: ["7", "12", "25", "49"],
    answer: 2,
  },
  {
    question: 'What is the greatest common factor of 12 and 18?',
    choices: ["2", "3", "6", "9"],
    answer: 2,
  },
  {
    question: 'What is the slope of a line passing through points (2,3) and (4,7)?',
    choices: ["1", "2", "3", "4"],
    answer: 1,
  },
  {
    question: 'What is 2³ × 2²?',
    choices: ["16", "32", "64", "128"],
    answer: 1,
  },
  {
    question: 'What is the median of the numbers: 3, 7, 2, 9, 5?',
    choices: ["3", "5", "7", "9"],
    answer: 1,
  },
  {
    question: 'What is the volume of a cube with side length 4 cm?',
    choices: ["16 cm³", "32 cm³", "48 cm³", "64 cm³"],
    answer: 3,
  },

  // GENERAL EDUCATION - Reading in Philippine History and Society
  {
    question: 'Who was the first President of the Philippines?',
    choices: ["Jose Rizal", "Andres Bonifacio", "Emilio Aguinaldo", "Manuel Quezon"],
    answer: 2,
  },
  {
    question: 'What was the name of the secret society founded by Andres Bonifacio?',
    choices: ["La Liga Filipina", "Katipunan", "Propaganda Movement", "Ilustrados"],
    answer: 1,
  },
  {
    question: 'When did the Philippines gain independence from Spain?',
    choices: ["June 12, 1896", "June 12, 1898", "July 4, 1946", "August 13, 1898"],
    answer: 1,
  },
  {
    question: 'Who led the longest revolt against Spanish colonial rule?',
    choices: ["Diego Silang", "Francisco Dagohoy", "Gabriela Silang", "Tamblot"],
    answer: 1,
  },
  {
    question: 'What was the first book printed in the Philippines?',
    choices: ["Noli Me Tangere", "Doctrina Christiana", "Florante at Laura", "Ibong Adarna"],
    answer: 1,
  },
  {
    question: 'Who was known as the "Great Plebeian"?',
    choices: ["Jose Rizal", "Andres Bonifacio", "Apolinario Mabini", "Antonio Luna"],
    answer: 1,
  },
  {
    question: 'What treaty ended the Spanish-American War?',
    choices: ["Treaty of Versailles", "Treaty of Paris", "Treaty of Madrid", "Treaty of Biak-na-Bato"],
    answer: 1,
  },
  {
    question: 'Who was the first Filipino bishop?',
    choices: ["Fr. Gregorio Aglipay", "Fr. Mariano Gomez", "Fr. Jose Burgos", "Bishop Gregorio Aglipay"],
    answer: 0,
  },
  {
    question: 'What was the pen name of Marcelo H. del Pilar?',
    choices: ["Plaridel", "Laong Laan", "Dimasalang", "Tikbalang"],
    answer: 0,
  },
  {
    question: 'When was the Commonwealth government established?',
    choices: ["1934", "1935", "1936", "1937"],
    answer: 1,
  },

  // GENERAL EDUCATION - The Life and Works of Rizal
  {
    question: 'What is the title of Jose Rizal\'s first novel?',
    choices: ["El Filibusterismo", "Noli Me Tangere", "Mi Ultimo Adios", "Sa Mga Kababayang Dalaga ng Malolos"],
    answer: 1,
  },
  {
    question: 'Where was Jose Rizal executed?',
    choices: ["Luneta Park", "Fort Santiago", "Bagumbayan", "Intramuros"],
    answer: 2,
  },
  {
    question: 'What was Rizal\'s profession?',
    choices: ["Lawyer", "Doctor", "Engineer", "Teacher"],
    answer: 1,
  },
  {
    question: 'In which country did Rizal write most of his novels?',
    choices: ["Spain", "Germany", "France", "Belgium"],
    answer: 1,
  },
  {
    question: 'What was the name of Rizal\'s sweetheart in Dapitan?',
    choices: ["Leonor Rivera", "Segunda Katigbak", "Josephine Bracken", "Nellie Boustead"],
    answer: 2,
  },
  {
    question: 'What does "Noli Me Tangere" mean?',
    choices: ["Touch me not", "Don\'t touch me", "Do not touch me", "All of the above"],
    answer: 3,
  },
  {
    question: 'How many languages did Rizal know?',
    choices: ["15", "20", "22", "25"],
    answer: 2,
  },
  {
    question: 'What organization did Rizal found in Europe?',
    choices: ["Katipunan", "La Liga Filipina", "La Solidaridad", "Kilusang Propaganda"],
    answer: 1,
  },
  {
    question: 'Where was Rizal born?',
    choices: ["Laguna", "Cavite", "Batangas", "Rizal"],
    answer: 0,
  },
  {
    question: 'What was Rizal\'s last poem?',
    choices: ["Sa Aking mga Kababata", "Mi Ultimo Adios", "A la Juventud Filipina", "Himno al Trabajo"],
    answer: 1,
  },

  // GENERAL EDUCATION - Ethics
  {
    question: 'Which ethical theory focuses on the consequences of actions?',
    choices: ["Deontological ethics", "Virtue ethics", "Consequentialism", "Divine command theory"],
    answer: 2,
  },
  {
    question: 'What is the Golden Rule in ethics?',
    choices: ["Do no harm", "Treat others as you would like to be treated", "The ends justify the means", "Survival of the fittest"],
    answer: 1,
  },
  {
    question: 'Who is considered the father of modern ethics?',
    choices: ["Aristotle", "Immanuel Kant", "John Stuart Mill", "Plato"],
    answer: 1,
  },
  {
    question: 'What does "categorical imperative" mean in Kantian ethics?',
    choices: ["Conditional moral command", "Unconditional moral command", "Situational ethics", "Relative morality"],
    answer: 1,
  },
  {
    question: 'Which philosopher advocated for utilitarianism?',
    choices: ["Kant", "Aristotle", "John Stuart Mill", "Nietzsche"],
    answer: 2,
  },
  {
    question: 'What is moral relativism?',
    choices: ["Universal moral truths", "Situational moral judgments", "Absolute moral standards", "Divine moral commands"],
    answer: 1,
  },
  {
    question: 'What is the principle of double effect?',
    choices: ["Two wrongs make a right", "Intention matters in moral evaluation", "Effects are more important than intentions", "All actions have double meanings"],
    answer: 1,
  },
  {
    question: 'What does "prima facie" mean in ethics?',
    choices: ["First impression", "At first sight", "Initial moral obligation", "Final judgment"],
    answer: 2,
  },
  {
    question: 'Who wrote "Nicomachean Ethics"?',
    choices: ["Plato", "Aristotle", "Socrates", "Kant"],
    answer: 1,
  },
  {
    question: 'What is the difference between ethics and morals?',
    choices: ["No difference", "Ethics is personal, morals are social", "Ethics is social, morals are personal", "Ethics is religious, morals are secular"],
    answer: 2,
  },

  // GENERAL EDUCATION - The Contemporary World
  {
    question: 'What does globalization primarily refer to?',
    choices: ["Local trade", "International interconnectedness", "National sovereignty", "Cultural isolation"],
    answer: 1,
  },
  {
    question: 'Which organization is primarily responsible for international monetary cooperation?',
    choices: ["United Nations", "World Bank", "International Monetary Fund", "World Trade Organization"],
    answer: 2,
  },
  {
    question: 'What is the main goal of sustainable development?',
    choices: ["Economic growth only", "Environmental protection only", "Meeting present needs without compromising future generations", "Population control"],
    answer: 2,
  },
  {
    question: 'Which country is the largest economy in the world?',
    choices: ["China", "United States", "Japan", "Germany"],
    answer: 1,
  },
  {
    question: 'What does ASEAN stand for?',
    choices: ["Asian Southeast Economic Nations", "Association of Southeast Asian Nations", "Alliance of South East Asian Nations", "Asian Social Economic Association of Nations"],
    answer: 1,
  },
  {
    question: 'What is climate change primarily caused by?',
    choices: ["Natural cycles", "Human activities", "Solar radiation", "Ocean currents"],
    answer: 1,
  },
  {
    question: 'Which agreement aims to combat climate change?',
    choices: ["Kyoto Protocol", "Paris Agreement", "Montreal Protocol", "Geneva Convention"],
    answer: 1,
  },
  {
    question: 'What is cultural imperialism?',
    choices: ["Military conquest", "Economic domination", "Imposition of one culture over another", "Political alliance"],
    answer: 2,
  },
  {
    question: 'What does GDP stand for?',
    choices: ["General Domestic Product", "Gross Domestic Product", "Global Development Plan", "Government Development Program"],
    answer: 1,
  },
  {
    question: 'Which technology has most accelerated globalization?',
    choices: ["Television", "Internet", "Telephone", "Radio"],
    answer: 1,
  },

  // GENERAL EDUCATION - Art Appreciation
  {
    question: 'Who painted "The Spoliarium"?',
    choices: ["Fernando Amorsolo", "Juan Luna", "Felix Resurreccion Hidalgo", "Carlos Francisco"],
    answer: 1,
  },
  {
    question: 'What art movement is characterized by the use of geometric shapes and fragmented forms?',
    choices: ["Impressionism", "Cubism", "Surrealism", "Expressionism"],
    answer: 1,
  },
  {
    question: 'Who is known as the "Grand Old Man of Philippine Art"?',
    choices: ["Juan Luna", "Fernando Amorsolo", "Victorio Edades", "Carlos Francisco"],
    answer: 1,
  },
  {
    question: 'What is the art of beautiful handwriting called?',
    choices: ["Typography", "Calligraphy", "Lithography", "Photography"],
    answer: 1,
  },
  {
    question: 'Which element of art refers to the lightness or darkness of colors?',
    choices: ["Hue", "Value", "Intensity", "Texture"],
    answer: 1,
  },
  {
    question: 'Who sculpted the "Pieta"?',
    choices: ["Leonardo da Vinci", "Michelangelo", "Donatello", "Raphael"],
    answer: 1,
  },
  {
    question: 'What type of art uses clay as its primary medium?',
    choices: ["Sculpture", "Ceramics", "Painting", "Drawing"],
    answer: 1,
  },
  {
    question: 'Which art period is characterized by religious themes and gold backgrounds?',
    choices: ["Renaissance", "Baroque", "Byzantine", "Gothic"],
    answer: 2,
  },
  {
    question: 'What does "chiaroscuro" mean in art?',
    choices: ["Light and shadow contrast", "Bright colors", "Abstract forms", "Realistic proportions"],
    answer: 0,
  },
  {
    question: 'Who painted "The Last Supper"?',
    choices: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Botticelli"],
    answer: 1,
  },

  // GENERAL EDUCATION - Understanding the Self
  {
    question: 'According to Sigmund Freud, which part of the personality operates on the reality principle?',
    choices: ["Id", "Ego", "Superego", "Unconscious"],
    answer: 1,
  },
  {
    question: 'What is self-concept?',
    choices: ["How others see you", "Your ideal self", "Your perception of yourself", "Your unconscious mind"],
    answer: 2,
  },
  {
    question: 'Who proposed the hierarchy of needs?',
    choices: ["Carl Jung", "Abraham Maslow", "Erik Erikson", "Carl Rogers"],
    answer: 1,
  },
  {
    question: 'What is the highest level in Maslow\'s hierarchy of needs?',
    choices: ["Safety needs", "Love and belonging", "Esteem needs", "Self-actualization"],
    answer: 3,
  },
  {
    question: 'According to Erik Erikson, what is the main task of adolescence?',
    choices: ["Trust vs. mistrust", "Identity vs. role confusion", "Intimacy vs. isolation", "Integrity vs. despair"],
    answer: 1,
  },
  {
    question: 'What does "persona" mean in Jungian psychology?',
    choices: ["True self", "Social mask", "Unconscious mind", "Personal experiences"],
    answer: 1,
  },
  {
    question: 'What is emotional intelligence?',
    choices: ["IQ score", "Ability to manage emotions", "Academic performance", "Memory capacity"],
    answer: 1,
  },
  {
    question: 'Who developed the concept of multiple intelligences?',
    choices: ["Howard Gardner", "Daniel Goleman", "Robert Sternberg", "Alfred Binet"],
    answer: 0,
  },
  {
    question: 'What is cognitive dissonance?',
    choices: ["Mental clarity", "Emotional stability", "Conflict between beliefs and actions", "Memory loss"],
    answer: 2,
  },
  {
    question: 'What is self-efficacy?',
    choices: ["Self-confidence", "Belief in one\'s ability to succeed", "Self-esteem", "Self-awareness"],
    answer: 1,
  },

  // PROFESSIONAL EDUCATION - The Teaching Profession
  {
    question: 'What is the primary purpose of the Code of Ethics for Professional Teachers?',
    choices: ["To increase salary", "To guide professional conduct", "To limit teaching methods", "To reduce workload"],
    answer: 1,
  },
  {
    question: 'Who is considered the "Father of Modern Education"?',
    choices: ["John Dewey", "Friedrich Froebel", "Johann Pestalozzi", "Maria Montessori"],
    answer: 0,
  },
  {
    question: 'What does professional development for teachers primarily involve?',
    choices: ["Salary increases", "Continuous learning and improvement", "Administrative duties", "Student discipline"],
    answer: 1,
  },
  {
    question: 'Which law established the teaching profession in the Philippines?',
    choices: ["RA 7836", "RA 9155", "RA 10533", "RA 7722"],
    answer: 0,
  },
  {
    question: 'What is the minimum educational requirement to become a teacher in the Philippines?',
    choices: ["High school diploma", "Associate degree", "Bachelor\'s degree", "Master\'s degree"],
    answer: 2,
  },
  {
    question: 'Who regulates the teaching profession in the Philippines?',
    choices: ["DepEd", "CHED", "PRC", "TESDA"],
    answer: 2,
  },
  {
    question: 'What is the main characteristic of a professional teacher?',
    choices: ["High salary", "Advanced degrees", "Commitment to student learning", "Administrative position"],
    answer: 2,
  },
  {
    question: 'What does "in loco parentis" mean for teachers?',
    choices: ["Legal guardian", "In place of parents", "School administrator", "Subject expert"],
    answer: 1,
  },
  {
    question: 'Which organization represents public school teachers in the Philippines?',
    choices: ["ACT", "PBET", "PSTA", "All of the above"],
    answer: 3,
  },
  {
    question: 'What is tenure in teaching?',
    choices: ["Temporary employment", "Job security after meeting requirements", "Retirement benefits", "Salary increase"],
    answer: 1,
  },

  // PROFESSIONAL EDUCATION - Facilitating Learner-centered Learning
  {
    question: 'What is the main characteristic of learner-centered teaching?',
    choices: ["Teacher as sole authority", "Students as passive recipients", "Focus on student needs and interests", "Standardized curriculum only"],
    answer: 2,
  },
  {
    question: 'Which learning theory emphasizes the role of social interaction in learning?',
    choices: ["Behaviorism", "Cognitivism", "Constructivism", "Humanism"],
    answer: 2,
  },
  {
    question: 'What is scaffolding in education?',
    choices: ["Building construction", "Temporary support for learning", "Punishment system", "Grading method"],
    answer: 1,
  },
  {
    question: 'Who developed the theory of multiple intelligences?',
    choices: ["Howard Gardner", "Benjamin Bloom", "Jean Piaget", "Lev Vygotsky"],
    answer: 0,
  },
  {
    question: 'What is differentiated instruction?',
    choices: ["Same instruction for all", "Tailoring instruction to student needs", "Advanced instruction only", "Remedial instruction only"],
    answer: 1,
  },
  {
    question: 'What does "ZPD" stand for in learning theory?',
    choices: ["Zone of Personal Development", "Zone of Proximal Development", "Zone of Professional Development", "Zone of Physical Development"],
    answer: 1,
  },
  {
    question: 'What is cooperative learning?',
    choices: ["Individual work", "Teacher-led instruction", "Students working together", "Silent learning"],
    answer: 2,
  },
  {
    question: 'What is the main goal of learner-centered education?',
    choices: ["Cover all content", "Student engagement and understanding", "Teacher convenience", "Test preparation"],
    answer: 1,
  },
  {
    question: 'What is metacognition?',
    choices: ["Advanced thinking", "Thinking about thinking", "Memory recall", "Problem solving"],
    answer: 1,
  },
  {
    question: 'Which approach emphasizes learning through experience?',
    choices: ["Lecture method", "Experiential learning", "Rote memorization", "Standardized testing"],
    answer: 1,
  },

  // PROFESSIONAL EDUCATION - Foundations of Special and Inclusive Education
  {
    question: 'What does "inclusion" mean in the context of special education?',
    choices: ["Separate special classes", "Mainstreaming all students", "Full participation of all students", "Homogeneous grouping"],
    answer: 2,
  },
  {
    question: 'What is an IEP in special education?',
    choices: ["Individual Education Plan", "Inclusive Education Program", "Integrated Evaluation Process", "Independent Education Policy"],
    answer: 0,
  },
  {
    question: 'What does IDEA stand for?',
    choices: ["Individual Disability Education Act", "Individuals with Disabilities Education Act", "Inclusive Disability Education Act", "International Disability Education Act"],
    answer: 1,
  },
  {
    question: 'What is the least restrictive environment?',
    choices: ["Special school only", "Regular classroom with support", "Separate classroom", "Home instruction"],
    answer: 1,
  },
  {
    question: 'What is universal design for learning (UDL)?',
    choices: ["One-size-fits-all approach", "Flexible curriculum design", "Special education only", "Gifted education approach"],
    answer: 1,
  },
  {
    question: 'What does "mainstreaming" refer to?',
    choices: ["Regular curriculum", "Placing special needs students in regular classrooms", "Special curriculum", "Separate facilities"],
    answer: 1,
  },
  {
    question: 'What is an accommodation in special education?',
    choices: ["Change in curriculum", "Change in how students learn", "Change in what students learn", "Change in school building"],
    answer: 1,
  },
  {
    question: 'What is a modification in special education?',
    choices: ["Change in how students learn", "Change in what students learn", "Change in classroom setup", "Change in teacher"],
    answer: 1,
  },
  {
    question: 'What does RTI stand for?',
    choices: ["Response to Intervention", "Regular Teaching Instruction", "Remedial Teaching Intervention", "Resource Teacher Instruction"],
    answer: 0,
  },
  {
    question: 'What is person-first language?',
    choices: ["Speaking first", "Emphasizing the person before the disability", "Teacher speaks first", "Student speaks first"],
    answer: 1,
  },

  // PROFESSIONAL EDUCATION - Building and Enhancing New Literacies
  {
    question: 'What is digital literacy?',
    choices: ["Ability to read books", "Skills in using digital technologies", "Knowledge of literature", "Writing skills only"],
    answer: 1,
  },
  {
    question: 'Which of the following is NOT a component of media literacy?',
    choices: ["Critical thinking", "Media analysis", "Content creation", "Passive consumption"],
    answer: 3,
  },
  {
    question: 'What is information literacy?',
    choices: ["Reading ability", "Ability to find, evaluate, and use information", "Computer skills", "Internet browsing"],
    answer: 1,
  },
  {
    question: 'What does "21st-century skills" refer to?',
    choices: ["Traditional academic skills", "Skills needed for modern world", "Computer programming", "Advanced mathematics"],
    answer: 1,
  },
  {
    question: 'What is critical thinking?',
    choices: ["Negative thinking", "Analytical and evaluative thinking", "Fast thinking", "Creative thinking"],
    answer: 1,
  },
  {
    question: 'What is visual literacy?',
    choices: ["Reading books", "Understanding visual media", "Art appreciation", "Photography skills"],
    answer: 1,
  },
  {
    question: 'What is financial literacy?',
    choices: ["Counting money", "Understanding financial concepts", "Banking knowledge", "Investment skills"],
    answer: 1,
  },
  {
    question: 'What is scientific literacy?',
    choices: ["Memorizing facts", "Understanding scientific concepts and methods", "Laboratory skills", "Mathematical ability"],
    answer: 1,
  },
  {
    question: 'What is cultural literacy?',
    choices: ["Art knowledge", "Understanding diverse cultures", "Language skills", "Historical facts"],
    answer: 1,
  },
  {
    question: 'What is technological literacy?',
    choices: ["Computer repair", "Understanding and using technology", "Programming skills", "Internet knowledge"],
    answer: 1,
  },

  // PROFESSIONAL EDUCATION - Technology for Teaching and Learning
  {
    question: 'What does TPACK stand for in educational technology?',
    choices: ["Technology, Pedagogy, and Content Knowledge", "Teaching with Computers and Knowledge", "Technology-Powered Academic Curriculum", "Technical Programming and Computer Knowledge"],
    answer: 0,
  },
  {
    question: 'Which of the following is an example of synchronous online learning?',
    choices: ["Recorded lectures", "Discussion forums", "Live video conferencing", "Email assignments"],
    answer: 2,
  },
  {
    question: 'What is a Learning Management System (LMS)?',
    choices: ["Hardware system", "Software platform for online learning", "Teaching method", "Assessment tool"],
    answer: 1,
  },
  {
    question: 'What is blended learning?',
    choices: ["Online learning only", "Face-to-face learning only", "Combination of online and face-to-face learning", "Independent study"],
    answer: 2,
  },
  {
    question: 'What is the primary benefit of educational technology?',
    choices: ["Replace teachers", "Enhance learning experiences", "Reduce costs", "Eliminate homework"],
    answer: 1,
  },
  {
    question: 'What is flipped classroom?',
    choices: ["Upside-down classroom", "Students teach teachers", "Content at home, activities in class", "Online classroom only"],
    answer: 2,
  },
  {
    question: 'What is gamification in education?',
    choices: ["Playing games only", "Using game elements in learning", "Video game development", "Sports in education"],
    answer: 1,
  },
  {
    question: 'What is augmented reality (AR) in education?',
    choices: ["Virtual classroom", "Enhanced real-world experience", "Computer simulation", "Online testing"],
    answer: 1,
  },
  {
    question: 'What is the main purpose of educational apps?',
    choices: ["Entertainment", "Support learning objectives", "Replace textbooks", "Increase screen time"],
    answer: 1,
  },
  {
    question: 'What is cloud computing in education?',
    choices: ["Weather study", "Internet-based computing services", "Sky observation", "Atmospheric research"],
    answer: 1,
  },

  // PROFESSIONAL EDUCATION - The Teacher and the Community
  {
    question: 'What is the primary role of teachers in community development?',
    choices: ["Political leadership", "Social catalyst", "Economic advisor", "Religious guide"],
    answer: 1,
  },
  {
    question: 'Which approach best describes community-based learning?',
    choices: ["Classroom-only instruction", "Learning through community engagement", "Individual study", "Online learning only"],
    answer: 1,
  },
  {
    question: 'What is the importance of home-school partnership?',
    choices: ["Reduce teacher workload", "Improve student outcomes", "Increase funding", "Simplify curriculum"],
    answer: 1,
  },
  {
    question: 'What does "stakeholder" mean in education?',
    choices: ["School owners only", "All parties with interest in education", "Government officials", "Private investors"],
    answer: 1,
  },
  {
    question: 'What is community service learning?',
    choices: ["Volunteer work only", "Learning through community service", "Social work", "Political activism"],
    answer: 1,
  },
  {
    question: 'What is the role of parents in education?',
    choices: ["Passive observers", "First teachers and partners", "School critics", "Funding sources"],
    answer: 1,
  },
  {
    question: 'What is cultural responsiveness in teaching?',
    choices: ["Teaching one culture", "Ignoring cultural differences", "Incorporating diverse cultures", "Western-focused education"],
    answer: 2,
  },
  {
    question: 'What is social capital in education?',
    choices: ["School funding", "Community relationships and networks", "Physical infrastructure", "Technology resources"],
    answer: 1,
  },
  {
    question: 'What is the purpose of school-community partnerships?',
    choices: ["Reduce costs", "Enhance educational opportunities", "Increase enrollment", "Simplify administration"],
    answer: 1,
  },
  {
    question: 'What is civic engagement in education?',
    choices: ["Political campaigning", "Active participation in community", "Government service", "Military training"],
    answer: 1,
  },

  // PROFESSIONAL EDUCATION - School Culture and Organizational Leadership
  {
    question: 'What is school culture?',
    choices: ["Academic subjects", "Shared beliefs and practices", "School building", "Student population"],
    answer: 1,
  },
  {
    question: 'What is transformational leadership?',
    choices: ["Authoritarian control", "Inspiring and motivating others", "Maintaining status quo", "Following rules strictly"],
    answer: 1,
  },
  {
    question: 'What is organizational climate?',
    choices: ["Weather conditions", "Workplace atmosphere", "Temperature control", "Seasonal changes"],
    answer: 1,
  },
  {
    question: 'What is shared vision in schools?',
    choices: ["Principal\'s vision only", "Common goals and direction", "Government mandate", "Parent expectations"],
    answer: 1,
  },
  {
    question: 'What is distributed leadership?',
    choices: ["One person leads", "Leadership shared among many", "Remote leadership", "Temporary leadership"],
    answer: 1,
  },
  {
    question: 'What is professional learning community (PLC)?',
    choices: ["Social club", "Collaborative learning group", "Academic conference", "Professional association"],
    answer: 1,
  },
  {
    question: 'What is change management in schools?',
    choices: ["Coin collecting", "Leading organizational change", "Currency exchange", "Financial management"],
    answer: 1,
  },
  {
    question: 'What is team building?',
    choices: ["Construction work", "Developing group cohesion", "Sports activity", "Building structures"],
    answer: 1,
  },
  {
    question: 'What is conflict resolution?',
    choices: ["Avoiding problems", "Solving disagreements peacefully", "Creating conflicts", "Ignoring issues"],
    answer: 1,
  },
  {
    question: 'What is strategic planning in education?',
    choices: ["Military tactics", "Long-term goal setting", "Daily lesson plans", "Emergency procedures"],
    answer: 1,
  },

  // PROFESSIONAL EDUCATION - Child and Adolescent Learners and Learning Principles
  {
    question: 'According to Piaget, at what stage do children develop abstract thinking?',
    choices: ["Sensorimotor", "Preoperational", "Concrete operational", "Formal operational"],
    answer: 3,
  },
  {
    question: 'What is the zone of proximal development according to Vygotsky?',
    choices: ["What a child can do alone", "What a child cannot do", "What a child can do with help", "What a child will never learn"],
    answer: 2,
  },
  {
    question: 'At what age do children typically begin formal schooling?',
    choices: ["4-5 years", "5-6 years", "6-7 years", "7-8 years"],
    answer: 2,
  },
  {
    question: 'What is adolescence primarily characterized by?',
    choices: ["Physical changes only", "Cognitive changes only", "Physical, cognitive, and social changes", "Social changes only"],
    answer: 2,
  },
  {
    question: 'What is peer pressure?',
    choices: ["Teacher influence", "Parent guidance", "Influence from age-mates", "Media influence"],
    answer: 2,
  },
  {
    question: 'What is identity formation?',
    choices: ["Name selection", "Developing sense of self", "Creating fake identity", "Legal documentation"],
    answer: 1,
  },
  {
    question: 'What is attachment theory?',
    choices: ["Physical connection", "Emotional bond between child and caregiver", "Mechanical fastening", "Academic attachment"],
    answer: 1,
  },
  {
    question: 'What is moral development?',
    choices: ["Religious training", "Development of ethical reasoning", "Legal education", "Cultural learning"],
    answer: 1,
  },
  {
    question: 'What is cognitive development?',
    choices: ["Physical growth", "Mental skill development", "Emotional growth", "Social development"],
    answer: 1,
  },
  {
    question: 'What is social development?',
    choices: ["Economic progress", "Learning to interact with others", "Political awareness", "Cultural knowledge"],
    answer: 1,
  },

  // PROFESSIONAL EDUCATION - The Teacher and the School Curriculum
  {
    question: 'What is curriculum?',
    choices: ["School schedule", "Planned learning experiences", "School building", "Student list"],
    answer: 1,
  },
  {
    question: 'What are the components of curriculum?',
    choices: ["Objectives, content, methods, evaluation", "Teachers, students, parents", "Books, computers, materials", "Classroom, library, laboratory"],
    answer: 0,
  },
  {
    question: 'What is hidden curriculum?',
    choices: ["Secret lessons", "Unintended learning outcomes", "Classified information", "Advanced curriculum"],
    answer: 1,
  },
  {
    question: 'What is curriculum alignment?',
    choices: ["Straight arrangement", "Matching curriculum components", "Time scheduling", "Student grouping"],
    answer: 1,
  },
  {
    question: 'What is spiral curriculum?',
    choices: ["Circular classroom", "Revisiting topics at deeper levels", "Twisted pathway", "Helical staircase"],
    answer: 1,
  },
  {
    question: 'What is curriculum mapping?',
    choices: ["Geographic study", "Documenting curriculum content", "School layout", "Student tracking"],
    answer: 1,
  },
  {
    question: 'What is differentiated curriculum?',
    choices: ["Mathematical curriculum", "Adapted to student needs", "Separate curriculum", "Advanced curriculum"],
    answer: 1,
  },
  {
    question: 'What is curriculum evaluation?',
    choices: ["Student grading", "Assessing curriculum effectiveness", "Teacher performance", "School ranking"],
    answer: 1,
  },
  {
    question: 'What is core curriculum?',
    choices: ["Central building", "Essential learning areas", "Apple curriculum", "Difficult subjects"],
    answer: 1,
  },
  {
    question: 'What is curriculum development?',
    choices: ["Building construction", "Creating and improving curriculum", "Student development", "Teacher training"],
    answer: 1,
  },

  // PROFESSIONAL EDUCATION - Methods and Strategies of Teaching
  {
    question: 'What is the lecture method?',
    choices: ["Student presentation", "Teacher-centered instruction", "Group discussion", "Independent study"],
    answer: 1,
  },
  {
    question: 'What is inquiry-based learning?',
    choices: ["Asking questions only", "Learning through investigation", "Police work", "Survey research"],
    answer: 1,
  },
  {
    question: 'What is project-based learning?',
    choices: ["Building projects", "Learning through extended projects", "Construction work", "Engineering design"],
    answer: 1,
  },
  {
    question: 'What is problem-based learning?',
    choices: ["Creating problems", "Learning through problem-solving", "Troubleshooting", "Conflict resolution"],
    answer: 1,
  },
  {
    question: 'What is collaborative learning?',
    choices: ["Individual work", "Students working together", "Teacher collaboration", "Parent involvement"],
    answer: 1,
  },
  {
    question: 'What is direct instruction?',
    choices: ["Giving directions", "Explicit teaching", "Navigation", "Command giving"],
    answer: 1,
  },
  {
    question: 'What is indirect instruction?',
    choices: ["Hidden teaching", "Student-centered discovery", "Roundabout way", "Unclear directions"],
    answer: 1,
  },
  {
    question: 'What is demonstration method?',
    choices: ["Protest activity", "Showing how to do something", "Public display", "Model presentation"],
    answer: 1,
  },
  {
    question: 'What is role-playing?',
    choices: ["Acting profession", "Assuming different roles for learning", "Theater performance", "Character study"],
    answer: 1,
  },
  {
    question: 'What is case study method?',
    choices: ["Legal cases", "In-depth analysis of specific situations", "Medical cases", "Criminal investigation"],
    answer: 1,
  },

  // PROFESSIONAL EDUCATION - Assessment of Learning
  {
    question: 'What is formative assessment?',
    choices: ["End-of-term grading", "Ongoing evaluation during learning", "Standardized testing", "Final examination"],
    answer: 1,
  },
  {
    question: 'What is summative assessment?',
    choices: ["Addition problems", "End-of-period evaluation", "Summary writing", "Mathematical totals"],
    answer: 1,
  },
  {
    question: 'Which type of assessment is used to determine student placement?',
    choices: ["Diagnostic", "Formative", "Summative", "Authentic"],
    answer: 0,
  },
  {
    question: 'What is authentic assessment?',
    choices: ["Real-world application", "Genuine evaluation", "Original testing", "Verified assessment"],
    answer: 0,
  },
  {
    question: 'What is portfolio assessment?',
    choices: ["Art collection", "Collection of student work", "Investment portfolio", "Folder organization"],
    answer: 1,
  },
  {
    question: 'What is performance assessment?',
    choices: ["Stage performance", "Evaluating student performance", "Music assessment", "Athletic evaluation"],
    answer: 1,
  },
  {
    question: 'What is rubric in assessment?',
    choices: ["Red marking", "Scoring guide", "Ruby gemstone", "Erasure method"],
    answer: 1,
  },
  {
    question: 'What is norm-referenced assessment?',
    choices: ["Normal testing", "Compared to group performance", "Standard evaluation", "Rule-based assessment"],
    answer: 1,
  },
  {
    question: 'What is criterion-referenced assessment?',
    choices: ["Critical evaluation", "Compared to set standards", "Reference book", "Criteria listing"],
    answer: 1,
  },
  {
    question: 'What is peer assessment?',
    choices: ["Equal evaluation", "Students evaluating each other", "Pier inspection", "Paired testing"],
    answer: 1,
  },

  // PROFESSIONAL EDUCATION - Action Research
  {
    question: 'What is action research?',
    choices: ["Military research", "Research to improve practice", "Physical activity study", "Action movie analysis"],
    answer: 1,
  },
  {
    question: 'What is the main purpose of action research in education?',
    choices: ["Academic publication", "Improve teaching practice", "Earn degrees", "Impress administrators"],
    answer: 1,
  },
  {
    question: 'What is the action research cycle?',
    choices: ["Bicycle research", "Plan, act, observe, reflect", "Circular motion", "Recycling process"],
    answer: 1,
  },
  {
    question: 'Who typically conducts action research in schools?',
    choices: ["External researchers only", "Teachers and practitioners", "Students only", "Parents only"],
    answer: 1,
  },
  {
    question: 'What is the first step in action research?',
    choices: ["Collect data", "Implement solution", "Identify problem", "Write report"],
    answer: 2,
  },
  {
    question: 'What is data triangulation in research?',
    choices: ["Triangle shape", "Using multiple data sources", "Three researchers", "Geometric analysis"],
    answer: 1,
  },
  {
    question: 'What is reflection in action research?',
    choices: ["Mirror use", "Critical thinking about practice", "Light reflection", "Image reflection"],
    answer: 1,
  },
  {
    question: 'What is collaborative action research?',
    choices: ["Working together", "Joint research effort", "Shared responsibility", "All of the above"],
    answer: 3,
  },
  {
    question: 'What is the outcome of action research?',
    choices: ["Academic paper", "Improved practice", "Higher grades", "Promotion"],
    answer: 1,
  },
  {
    question: 'What is ethical consideration in action research?',
    choices: ["Moral philosophy", "Protecting participants", "Religious beliefs", "Cultural values"],
    answer: 1,
  },

  // PROFESSIONAL EDUCATION - Field Study and Teaching Internship
  {
    question: 'What is the purpose of field study in teacher education?',
    choices: ["Outdoor activities", "Observe real teaching situations", "Agricultural study", "Sports activities"],
    answer: 1,
  },
  {
    question: 'What is teaching internship?',
    choices: ["Medical training", "Hands-on teaching experience", "Online learning", "Academic study"],
    answer: 1,
  },
  {
    question: 'What is the role of a cooperating teacher?',
    choices: ["School principal", "Mentor for student teacher", "Parent volunteer", "Department head"],
    answer: 1,
  },
  {
    question: 'What is observation in field study?',
    choices: ["Weather watching", "Systematic watching and recording", "Star gazing", "Bird watching"],
    answer: 1,
  },
  {
    question: 'What is practice teaching?',
    choices: ["Rehearsal", "Actual teaching experience", "Music practice", "Sports training"],
    answer: 1,
  },
  {
    question: 'What is reflection in field study?',
    choices: ["Mirror use", "Critical analysis of experiences", "Light reflection", "Echo"],
    answer: 1,
  },
  {
    question: 'What is the purpose of lesson planning in internship?',
    choices: ["Paper work", "Guide for effective teaching", "School requirement", "Time filling"],
    answer: 1,
  },
  {
    question: 'What is classroom management during internship?',
    choices: ["Office management", "Creating conducive learning environment", "File organization", "Schedule management"],
    answer: 1,
  },
  {
    question: 'What is professional development during internship?',
    choices: ["Career advancement", "Growing as educator", "Salary increase", "Job promotion"],
    answer: 1,
  },
  {
    question: 'What is the final requirement of teaching internship?',
    choices: ["Party celebration", "Comprehensive evaluation", "Gift giving", "Thank you letter"],
    answer: 1,
  },
];

export default questions;