import React, {memo, useCallback, useContext, useEffect, useMemo, useRef, useState} from "react";
import "./styles/MakeSetStyles.css"
import BlankCard from "./components/BlankCard";
import AddCardButton from "./components/AddCardButton";
import { CreateSetDTO, FlashCardDTORequest, UpdateSetDTO } from "types/types";
import { UserContext } from "contexts/UserContext";
import { createNewSet } from "@services/SetService";
import { addFlashCard } from "@services/FlashCardService";
import { useNavigate } from "react-router-dom";

const MakeSet = () => {
    const {user} = useContext(UserContext);
    const [disabled, setDisabled] = useState<boolean>(true);
    const [title, setTitle] = useState<string>("");
    // triggers for adding/removing a card
    const [addCardTrigger, setAddCardTrigger] = useState(0);
    const [removeCardTrigger, setRemoveCardTrigger] = useState(0);
    const cardIdRef = useRef(0);    

    // default card added on Add FlashCard 
    const defaultCard = {
        flashCardId: 0, //not in DTO, but makes easier to remove (not included when added)
        userId: user?.userId,
        setId: 0, //changed when set created
        question: "",
        answer: ""
    }

    // default card
    const [blankCardList, setBlankCardList] = useState<any[]>([defaultCard]);



    const navigate = useNavigate();


    // if no title set, can't create the set
    useEffect(()=> {
            blankCardList.length > 0 && title.length > 0 ? setDisabled(false) : setDisabled(true);
    }, [title])


    const createSet = async() => {
        try{
            console.log("creating the set...");
            const newSet: CreateSetDTO = {userId: user?.userId , setName: title};
            const response = await createNewSet(newSet);
            console.log("Adding all the cards...");
            addAllCardsToSet(response.setId);
            // navigate to set page
            navigate(`/set/${response.setName}`);
        }catch(error){
            console.error(error);
        }
    }


    // probably a bettwer way to do this, but alas (might add to helpers.ts)
    const addAllCardsToSet = async(setId: number) => {
        for(let i = 0; i < blankCardList.length;i++){
            const card: FlashCardDTORequest = {userId: user?.userId, setId: setId, question: blankCardList[i].question, answer: blankCardList[i].answer};
            console.log('Making dto card: ' + card);
            console.log('Adding the card...');
            const response = await addFlashCard(card);
            console.log('Added card successfully');
        }

    }
    // adds a blank card on button click (only on button click)
    const addBlankCard = () =>{
        console.log("should only add on click...");
        setAddCardTrigger(addCardTrigger + 1); //triggers the change state (probably a better way to do this, but I digress)
        let temp = blankCardList.slice();
        console.log(temp);
        cardIdRef.current +=1;
        const newDefault = {flashCardId:cardIdRef.current,userId: user?.userId, setId: 0, question: "", answer: ""};
        temp.push(newDefault);
        console.log(temp);

        setBlankCardList(temp);

    }

    // makes it so the cards only add on click (not on rerender or anything)
    const memoizedAddBlankCard = useCallback(addBlankCard, [addCardTrigger])


    const removeACard = (card: any) => {
        console.log("should remove a card...");
        setRemoveCardTrigger(removeCardTrigger + 1);

        if(blankCardList.length - 1 > 0){
            let temp = blankCardList.splice(blankCardList.indexOf(card), 1) //this works somehow 
        }
        else{
            alert("Need at least 1 card to create a set!");
        }
    }


    let spawnBlankCards = blankCardList.map((b, index) => (
                <div style={{display: 'flex', paddingBottom: 5}}>
                    <BlankCard index={index} card={b} updateCards={removeACard}/>
                </div>
            )
    )
   
    return(
        <div style={{position: 'relative', top: 10}}>
            <div style={{display: 'flex', flexWrap: 'wrap', }}>
                <div style={{display: 'inherit', width: '100%', flexDirection: 'row', alignItems: 'center'}}>
                    <div style={{width: '50%', padding: 10}}>
                        <div style={{textAlign: 'left'}}>
                            <h4>Create a new flashcard set</h4>
                            <input className="makeInput" type="text" placeholder="Enter set title..." value={title} onChange={e => setTitle(e.target.value)}/>
                        </div>
                    </div>
                    <div style={{width: '50%', textAlign: 'right', padding: 10}}>
                        <button id="createButton" disabled={disabled} onClick={createSet}>Create</button>
                    </div>
                   

                </div>
                <div style={{width: '100%', marginTop: 20, display: 'flex', flexDirection: 'column', justifyContent: "space-between"}}>
                        {spawnBlankCards}
                </div>

                <div style={{width: '100%', display: 'flex' }}>
                        <AddCardButton addCardTrigger={addCardTrigger} updateCards={memoizedAddBlankCard} />
                </div>
                   
            </div>
        </div>
    )

};


export default MakeSet;