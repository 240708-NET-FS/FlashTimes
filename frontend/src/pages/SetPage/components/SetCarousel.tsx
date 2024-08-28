import FlashCard from "pages/globalComponents/FlashCard";
import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";
import { useLocation, useParams } from "react-router-dom";
import { FlashCardDTO, SetDTOFlashCardDTO, SetDTO } from "types/types";
import "../styles/SetPageStyles.css";

const SetCarousel = ({set,cards, currentCard}: {set: SetDTO | null | undefined, cards: any, currentCard: any}) => {
    const [loading, setLoading] = useState<boolean | null>(null);

    const [flashcards, setFlashcards] = useState(cards);

    const [current, setCurrent] = useState<any>(currentCard);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [setLength, setSetLength] = useState(set?.setLength);

    const [backDisabled, setBackDisabled] = useState(true);
    const [nextDisabled, setNextDisabled] = useState(false);

    useEffect(()=> {
        console.log(currentIndex);
        currentIndex === 0 ? setBackDisabled(true) : setBackDisabled(false);
        currentIndex === setLength - 1 ? setNextDisabled(true) : setNextDisabled(false);

        setCurrent(cards[currentIndex]);
        
    }, [currentIndex])
    

   

    const handleNext = () => {
        if(currentIndex + 1 < cards.length){
            setCurrentIndex(currentIndex + 1);
        }

    }

    const handleBack = () => {

        if(currentIndex - 1 >= 0){
            setCurrentIndex(currentIndex - 1);
        }

    }

    const mapCard = flashcards.map((c:any) => c === current ? <FlashCard FlashcardId={c.flashcardId} Question={c.question} Answer={c.answer} />: null)







    return(
        <div>
             {loading ?
                <div>
                    <h2>Loading...</h2>
                </div>
                :
                <div style={{width: '100%',display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <div id="cardHolder" style={{display: 'flex', flexDirection: 'row',  }}>
                        {mapCard}
                    </div>
                    <div style={{width: '100%'}}>
                        <div style={{height: 75, display: 'flex', flexDirection: 'row',alignItems: 'center'}}>
                            <div style={{width: '33%'}}>
                                <button className="controlButton" disabled={backDisabled} onClick={handleBack}>
                                    <AiOutlineLeftCircle 
                                        size={60}
                                        color={!backDisabled ? "orange": "rgba(0, 0, 0, .25)"}
                                    />

                                </button>
                            </div>
                            <div style={{width: '33%'}}>
                                {currentIndex + 1 + "/" + setLength}
                            </div>
                            <div style={{width: '33%'}}>
                                <button className="controlButton" disabled={nextDisabled} onClick={handleNext}>
                                    <AiOutlineRightCircle
                                        size={60}
                                        color={!nextDisabled ? "orange": "rgba(0, 0, 0, .25)"}
                                        />
                                    </button>
                            </div>
                        </div>
                    </div>
                </div>
            }      
        </div>
       
    )
    



    

}

export default SetCarousel;