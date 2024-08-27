import React, { useState } from "react";
import {AiOutlinePlusCircle} from "react-icons/ai";
import "../styles/MakeSetStyles.css";



// make prop interface or something


const AddCardButton = ({addCardTrigger, updateCards }: {addCardTrigger: any, updateCards: any}) => {
    const [hover, setHover] = useState(false);

    const handleHover = (e: any) => {
        if(e){
            e.type === "mouseover" ? setHover(true): setHover(false);
        }

    }
    
    return(
        <div id="addButton" onMouseOver={handleHover} onMouseOut={handleHover} onClick={updateCards}>
            <p style={{fontWeight: 'bold', }}>Add FlashCard +</p>
                {/* <AiOutlinePlusCircle 
                    size={50}
                    color={hover ? "white" : "#94bdde"} 
                    />
            */}
        </div>
    )

}

export default React.memo(AddCardButton);