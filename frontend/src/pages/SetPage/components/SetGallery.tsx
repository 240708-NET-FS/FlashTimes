import React, { useEffect, useState, useRef } from "react";
import { FlashCardDTO, SetDTO, SetDTOFlashCardDTO } from "types/types";
import FlashCard from "pages/globalComponents/FlashCard";
import "../styles/SetPageStyles.css";
const SetGallery = ({set}: {set: SetDTO | null})=>{


    const cardRef = useRef(0);
    const setLengthRef = useRef<number | undefined>(0);
    const [loading, setLoading] = useState<null | boolean>(null);
    // mind my terrible naming convetions
    const [pack, setPack] = useState<SetDTO | null>();
    const [cards, setCards] = useState<SetDTOFlashCardDTO[] | null>();

    // setting states and refs up
    useEffect(()=> {
        console.log("Setting states...");
        setLoading(true);
        setPack(set);
        setCards(set?.flashcards);
        console.log(cards);
        setLengthRef.current = cards?.length;
        setLoading(false);
    }, [])

    const spawnFlashCards = cards?.map((c, index) => (
        <div style={{padding: 5}}>
            <FlashCard FlashcardId={c.flashcardId} Question={c.question} Answer={c.answer}/>

        </div>
    ))

    const basics = [1, 2, 3, 4, 5, 6]

    return(
        <div className="galleryWrap">
            {loading ? 
                <div><h3>Loading...</h3></div>
                :
                <div >
                    <div className="listBox">
                        {spawnFlashCards}
                        
                    
                    </div>
                </div>
            }

            
        </div>
    )

}

export default SetGallery;