import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { SetDTO } from "types/types";
import SetGallery from "./components/SetGallery";
import SetCarousel from "./components/SetCarousel";
import { getSetById } from "@services/SetService";

const SetPage = () => {
    const {setId} = useParams();

    const [set, setSet] = useState<null | SetDTO>(null);
    const [cards, setCards] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        if(setId){
            const fetchSet = async()=> {
                try{
                    console.log("Getting set by id...");
                    const response = await getSetById(parseInt(setId));
                    setSet(response);
                    setCards(response.flashcards);
                    console.log("Got set by id");
                    setLoading(false);
                }catch(error){
                    console.error(error);
                }
            }
    
            fetchSet();
        }
        
    }, [])

    // useEffect(()=> {
    //     setSet(state);
    // }, [])

 
    return(
        <div style={{display: 'inherit', width: '100%', border: 'solid red',  justifyContent: 'center', alignItems: 'center'}}>
            <div style={{display: 'flex',}}>
            
            {loading ? <div><h2>Loading...</h2></div>:
                <div>
                    <div style={{textAlign: 'left'}}>
                        <h2>{set?.setName}</h2>
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