import React from 'react'
import { Link } from 'react-router-dom'

function CardItem(props) {
    return (
        <>
          <li className="cards__item">
              <div className="card__item__link">
                  <figure className="cards__item__pic-wrap" data-category={props.label}>
                      <img src={props.src}  className="cards__item__img"/>
                  </figure>
                  <div className="cards__item__info">
                      <h2 className="cards__item__text">{props.text}</h2>
                  </div>
              </div>
          </li>  
        </>
    )
}

export default CardItem;
