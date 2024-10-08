import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { SetDTO } from "types/types";
import SetCarousel from "./components/SetCarousel";
import { getSetById } from "@services/SetService";
import { AiFillEdit } from "react-icons/ai";

const SetPage = () => {
    const {setId} = useParams();

    const [set, setSet] = useState<null | SetDTO>(null);
    const [cards, setCards] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [hover, setHover] = useState(false);
    const [setNameDisabled, setSetNameDisabled] = useState(true);
    const [setTitle, setSetTitle]  = useState<string>("");

    const navigate = useNavigate();
    const location = useLocation();



    useEffect(()=> {
        if(setId){
            const fetchSet = async()=> {
                try{
                    console.log("Getting set by id...");
                    const response = await getSetById(parseInt(setId));
                    
                    console.log(response.flashcards);
                    setSet(response);
                    setCards(response.flashcards);
                    setSetTitle(response.setName);
                    console.log("Got set by id");
                    setLoading(false);
                }catch(error){
                    console.error(error);
                }
            }
            fetchSet();
        }
        
    },[]);


    const handleEditHover = (e: any) => {
        if(e){
            e.type === 'mouseover' ? setHover(true) : setHover(false);
        }
    }

    const editSet = () => {
        // navigate to an edit page
        navigate(`/edit-set/${set?.setId}`);

    }
   
 
    return(
        <div style={{display: 'inherit', width: '100%',  justifyContent: 'center', alignItems: 'center'}}>
            <div style={{display: 'flex',}}>
            
            {loading ? <div><h2>Loading...</h2></div>:
                <div>
                    <div style={{flexDirection: 'row', display: 'flex', alignItems:'center'}}>
                        <div style={{width: '75%', textAlign: 'left'}}>
                            <input 
                                className="setTitle" 
                                type="text" 
                                value={setTitle} 
                                style={!setNameDisabled ? {borderBottom: "solid",borderBottomWidth: 2, borderBottomColor: "orange"}: undefined}
                                disabled={setNameDisabled}
                                onChange={e => setSetTitle(e.target.value)}
                                onKeyDown={()=> setSetNameDisabled(true)}
                                />
                            {/* <h2>{set?.setName}</h2> */}
                        </div>
                        <div className="editButton" style={{width: '25%', textAlign: 'right'}}>
                            <AiFillEdit 
                                size={32}
                                color={hover ? "orange" :"#94bdde"}
                                onMouseOver={handleEditHover}
                                onMouseOut={handleEditHover}
                                onClick={editSet}
                            />
                        
                        </div>
                    </div>
                    
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <SetCarousel set={set} cards={cards} currentCard={cards[0]}/>
                        {/* <SetGallery set={set}/> */}

                    </div>
                </div>}


            </div>
        </div>
    )
}

export default SetPage;