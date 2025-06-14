import React from 'react';

export default function Tanong({ index, data, selected, onSelect, disabled, showAnswer }) {
  return (
    <div className="card p-3 shadow-sm bg-info">
      <h5>{index + 1}. {data.question}</h5>
      <div>
        {data.choices.map((choice, i) => {
          const isCorrect = showAnswer && i === data.answer;
          const isWrong = showAnswer && selected === i && selected !== data.answer;

          return (
            <div key={i} className="form-check">
              <input
                type="radio"
                name={`question-${index}`}
                id={`q${index}-choice${i}`}
                className="form-check-input"
                checked={selected === i}
                onChange={() => onSelect(i)}
                disabled={disabled}
              />
              <label
                htmlFor={`q${index}-choice${i}`}
                className={`form-check-label ${
                  isCorrect ? 'text-success fw-bold' :
                  isWrong ? 'text-danger' : ''
                }`}
              >
                {choice}
              </label>
            </div>
          );
        })}
      </div>
      {showAnswer && selected !== data.answer && (
        <div className="mt-2 text-success small">
          ✅ Correct Answer: {data.choices[data.answer]}
        </div>
      )}
    </div>
  );
}
