import React from "react";
import star from '../img/star.png'

export default function Card(props) {

    let alertText 
    if (props.card.openSpots === 0) {
        alertText = "SOLD OUT"
    } else if (props.card.location === "Online") {
        alertText = "ONLINE"
    }

    return (
        <div className="card">

        {/* conditional rendering of soldout alert */}
        {/* {props.card.openSpots === 0 && <div className="availability"> SOLD OUT </div>} */}

        {/* conditional rendering of soldout/online alert */}
        {alertText && <div className="availability"> { alertText } </div>}
            <img src={`img/${props.card.img}`} alt="" className="card-img"/>
            <div className="card-infos">
                <img src={star} alt="" className="star-icon"/>
                <span>{props.card.stats.rating}</span>
                <span className="gray-text">({props.card.stats.reviewCount}) • </span>
                <span className="gray-text pl-1">{props.card.location}</span>
            </div>
            <p>{props.card.title}</p>
            <p><span className="bold">From ${props.card.price}</span>  / person</p>
        </div>
    )
}