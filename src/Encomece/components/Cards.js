import React from 'react'
import CardItem from './CardItem'
import Image2 from "../assets/Images/SP_img/Group 272.webp";
import Image3 from "../assets/Images/SP_img/Group 273.webp";
import Image4 from "../assets/Images/SP_img/Group 274.webp";
import Image5 from "../assets/Images/SP_img/Group 275.webp";
import './Cards.css';
function Cards() {
    return (
        <div className="cards">
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem src={Image2}
                            text="Research & Analysis"
                            label="S-P"
                        />
                        <CardItem src={Image3}
                            text="Strategy & Planning"
                            label="S-P"
                        />
                        <CardItem src={Image4}
                            text="Structure & Prototyping"
                            label="S-P"
                        />
                        <CardItem src={Image5}
                            text="Budget & Requirement"
                            label="S-P"
                        />
                    </ul>
                    
                </div>
            </div>
        </div>
    )
}

export default Cards;
