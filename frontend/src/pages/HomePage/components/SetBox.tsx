import React from "react";

const SetBox = ({set}: {set: any}) => {

    const boxStyle = {
        width: 175,
        height: 150,
        backgroundColor: 'white',
        borderRadius: 8

    }

    return(
        <div style={boxStyle}>
            <p style={{color: 'black'}}>{set.setName}</p>
        </div>
    )

}

export default SetBox;