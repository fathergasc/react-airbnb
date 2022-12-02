import React from "react";
import star from '../img/star.png'

export default function Card(props) {

    let alertText 
    if (props.openSpots === 0) {
        alertText = "SOLD OUT"
    } else if (props.location === "Online") {
        alertText = "ONLINE"
    }

    return (
        <div className="card">

        {/* conditional rendering of soldout alert */}
        {/* {props.openSpots === 0 && <div className="availability"> SOLD OUT </div>} */}

        {/* conditional rendering of soldout/online alert */}
        {alertText && <div className="availability"> { alertText } </div>}
            <img src={`img/${props.img}`} alt="" className="card-img"/>
            <div className="card-infos">
                <img src={star} alt="" className="star-icon"/>
                <span>{props.rating}</span>
                <span className="gray-text">({props.reviewCount}) • </span>
                <span className="gray-text">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span>  / person</p>
        </div>
    )
}