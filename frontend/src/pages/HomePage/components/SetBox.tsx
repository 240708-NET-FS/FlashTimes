import React, { useContext, useEffect } from "react";
import "../styles/HomeStyles.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "contexts/UserContext";

const SetBox = ({set}: {set: any}) => {

    const navigate = useNavigate();


    const handleClick = () => {
        console.log("Navigating to set page...");
        navigate(`/set/${set.setName}`);
    }

    return(
        <div className="setBox" onClick={handleClick}>
            <div className="setTab">
                <p className="setTabText">{set.setLength} Cards</p>
            </div>
            <div className="setTextWrap">
                <p className="setText" onClick={handleClick}>{set.setName}</p>
            </div>
        </div>
        
    )

}

export default SetBox;