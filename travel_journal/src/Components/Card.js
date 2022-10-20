import React from "react";

export default function Card(props){
    return (
        <div>
            <div className="card">
                <img className="card--image" src={`./image/${props.imageUrl}`} alt="pic"/>
                <div className="card--info">
                    <div className="card--line1">
                        <img src="./image/location.png" alt="loc"/>
                        <div className="location">{props.location}</div>
                        <a href={props.googleMapsUrl}>View on Google Maps</a>
                    </div>
                    <h1 className="title">{props.title}</h1>
                    <div className="date">{props.startDate} - {props.endDate}</div>
                    <div className="decription">{props.description}</div>
                </div>
            </div>
            <hr className="line"/>
        </div>
    )
}