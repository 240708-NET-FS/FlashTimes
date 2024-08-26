import React, { useEffect, useState } from 'react';

  // this comment is so I can do things

 

  // JS animation things
  interface FlashCardProps{
    FlashcardId: number;
    Question: string;
    Answer: string;
    updateCard: (FlashCardId: number, Question: string, Answer: string) => Promise<void>;
    deleteCard: (FlashCardId: number) => void;
    
  }
  const FlashCard: React.FC<FlashCardProps> = ({FlashcardId, Question, Answer}) => {
    const [isActive, setIsActive] = useState(false);
    const [questionText, setQuestionText] = useState<string>(Question); //enter your question
    const [answerText, setAnswerText] = useState<string>(Answer); //enter your answer
    const[isFlipped, setIsFlipped] = useState(false); //flip!
    const[text, setText] = useState<string>(Question);

    const handleFlip = () => {
      setIsFlipped(!isFlipped); //Kickflip
    };

    const handleUpdate = () => {
      // Call updateCard with the current state values
      updateCard(FlashcardId, questionText, answerText);
    };
  
    const handleDelete = () => {
      // Call deleteCard to remove this flashcard
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
           placeholder="Type something here..."
           onChange={(e: any) => setQuestionText(e.target.value)}>
           {text}
         </textarea>
        ): (
          <textarea
           placeholder="Type something here..."
           onChange={(e: any) => setAnswerText(e.target.value)}>
           {text}
         </textarea>
        )} 

        {/* <textarea 
=                   placeholder="Type something here..." 
                    value={text}
                    onChange={(e: any) => setText(e.target.value)}
                    />
                    
                    </div>
                    */}
      </div>
    </div>
  );

};

export default FlashCard;
