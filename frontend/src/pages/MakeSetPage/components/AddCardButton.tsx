import React, { useState } from "react";
import {AiOutlinePlusCircle} from "react-icons/ai";
import "../styles/MakeSetStyles.css";




const AddCardButton = ({addCard, setAddCard}: {addCard: null | boolean, setAddCard: any}) => {
    const [hover, setHover] = useState(false);

    const handleHover = (e: any) => {
        if(e){
            e.type === "mouseover" ? setHover(true): setHover(false);
            // console.log(e);
        }

    }

    const handleAdd = () => {
        addCard ? setAddCard(!addCard) : setAddCard(true);
    }

    
    return(
        <div id="addButton" onMouseOver={handleHover} onMouseOut={handleHover} onClick={handleAdd}>
            <p style={{fontWeight: 'bold', }}>Add FlashCard +</p>
                {/* <AiOutlinePlusCircle 
                    size={50}
                    color={hover ? "white" : "#94bdde"} 
                    />
            */}
        </div>
    )

}

export default AddCardButton;