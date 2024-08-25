import React from "react";
import SetBox from "./SetBox";


const SetsContainer = ({sets}: {sets: any[]}) => {


    const mapSets  = sets.map(s => (
        <div style={{flexBasis: '25%', display: 'inherit', alignItems: 'center', justifyContent: 'center', padding: 5 }}>
            <SetBox set={s} />
        </div>


    ))


    return(
        <div style={{alignItems: 'center'}}>
            <div style={{border: 'solid red', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}} >
                    {mapSets}
            </div>

        </div>
)
}

export default SetsContainer;