import React, { useState, useEffect } from 'react';
import Tanong from './components/Tanong';

const originalQuestions = [
  {
    question: 'He was the First Man to Circumnavigate the Earth.',
    choices: ['Ferdinand Magellan', 'Mariano Legaspi', 'Carlo Jimenez El Cano', 'Juan Sebastion El Cano',],
    answer: 3,
  },
  {
    question: 'This is One of the registered UNESCO World Heritage where it is known for well preserved SPANISH colonial TOWN',
    choices: ['Mount Hamiguitan Range Wildlife Sanctuary', 'Rice Terraces of the Philippine Cordilleras', 'Baroque Churches of the Philippines', 'Vigan City'],
    answer: 3,
  },
  {
    question: 'He was the man behind Hierarchy of Needs',
    choices: ['Carlos Maria Maslow', 'Robert Gagne', 'Abraham Maslow', 'Robert Renzulli'],
    answer: 2,
  },
  {
    question: 'In Magellan`s Expedition, This is the date when rajah humabon and his wife baptist by Magellan',
    choices: ['April 21, 1521', 'March 31, 1521', 'April 14, 1521', 'April 14, 1520'],
    answer: 2,
  },
  {
    question: 'He is the First Governor General of the Philippines',
    choices: ['Carlos Maria Dela Torre', 'Miguel lopez de Legaspi', 'Cayetano Arellano', 'Andres Bonifacio'],
    answer: 1,
  },
  {
    question: 'Rizal`s First Sorrow',
    choices: ['Death of his Mother', 'Failure of La Liga Filipina', 'Death of Concepcion', 'Death of GomBurZa'],
    answer: 2,
  },
  {
    question: 'According to Maslow`s Hierarchy of Need, this is the most important need of human',
    choices: ['Self-Actualization needs', 'Safety needs', 'Self Esteem needs', 'Physiological needs'],
    answer: 0,
  },
  {
    question: 'What was the common form of government among early Filipino communities?',
    choices: ['Republic', 'Barangay', 'Monarchy', 'Sultanate'],
    answer: 1,
  },
  {
    question: 'Who was the head of the barangay in pre-colonial Philippines?',
    choices: ['Datu', 'Umalohokan', 'Sultan', 'Lakan'],
    answer: 0,
  },
  {
    question: 'Which system of writing did ancient Filipinos use?',
    choices: ['Baybayin', 'Alibata', 'Balagtas', 'Tagalog'],
    answer: 0,
  },
  {
    question: 'What was the early Filipino religion before the arrival of the Spanish?',
    choices: ['Christianity', 'Buddhism', 'Animism', 'Islam'],
    answer: 2,
  },
  {
    question: 'Which of the following was NOT a social class in pre-colonial Philippines?',
    choices: ['Timawa', 'Maharlika', 'Alipin', 'Kapitan'],
    answer: 3,
  },
  {
    question: 'Which system forced Filipinos to provide labor to Spanish colonizers?',
    choices: ['Hacienda', 'Encomienda', 'Polo y Servicio', 'Tributo'],
    answer: 2,
  },
  {
    question: 'What were Filipino men required to do under "Polo y Servicio"?',
    choices: ['Serve as soldiers', 'Pay taxes', 'Render forced labor', 'Convert to Christianity'],
    answer: 2,
  },
  {
    question: 'Which Filipino hero is known for writing *Noli Me Tangere* and *El Filibusterismo*?',
    choices: ['Andres Bonifacio', 'Jose Rizal', 'Emilio Aguinaldo', 'Marcelo H. del Pilar'],
    answer: 1,
  },
  {
    question: 'Which organization was founded by Deodato Arellano to fight Spanish rule?',
    choices: ['La Liga Filipina', 'Katipunan', 'Hukbalahap', 'Guardia Civil'],
    answer: 1,
  },
  {
    question: 'Who was the first president of the First Philippine Republic?',
    choices: ['Jose Rizal', 'Andres Bonifacio', 'Emilio Aguinaldo', 'Manuel L. Quezon'],
    answer: 2,
  },
  {
    question: 'Which learning theory emphasizes the role of reinforcement in learning behavior?',
    choices: ['Constructivism', 'Cognitivism', 'Behaviorism', 'Humanism'],
    answer: 2,
  },
  {
    question: 'What is the most appropriate instructional strategy for higher-order thinking skills?',
    choices: ['Lecture method', 'Drill and practice', 'Discussion and problem-solving', 'Memorization'],
    answer: 2,
  },
  {
    question: 'Which of the following is a characteristic of a learner-centered curriculum?',
    choices: ['Focuses on the subject matter', 'Teacher dictates the content', 'Emphasizes rote learning', 'Based on learners’ needs and interests'],
    answer: 3,
  },
  {
    question: 'What principle of assessment requires using different tools to evaluate various learning domains?',
    choices: ['Validity', 'Fairness', 'Assessment for learning', 'Use of multiple methods'],
    answer: 3,
  },
  {
    question: 'According to Bloom’s taxonomy, which of the following is the highest level of thinking?',
    choices: ['Analyzing', 'Evaluating', 'Understanding', 'Creating'],
    answer: 3,
  },
  {
    question: 'Which classroom management style is characterized by clear rules and high responsiveness?',
    choices: ['Authoritarian', 'Authoritative', 'Permissive', 'Laissez-faire'],
    answer: 1,
  },
  {
    question: 'Which of the following best describes formative assessment?',
    choices: ['Given at the end of a unit', 'Used to assign grades', 'Provides feedback during instruction', 'Summarizes overall performance'],
    answer: 2,
  },
  {
    question: 'He is behind the 3 rings Conseption of Giftedness',
    choices: ['Robert Ranzulli', 'Robert Renzulli', 'Joseph Renzulli', 'Joseph Ranzulli'],
    answer: 2,
  },
  {
    question: 'This is the Main Ship of Magellan during his Expedition',
    choices: ['Trinidad', 'Santiago', 'Victoria', 'Concepcion'],
    answer:0,
  },
  {
    question: 'Which UNESCO site in Palawan is famous for its underground river?',
    choices: ['El Nido Marine Reserve', 'Tubbataha Reefs Natural Park', 'Puerto Princesa Subterranean River National Park', 'Coron Reefs Natural Reserve'],
    answer:2,
  },
  {
    question: 'In the nine events of instruction by Gagne, What comes first',
    choices: ['Gaining Attention', 'Recalling Prior Knowledge', 'Provide Feedback', 'Present The Materials'],
    answer:0,
  },
  {
    question: 'He is the man behind Subsumption Theory',
    choices: ['Joseph Renzulli', 'Little John', 'David Ausubel', 'Plato'],
    answer:2,
  },
  {
    question: 'This is the part of Lesson plan, where abstraction is aligned',
    choices: ['Objectives', 'Subject Matter', 'Assignment', 'Learning Activities'],
    answer:3,
  },
  {
    question: 'He is known as Beloved Spanish Governor General',
    choices: ['Carlos Maria Dela Torre', 'Rafael Izquirdo', 'Manuel Lopez de Legaspi', 'Ferdinand Magellan'],
    answer:0,
  },
  {
    question: 'This is known as Seal Of Friendship in early Philippines',
    choices: ['Sandugo','Barter', 'Kalayaan', 'Pueblo'],
    answer:0,
  },
  {
    question: 'In pre-colonial era in Philippines, This is way of people to get Justified',
    choices: ['Cortez Suprema','Suez Canal', 'Trial by Ordeal', 'Garrote'],
    answer: 2,
  },
  {
    question: 'Known as The triumvirate',
    choices: ['Jaena, Rizal, Del pilar','Rizal, Bonifacio, Luna', 'Jaena, Rizal, Bonifacio', 'Bonifacio, Arellano, Basa'],
    answer: 0,
  },
  {
    question: 'He is known as Siling Labuyo',
    choices: ['Marcelo H. Del pilar','Emilio Jacinto', 'Juan Luna', 'Jose Protacio Rizal Mercado y Alonso Realonda'],
    answer:0,
  },
  {
    question: 'He was called as Utak ng Katipunan',
    choices: ['Antonio Luna','Apolinario Mabini', 'Andres Bonifacio', 'Emilio Jacinto'],
    answer:3,
  },
  {
    question: 'This is known as Revised Blooms Taxonomy',
    choices: ['Harrow Taxonomy','Dave Taxonomy', 'Anderson Taxonomy', 'Kendall and Marzano Taxonomy'],
    answer:2,
  },
  {
    question: 'This is Republic Act giving privelage to the Person`s with Disabilities to recognize as Member of Society',
    choices: ['RA 7272','RA 7277', 'RA 1043', 'RA 1245'],
    answer:1,
  },
  {
    question: 'This is Republic Act is known as Rizal`s Law',
    choices: ['RA 7272','RA 1254', 'RA 1425', 'RA 1245'],
    answer:2,
  },
  {
    question: 'This is the Highest Social Class during pre-colonial period',
    choices: ['Peninsulares','Insulares', 'Timawa', 'Maharlika'],
    answer:3,
  },
];


//pang shuffle
function shuffleArray(array) {
  return array
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

export default function App() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const shuffled = shuffleArray(originalQuestions);
    setQuestions(shuffled);
    setAnswers(Array(shuffled.length).fill(null));
  }, []);

  const handleAnswer = (index, choice) => {
    const updated = [...answers];
    updated[index] = choice;
    setAnswers(updated);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const score = answers.filter((ans, i) => ans === questions[i].answer).length;

  return (
    <div className="container py-4">
      <h2 className="mb-4 text-center">Madam Luisa Mae's Reviewer</h2>

      {questions.map((q, i) => (
        <div className="mb-4" key={i}>
          <Tanong
            index={i}
            data={q}
            selected={answers[i]}
            onSelect={(choice) => handleAnswer(i, choice)}
            disabled={submitted}
            showAnswer={submitted}
          />
        </div>
      ))}

      {!submitted ? (
        <div className="text-center">
          <button className="btn btn-primary" onClick={handleSubmit}>
            Submit Answers
          </button>
        </div>
      ) : (
        <div className="alert alert-success text-center mt-4">
          You scored {score} out of {questions.length} correct!
        </div>
      )}
    </div>
  );
}
