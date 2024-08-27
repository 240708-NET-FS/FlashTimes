import React, {useContext, useEffect, useMemo, useRef, useState} from "react";
import "./styles/MakeSetStyles.css"
import BlankCard from "./components/BlankCard";
import AddCardButton from "./components/AddCardButton";
import { CreateSetDTO, FlashCardDTORequest, UpdateSetDTO } from "types/types";
import { UserContext } from "contexts/UserContext";
import { createNewSet } from "@services/SetService";

const MakeSet = () => {
    const {user} = useContext(UserContext);
    const [disabled, setDisabled] = useState<boolean>(true);
    const [title, setTitle] = useState<string>("");
    const [addCard, setAddCard] = useState<boolean | null>(null);
    const [set, setSet] = useState<any>(null);
    

    const addRef = useRef<any>(true);
    // const [addCard, setAddCard] = useState<null | boolean>(null);
    const [remove, setRemove] = useState(false); 

    // default card
    const [blankCardList, setBlankCardList] = useState<FlashCardDTORequest[]>([{userId: user?.userId, setId: 0, question: "", answer: ""}]);

    const [removeCard, setRemoveCard] = useState<null | any>(null);
    // temporary ref till getting objs from backend
    const cardIdRef = useRef(0);

    useEffect(()=> {
        setAddCard(null);
        setRemoveCard(null);
    }, [])

    // if no title set, can't create the set
    useEffect(()=> {
        title.length > 0 ? setDisabled(false) : setDisabled(true);
    }, [title])


    const handleAdd = () => {
        // if(addCard !== null){
        //     let temp = blankCardList.slice();
        //     cardIdRef.current += 1;
        //     temp.push({id: cardIdRef.current, card: null});
        //     console.log(temp);
        //     setBlankCardList(temp);

        // }
       
    }

    const handleRemove = () => {
        // console.log(removeCard);
        // if(listContains(removeCard, blankCardList)){
        //     let temp = blankCardList.filter(c => c.id !== removeCard);
        //     setBlankCardList(temp);
        // }
        
    }
    

    useEffect(()=> {
        if(addCard !== null){
            handleAdd();
        }
    }, [addCard])

    useEffect(()=> {
        handleRemove();

    }, [removeCard])

    const listContains = (id: number, arr: any[]) => {
        return arr.filter(c => c.id === id).length > 0;
    }

    const createSet = async() => {
        try{
            console.log("creating the set...");
            const newSet: CreateSetDTO = {userId: user?.userId , setName: title};
            const response = await createNewSet(newSet);
            console.log(response);
            setSet(response);

        }catch(error){
            console.error(error);
        }
    }

    // ask to get setID in DTO

    
    // response doesn't return id, so unfortunately title immutable from here

    // const handleUpdateSet = async()=> {
    //     try{
    //         console.log("updating the set...");
    //         const updatedSet: UpdateSetDTO  = {userId: user?.userId, setName: title};
    //         // const response = await updateSet(updatedSet);
    //     }catch(error){
    //         console.error(error)
    //     }
    // }


    useEffect(()=>{
        console.log(blankCardList[0].question);
    }, [blankCardList])

    let spawnBlankCards = blankCardList.map((b, index) => (
                <div style={{display: 'flex', paddingBottom: 5}}>
                    <BlankCard index={index} card={b} setRemoveCard={setRemoveCard}/>
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
                        <AddCardButton addCard={addCard} setAddCard={setAddCard}/>
                </div>
                   
            </div>
        </div>
    )

};


export default MakeSet;