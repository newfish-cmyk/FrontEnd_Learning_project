import React from "react";

export default function Dice(props) {
    const style = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }

    return (
        <div className="dice-face" style={style} onClick={props.holdDice}>
            <h2 className="dice-font">{props.number}</h2>
        </div>
    )
}