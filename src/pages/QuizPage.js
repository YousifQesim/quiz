import React, { useState, useEffect } from 'react';
import quizzesData from '../components/data.json';

const QuizPage = () => {
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(10); // Initial timer value in seconds

  const quizzes = quizzesData.quizzes;

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === quizzes[currentQuiz].questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setSelectedOption(null);
    setCurrentQuestion(currentQuestion + 1);
    setTimer(10); // Reset the timer for the next question
  };

  const handleNextQuiz = () => {
    setCurrentQuiz(currentQuiz + 1);
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setTimer(10); // Reset the timer for the next quiz
  };

  useEffect(() => {
    // Countdown timer
    if (timer > 0) {
      const countdown = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);

      return () => {
        clearInterval(countdown);
      };
    } else {
      // Time's up, move to the next question
      handleNextQuestion();
    }
  }, [timer]);

  if (currentQuiz >= quizzes.length) {
    // All quizzes finished, display the final score
    return (
      <div>
        <h1>All Quizzes Finished!</h1>
        <p>Your final score: {score}/{quizzes[currentQuiz - 1].questions.length}</p>
      </div>
    );
  }

  const { title, questions } = quizzes[currentQuiz];
  const currentQuizLength = questions.length;

  if (currentQuestion >= currentQuizLength) {
    // Current quiz finished, display the score and the option to move to the next quiz
    return (
      <div>
        <h1>Quiz {currentQuiz + 1} Finished!</h1>
        <p>Your score: {score}/{currentQuizLength}</p>
        <button onClick={handleNextQuiz}>Next Quiz</button>
      </div>
    );
  }

  const { question, options } = questions[currentQuestion];

  return (
    <div>
      <h1>Quiz App</h1>
      <h2>{title}</h2>
      <h3>Question {currentQuestion + 1}</h3>
      <p>{question}</p>
      <p>Time Remaining: {timer} seconds</p>
      <ul>
        {options.map((option, index) => (
          <li
            key={index}
            onClick={() => handleOptionSelect(option)}
            style={{ background: option === selectedOption ? 'yellow' : 'white' }}
          >
            {option}
          </li>
        ))}
      </ul>
      <button onClick={handleNextQuestion} disabled={!selectedOption}>
        Next Question
      </button>
    </div>
  );
};

export default QuizPage;