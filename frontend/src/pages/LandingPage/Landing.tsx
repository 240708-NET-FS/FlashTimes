import React from 'react';
import FlashCardSet from '../LandingPage/FlashCardSet';
import FlashCard from '../globalComponents/FlashCard';

const Landing = () => {
  return (
    <div>
      <header></header>
      <main>
        <FlashCard FlashcardId={0} Question='' Answer='' />
        {/* sample card */}
      </main>
    </div>
  );
};

export default Landing;
