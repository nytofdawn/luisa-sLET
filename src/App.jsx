import React, { useState, useEffect } from 'react';
import Tanong from './components/Tanong';
import originalQuestions from './components/questions';

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
