import React, { useEffect, useState } from 'react';
import FlashCard from './FlashCard'; //bringing flashcard into the set 



interface FlashCardProps {
    FlashcardId: number;
    Question: string;
    Answer: string;
  }
  
  interface FlashCardSetProps {
    title: string;
    cards: FlashCardProps[]; 
  }
  
  const FlashCardSet: React.FC<FlashCardSetProps> = ({ title, cards }) => { //Going to be all set (badumtiss)
    return (
      <div className="flashcard-set">
        <h2>{title}</h2>
        <div className="flashcards">
          {cards.map((card) => (
            <FlashCard 
              key={card.FlashcardId} 
              FlashcardId={card.FlashcardId} 
              Question={card.Question} 
              Answer={card.Answer} 
            />
          ))}
        </div>
      </div>
    );
  };

  export default FlashCardSet;