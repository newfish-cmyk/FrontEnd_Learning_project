import React from "react";

export default function Card(props){
    // console.log(props.item)
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online"){
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`./img/${props.coverImg}`} alt="coverimg" className="card--image"/>
            <div className="card--stats">
                <img src="./img/star-fill.png" alt="star-fill" className="card--star"/>
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) •&nbsp;</span>
                <span className="gray"> {props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price} </span>/ person</p>
        </div>
    )
}