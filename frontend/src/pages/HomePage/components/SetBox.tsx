import React from "react";
import "../styles/HomeStyles.css";
import { useNavigate } from "react-router-dom";

const SetBox = ({set}: {set: any}) => {

    const navigate = useNavigate();


    const handleClick = () => {
        console.log("to the set page!");
        navigate(`/set/${0}`);
    }

   

    return(
        <div className="setBox" onClick={handleClick}>
            <div className="setTab">
                <p className="setTabText">20 Cards</p>
            </div>
            <div className="setTextWrap">
                <p className="setText" onClick={handleClick}>{set.setName}</p>
            </div>
        </div>
        
    )

}

export default SetBox;