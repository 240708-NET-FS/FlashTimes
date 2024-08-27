import React, { useEffect, useState, useCallback } from "react";
import { FlashCard, FlashCardDTORequest } from "types/types";
import "../styles/MakeSetStyles.css";
import {AiFillCloseSquare} from "react-icons/ai";


const BlankCard = ({index, card, updateCards}:{index: number, card: any, updateCards: any}) => {
    const [question, setQuestion] = useState<string>("");
    const [answer, setAnswer] = useState<string>("");

    
  


    useEffect(()=> {
        card.question = question;
        card.answer = answer;
    }, [question, answer]);


 




    return(
        <div className="blankCard">
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', width: '100%'}}>
                {/* <div style={{width: '50%'}}>
                    <p style={{padding: 2, fontSize: 16, textAlign: 'left', fontWeight: 'bold'}}>{index}</p>
                </div> */}
                {/* <h5 style={{textAlign: 'left'}}>1</h5>  */}
                <div id="close" style={{width: '100%', textAlign: 'right'}}>
                    <AiFillCloseSquare size={32} color={"#115871"} onClick={()=> updateCards(card)}/>
                </div>
            {/* <hr /> */}
            </div>

            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <div style={{width: '50%'}}>
                    <div style={{width: '95%', textAlign: 'left'}}>
                        <input className="cardInput" type="text" placeholder="Enter Question" value={question} onChange={e => setQuestion(e.target.value)}/>
                    </div>
                </div>
                <div style={{width: '50%'}}>
                    <div style={{width: '95%'}}>
                        <input className="cardInput" type="text" placeholder="Enter Answer" value={answer} onChange={e => setAnswer(e.target.value)}/>
                    </div>
                </div>
               
            </div>
            
        </div>
    )
}

export default BlankCard;