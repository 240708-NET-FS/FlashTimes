import React, { useContext, useEffect } from "react";
import "../styles/HomeStyles.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "contexts/UserContext";
import { AiOutlineClose } from "react-icons/ai";
import { deleteSet } from "@services/SetService";

const SetBox = ({set, handleRemove}: {set: any, handleRemove:any}) => {
    // TODO: remove set on click

    const navigate = useNavigate();

   


    const handleClick = () => {
        console.log("Navigating to set page...");
        navigate(`/set/${set.setId}`);
    }

    return(
        <div className="setBox" >
            <div className="setTab">
                    <div style={{width: '50%', textAlign: 'left', cursor: 'pointer'}}>
                        <AiOutlineClose 
                            size={28}
                            color={"#115871"}
                            onClick={()=> handleRemove(set.setId)}
                            
                            />
                    </div>
                    <div style={{width: '50%', textAlign: 'right'}}>
                        <p className="setTabText">

                            {set.setLength} Cards
                        </p>
                    </div>

                  
            </div>
            <div className="setTextWrap">
                <p className="setText" onClick={handleClick}>{set.setName}</p>
            </div>
        </div>
        
    )

}

export default SetBox;