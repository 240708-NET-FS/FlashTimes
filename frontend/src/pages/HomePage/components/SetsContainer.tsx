import React, { useContext, useEffect, useState } from "react";
import SetBox from "./SetBox";
import { UserContext } from "contexts/UserContext";
import { getUserEntity } from "@services/UserService";
import { getSets } from "@services/SetService";
import { filterSetsById } from "utilities/helpers";
import { SetDTO } from "types/types";
import { deleteSet } from "@services/SetService";
import { useLocation, useNavigate } from "react-router-dom";


const SetsContainer = () => {

    const {user} = useContext(UserContext);
    const [sets, setSets] = useState<null | SetDTO[]>(null);
    const [loading, setLoading] = useState<null | boolean>(null);
    const [pageLoaded, setPageLoaded] = useState(false);

    



    useEffect(()=> {
        if(user){
            const fetchSets = async()=> {
                try{
                    setLoading(true);
                    const response = await getSets();
                    console.log(response);
                    // see if possible to get an endpoint for this from backend 
                    const filteredResponse = filterSetsById(user.userId, response); 
                    setSets(filteredResponse);
                    setLoading(false);
                }catch(error){
                    console.error(error);
                }
            }
    
            fetchSets();
        }
    }, [])


    const handleRemove = async(id: number) => {
        // remove from list, then remove from db
        removeFromList(id);
        removeFromDB(id);

        
    }

    const removeFromList = (id: number)=>{
        // get obj
        var card:any = sets?.find(c => c.setId === id);
        let temp:any = sets?.slice();
        temp.splice(temp.indexOf(card), 1);
        setSets(temp);


    }

    const removeFromDB = async(id: number)=>{
        try{
            console.log("Removing set from db...");
            const response = await deleteSet(id);
            console.log("Successfully removed set from db!");
        }catch(error){
            console.error(error);
        }

    }
    



    const mapSets  = sets?.map(s => (
        <div style={{display: 'inherit',padding: 5}}>
            <SetBox set={s} handleRemove={handleRemove}/>
        </div>


    ))


    return(
        <div style={{alignItems: 'center',  }}>
            {loading ? <div><p>Loading...</p></div>:
            
            sets ?
                sets.length > 0 ?
                <div>
                    <div style={{alignSelf: 'flex-start', textAlign: 'left'}}>
                        <h3>Recent Sets</h3>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}} >
                            {mapSets}
                    </div>
                </div>:
                <div >
                Create a set today!
            </div>
            :
            null
                
            
        }

        </div>
)
}

export default SetsContainer;