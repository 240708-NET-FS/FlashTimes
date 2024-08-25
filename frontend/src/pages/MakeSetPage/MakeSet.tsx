import React, {useEffect, useState} from "react";
import "./styles/MakeSetStyles.css"
import BlankCard from "./components/BlankCard";
import AddCardButton from "./components/AddCardButton";

const MakeSet = () => {
    const [disabled, setDisabled] = useState<boolean>(true);
    const [title, setTitle] = useState<string>("");
    const [addCard, setAddCard] = useState<null | boolean>(null);
    const [remove, setRemove] = useState(false); 

    // replace with something more stable
    const [blankCardList, setBlankCardList] = useState([null]);

    useEffect(()=> {
        title.length > 0 ? setDisabled(false) : setDisabled(true);
    }, [title])

    // useRef to get previous 
    useEffect(()=> {
        setAddCard(null);
    }, [])

    useEffect(()=>{
        if(addCard !== null){
            let temp = blankCardList.slice();
            temp.push(null);
            setBlankCardList(temp);
        }
       
    }, [addCard])

    const spawnBlankCards = blankCardList.map((b, index) => (
                <div style={{display: 'flex', paddingBottom: 5}}>
                    <BlankCard index={index  + 1} remove={remove} setRemove={setRemove} />
                </div>
            )
    )

    const deleteCard = () => {

    }
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
                        <button id="createButton" disabled={disabled}>Create</button>
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