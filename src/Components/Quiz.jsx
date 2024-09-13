import React, { useState } from "react";
import { dummyData } from "./QuizData";
import { Question } from "./Question";

export const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

  const currentCategory = dummyData[currentCategoryIndex];
  const currentQuestion = currentCategory.questions[currentQuestionIndex];

  const [isQuizEnded, setIsQuizEnded] = useState(false);



  const handleNextQuestion = () => {
    const nextQuestionIndex = currentQuestionIndex + 1;

    if (nextQuestionIndex < currentCategory.questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else if (currentCategoryIndex + 1 < dummyData.length) {
      setCurrentCategoryIndex(currentCategoryIndex + 1);
      setCurrentQuestionIndex(0);
    } else {
        setIsQuizEnded(true);
      console.log("Quiz Completed");
    }
  };

  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const [score, setScore] = useState(0);

  const handleCorrectAnswer = (option) => {
    
    if (currentQuestion.correctAnswer === option) {
        setScore(score+1);
        setSelectedAnswer(option);
    }
  };

  return (
    <>
    {!isQuizEnded ? (<>
        <Question
        category={currentCategory?.category}
        question={currentQuestion?.question}
        options={currentQuestion?.options}
        handleCorrectAnswer={handleCorrectAnswer}
        selectedAnswer={selectedAnswer}
      />

      <button onClick={handleNextQuestion} disabled={selectedAnswer === null}>Next Question</button>
    </>) : <p>Your Score is {score}</p>}
 
    </>
  );
};
