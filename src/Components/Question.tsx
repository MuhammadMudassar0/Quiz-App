import React from "react";

export const Question = ({ category, question, options, handleCorrectAnswer, selectedAnswer }) => {
    return (
        <>
            <h2>Question category is {category}</h2>

            <h3>{question}</h3>
            <h4>Select the correct answer:</h4>
            <ul style={{ background: '#f0f1f1', color: '#2e2e2e' }}>
                {options.map((option:any, index: any) => (
                    <li
                        key={index}
                        onClick={() => handleCorrectAnswer(option)}
                        style={{
                            backgroundColor: selectedAnswer === option ? '#d4edda' : '#f0f1f1',
                            cursor: 'pointer',
                            padding: '8px',
                            margin: '5px 0',
                            borderRadius: '4px',
                            listStyleType: 'none'
                        }}
                    >
                        {option}
                    </li>
                ))}
            </ul>
        </>
    );
};
