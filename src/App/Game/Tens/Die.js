import React from "react";

export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "#fff",
    }
    return (
        <span 
            className={`game__dice__num ${props.isMatched ? "matched" : ""}`} 
            style={styles}
            onClick={props.holdDice}
        >
            {props.number}
        </span>
    );
}