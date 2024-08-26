import React, { useEffect, useState } from 'react';
import FlashCardSet from '../LandingPage/FlashCardSet';

  // this comment is so I can do things

 

  // JS animation things
  interface FlashCardProps{
    FlashcardId: number;
    Question: string;
    Answer: string;
    updateCard: (FlashCardId: number, Question: string, Answer: string) => Promise<void>;
    deleteCard: (FlashCardId: number) => void;
  }
  const FlashCard: React.FC<FlashCardProps> = ({ FlashcardId, Question, Answer, updateCard, deleteCard }) => {
    const [questionText, setQuestionText] = useState<string>(Question);
    const [answerText, setAnswerText] = useState<string>(Answer);
    const [isFlipped, setIsFlipped] = useState(false);
  
    const handleFlip = () => {
      setIsFlipped(!isFlipped);
    };
  
    const handleUpdate = () => {
      updateCard(FlashcardId, questionText, answerText);
    };
  
    const handleDelete = () => {
      deleteCard(FlashcardId);
    };
  
  const cardStyle = {
    width: 450,
    height: 250,
    backgroundColor: 'white',
    color: 'black',
    padding: 20,
    borderRadius: 5,
    textAlign: 'left' as const,
    display: 'flex',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#cfe8ef',
    overflow: 'hidden',
  };


  // useEffect(()=> {
  //     console.log(text);
  // }, [text])

 
  return (
    <div style={cardStyle} onClick={handleFlip}>  
      <div>
        {!isFlipped ? (
          <textarea
            placeholder="Type your question here..."
            value={questionText}
            onChange={(e: any) => setQuestionText(e.target.value)}
          />
        ) : (
          <textarea
            placeholder="Type your answer here..."
            value={answerText}
            onChange={(e: any) => setAnswerText(e.target.value)}
          />
        )}
      </div>
      
      {/* Update and Delete buttons */}
      <button 
        style={{ position: 'absolute', bottom: 10, left: 10 }} 
        onClick={handleUpdate}
      >
        Update
      </button>
      <button 
        style={{ position: 'absolute', bottom: 10, right: 10 }} 
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
};

export default FlashCard;

