import { getSetById, updateSet } from "@services/SetService";
import React, { useEffect, useRef, useState, useCallback, useContext} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SetDTO, FlashCardDTORequest, UpdateSetDTO, UpdateFlashCardRequestDTO } from "types/types";
import "../MakeSetPage/styles/MakeSetStyles.css";
import BlankCard from "pages/MakeSetPage/components/BlankCard";
import AddCardButton from "pages/MakeSetPage/components/AddCardButton";
import { UserContext } from "contexts/UserContext";
import { addFlashCard, deleteFlashCard, updateFlashCard } from "@services/FlashCardService";


const EditPage = () => {
    const {setId} = useParams();
    const {user} = useContext(UserContext);

    const [set, setSet] = useState<SetDTO | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [disabled, setDisabled] = useState(true);
    const [cards, setCards] = useState<any>([]);
    const [newCards, setNewCards] = useState<any>([]);
    const [title, setTitle] = useState<any>("");

    const [addCardTrigger, setAddCardTrigger] = useState(0);
    const [removeCardTrigger, setRemoveCardTrigger] = useState(0);

    const cardIdRef = useRef(0);
    const navigate = useNavigate();


    useEffect(()=> {
        if(setId){
            const fetchSet = async()=> {
                try{
                    console.log('Fetching set...');
                    const response = await getSetById(parseInt(setId));
                    setSet(response);
                    setCards(response.flashcards);
                    cardIdRef.current = response.flashcards[response.flashcards.length - 1].flashcardId;
                    setTitle(response.setName);
                    setLoading(false);
                }catch(error){
                    console.error(error);
                }
            }
            fetchSet();

        }
    }, [])



    useEffect(()=> {
        title.length > 0 && cards.length > 0 ? setDisabled(false) : setDisabled(true);
    }, [title])


    useEffect(()=> {
        console.log(cards);
    }, [cards])



    const updateTheSet = async() => {
        console.log('Updating the set...');
        try{
            await updateTitle();
            await updateOldCards();
            await addAllCardsToSet(parseInt(setId));
            navigate(`/set/${parseInt(setId)}`);
        }catch(error){
            console.error(error);
        }


    }

    const updateTitle = async()=> {
        try{
            const newSet: UpdateSetDTO = {setName: title, userId: user?.userId}
            const response = await updateSet(parseInt(setId), newSet);

            // console.log(response);

        }catch(error){
            console.error(error);

        }
    }

    // updates every old card, regardless of change
    const updateOldCards = async()=> {
        for(let i=0; i < cards.length;i++){
            const card: UpdateFlashCardRequestDTO = {userId: user?.userId, setId: parseInt(setId), question: cards[i].question, answer: cards[i].answer }
            console.log('Updating the card...');
            const response = await updateFlashCard(cards[i].flashcardId, card);
            console.log(response);
            console.log('Updated card successfully');

        }

    }

    const addAllCardsToSet = async(setId: number) => {
        for(let i = 0; i < newCards.length;i++){
            const card: FlashCardDTORequest = {userId: user?.userId, setId: setId, question: newCards[i].question, answer: newCards[i].answer};
            console.log('Making dto card: ' + card);
            console.log('Adding the card...');
            const response = await addFlashCard(card);
            console.log('Added card successfully');
        }

    }
    // adds a blank card on button click (only on button click)
    const addBlankCard = async() =>{
        console.log("should only add on click...");
        setAddCardTrigger(addCardTrigger + 1);
        let temp = newCards.slice();
        cardIdRef.current += 1;
        const newDefault = {userId: user?.userId, setId: parseInt(setId), question: "", answer: "", flashcardId: cardIdRef};
        temp.push(newDefault);
        console.log(temp);
        setNewCards(temp);
        
    }

    // makes it so the cards only add on click (not on rerender or anything)
    const memoizedAddBlankCard = useCallback(addBlankCard, [addCardTrigger])

    const removeACard = async (card: any) => {
        console.log("removing a card...");
        setRemoveCardTrigger(removeCardTrigger + 1);
        if(cards.length - 1 > 0 || newCards.length - 1 > 0){
            // find card from old and new list
            if(findCard(card)){
                let temp = cards.filter((c: any) => c !== card);
                setCards(temp);
                // console.log(cards.indexOf(card));
                // cards.splice(cards.indexOf(card), 1);
                
                await deleteCard(card.flashcardId);
            }else{
                let temp = newCards.filter((c: any) => c !== card);
                setNewCards(temp);
                // setNewCards(temp);
            }
        }else{
            alert('Must have at least 1 card in set!');
        }

    }

    const deleteCard = async(id: number) => {
        try{
            const response = await deleteFlashCard(id);
            console.log(response);
        }catch(error){
            console.error(error);
        }

    }

    const findCard = (card: any) => {
        return cards.find((c:any)=> c.flashcardId === card.flashcardId);   
    }

    const spawnCards = cards.map((c:any, index: number) =>

        <div style={{display: 'flex', paddingBottom: 5}}>
            <BlankCard index={index} card={c} updateCards={removeACard}/>
        </div>
    
    )

    const spawnNewCards = newCards.map((c: any, index: number) => 
        <div style={{display: 'flex', paddingBottom: 5}}>
            <BlankCard index={index} card={c} updateCards={removeACard}/>
         </div>
    )

    const goBack = () => {
        console.log("Navigating back to set page...");
        navigate(`/set/${setId}`);

    }

    return(
        loading ? <div><h2>Loading...</h2></div> :
        <div style={{position: 'relative', top: 10}}>
            <div style={{textAlign: 'left'}}>
                <h4 id="backSet" onClick={goBack}>
                    {"< Back to Set"}
                </h4>

            </div>
            
        <div style={{display: 'flex', flexWrap: 'wrap', }}>
            
            <div style={{display: 'inherit', width: '100%', flexDirection: 'row', alignItems: 'center'}}>
                
                <div style={{width: '50%', padding: 10}}>
                    <div style={{textAlign: 'left'}}>
                        <h4>Update {set?.setName}</h4>
                        <input className="makeInput" type="text" placeholder="Enter new set title..." value={title} onChange={e => setTitle(e.target.value)}/>
                    </div>
                </div>
                <div style={{width: '50%', textAlign: 'right', padding: 10}}>
                    <button id="createButton" disabled={disabled} onClick={updateTheSet}>Update</button>
                </div>
               

            </div>
            <div style={{width: '100%', marginTop: 20, display: 'flex', flexDirection: 'column', justifyContent: "space-between"}}>
                    {spawnCards}
                    {spawnNewCards}
            </div>

            <div style={{width: '100%', display: 'flex' }}>
                    <AddCardButton addCardTrigger={addCardTrigger} updateCards={memoizedAddBlankCard} />
            </div>
               
        </div>
    </div>
    )
}

export default EditPage;