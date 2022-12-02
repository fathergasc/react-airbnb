import React from "react";
import photoGrid from '../img/photo-grid.png'

export default function Hero() {
    return (
        <section className="hero">
            <img className="hero-img" src={photoGrid} alt="" />
            <h1 className="hero-header">Online Experiences</h1>
            <p className="hero-paragraph">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}