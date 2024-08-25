import React from "react";
import { FlashCard } from "types/types";
import "../styles/MakeSetStyles.css";
import {AiFillCloseSquare} from "react-icons/ai";


const BlankCard = ({index, remove, setRemove}:{index: number, remove: any, setRemove: any}) => {

    return(
        <div className="blankCard">
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', width: '100%'}}>
                {/* <div style={{width: '50%'}}>
                    <p style={{padding: 2, fontSize: 16, textAlign: 'left', fontWeight: 'bold'}}>{index}</p>
                    
                </div> */}
                {/* <h5 style={{textAlign: 'left'}}>1</h5>  */}
                <div id="close" style={{width: '100%', textAlign: 'right'}}>
                    <AiFillCloseSquare size={32} color={"#115871"} onClick={()=> console.log("close it!")}/>
                </div>
            {/* <hr /> */}
            </div>

            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <div style={{width: '50%'}}>
                    <div style={{width: '95%', textAlign: 'left'}}>
                        <input className="cardInput" type="text" placeholder="Enter Question"/>
                    </div>
                </div>
                <div style={{width: '50%'}}>
                    <div style={{width: '95%'}}>
                        <input className="cardInput" type="text" placeholder="Enter Answer"/>
                    </div>
                </div>
               
            </div>
            
           
        </div>
    )
}

export default BlankCard;