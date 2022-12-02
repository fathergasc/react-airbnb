import React from "react";
import star from '../img/star.png'

export default function Card(props) {
    return (
        <div className="card">
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