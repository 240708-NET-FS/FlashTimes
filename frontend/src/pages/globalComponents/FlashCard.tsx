import React, { useEffect, useState } from 'react';
import FlashCardSet from '../LandingPage/FlashCardSet';
import "./globalStyles.css";
import { AiOutlineClose } from 'react-icons/ai';
import { deleteFlashCard } from '@services/FlashCardService';

  // this comment is so I can do things

 

  // JS animation things
  interface FlashCardProps{
    FlashcardId: number;
    Question: string;
    Answer: string;
    // updateCard: (FlashCardId: number, Question: string, Answer: string) => Promise<void>;
    // deleteCard: (FlashCardId: number) => void;
  }
  const FlashCard: React.FC<FlashCardProps> = ({ FlashcardId, Question, Answer}) => {
    const [questionText, setQuestionText] = useState<string>(Question);
    const [answerText, setAnswerText] = useState<string>(Answer);
    const [isFlipped, setIsFlipped] = useState(false);

 
  
    const handleFlip = () => {
      setIsFlipped(!isFlipped);
    };
  
    const handleUpdate = () => {
      // updateCard(FlashcardId, questionText, answerText);
    };
  
    const handleDelete = () => {
     
      // deleteCard(FlashcardId);
    };
  
  const cardStyle = {
   
  };


  // useEffect(()=> {
  //     console.log(text);
  // }, [text])

 
  return (
    <div className="cardStyle" onClick={handleFlip}>  
      <div>
        {/* <div>
          <AiOutlineClose
            size={32}
            color="black"
            onClick={handleDelete}
            />
        </div> */}
        {!isFlipped ? (
          <textarea
            
            className='cardText'
            placeholder="Type your question here..."
            value={questionText}
            onChange={(e: any) => setQuestionText(e.target.value)}
          />
        ) : (
          <textarea
            className='cardText'
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

