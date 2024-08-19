import React, { useEffect, useState } from 'react';

const FlashCard = ({}) => {
  // this comment is so I can do things

  const [isActive, setIsActive] = useState(false);
  const [text, setText] = useState<string | undefined>(undefined);

  // JS animation things

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
    <div style={cardStyle}>
      <div>
        <textarea
          placeholder="Type something here..."
          onChange={(e: any) => setText(e.target.value)}>
          {text}
        </textarea>
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
