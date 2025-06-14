import React, { useState, useEffect } from 'react';
import Tanong from './Tanong';
import originalQuestions from './questions';

//pang shuffle
function shuffleArray(array) {
  return array
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

export default function Review() {
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
      <h2 className="text-info mb-4 text-center text-decoration-underline c ">General Education and Professional Education Reviewer para kay Madam</h2>
      <h3 className="opacity-25 mb-4 text-center text-body-secondary">Prepared and Programmed by Daniel Salazar De Guzman</h3>

      {questions.map((q, i) => (
        <div className="mb-4 text-center" key={i}>
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
          <button className="btn btn-warning" onClick={handleSubmit}>
            Submit Answers
          </button>
          <p>The Questions Are Randomly Created by <a href="https://claude.ai/" className="link-info" target='_blank' rel='noopener noreferrer'>Claude Ai</a> </p>
        </div>
      ) : (
        <div className="alert alert-success text-center mt-4">
          You scored {score} out of {questions.length} correct!

            <p>The Questions Are Randomly Created by <a href="https://claude.ai/" className="link-info" target='_blank' rel='noopener noreferrer'>Claude Ai</a> </p>
            <p className="text-decoration-underline">Accepting Commission for other Projects, with Friendly Price <br/> <a href="https://www.facebook.com/daniel.deguzman.547389/" className='link-danger' target='_blank' rel='noopener noreferrer'> Contact me Here!- Daniel</a> </p>

        </div>
      )}
    </div>
  );
}
