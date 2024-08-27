import React, { useState, useEffect } from 'react';
import FlashCard from '../globalComponents/FlashCard';

interface FlashCardData {
  FlashcardId: number;
  SetId: number;
  question: string;
  answer: string;
}

const FlashCardSet: React.FC<{ setId: number }> = ({ setId }) => {
  const [flashcards, setFlashcards] = useState<FlashCardData[]>([]);

  // Fetch the flashcard set from the backend
  useEffect(() => {
    const fetchFlashcards = async () => {
      try {
        const response = await fetch(`/api/flashcards/set/${setId}`);
        const data = await response.json();
        setFlashcards(data);
      } catch (error) {
        console.error('Failed to fetch flashcards', error);
      }
    };

    fetchFlashcards();
  }, [setId]);

  // Function for when you mess up the answer to a question
  const updateFlashCard = async (FlashcardId: number, question: string, answer: string) => {
    try {
      await fetch(`/api/flashcards/${FlashcardId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question, answer }),
      });

      setFlashcards(flashcards.map(card =>
        card.FlashcardId === FlashcardId ? { ...card, question, answer } : card
      ));
    } catch (error) {
      console.error('Failed to update flashcard', error);
    }
  };

  // another flashcard sir
  const addCard = async () => {
    try {
      const response = await fetch(`/api/flashcards`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ setId, question: '', answer: '' }),
      });
      const newCard = await response.json();
      setFlashcards([...flashcards, newCard]);
    } catch (error) {
      console.error('Failed to add flashcard', error);
    }
  };

  const deleteCard = async (FlashcardId: number) => {
    try {
      await fetch(`/api/flashcards/${FlashcardId}`, {
        method: 'DELETE',
      });

      setFlashcards(flashcards.filter(card => card.FlashcardId !== FlashcardId));
    } catch (error) {
      console.error('Failed to delete flashcard', error);
    }
  };

  return (
    <div>
      {flashcards.map((card) => (
        <FlashCard
          key={card.FlashcardId}
          FlashcardId={card.FlashcardId}
          Question={card.question}
          Answer={card.answer}
          updateCard={updateFlashCard}
          deleteCard={deleteCard} // delete function
        />
      ))}
      <button onClick={addCard}>Add Flashcard</button>
    </div>
  );
};

export default FlashCardSet;