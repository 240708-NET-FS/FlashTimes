import React, { useContext, useEffect, useState } from "react";
import SetBox from "./SetBox";
import { UserContext } from "contexts/UserContext";
import { getUserEntity } from "@services/UserService";
import { getSets } from "@services/SetService";
import { filterSetsById } from "utilities/helpers";
import { SetDTO } from "types/types";


const SetsContainer = () => {

    const {user} = useContext(UserContext);
    const [sets, setSets] = useState<null | SetDTO[]>(null);
    const [loading, setLoading] = useState<null | boolean>(null);

    useEffect(()=> {
        if(user){
            const fetchSets = async()=> {
                try{
                    setLoading(true);
                    const response = await getSets();
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



    const mapSets  = sets?.map(s => (
        <div style={{display: 'inherit',padding: 5}}>
            <SetBox set={s} />
        </div>


    ))


    return(
        <div style={{alignItems: 'center',  }}>
            {loading ? <div><p>Loading...</p></div>:
            
            sets ?
                <div>
                    <div style={{alignSelf: 'flex-start', textAlign: 'left'}}>
                        <h3>Recent Sets</h3>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}} >
                            {mapSets}
                    </div>
                </div>
            :
                <div >
                    Create a set today!
                </div>
            
        }

        </div>
)
}

export default SetsContainer;