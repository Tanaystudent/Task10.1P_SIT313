import React from 'react';
import './Card.css'
function Card(props)
{
   return(
      <div className="row">
    <div className="column">
    <img src= {props.avatar} alt ='staff' width ={200} height ={200}/>
    <h3>{props.title} </h3>
    <p> {props.description}</p>
    <h6>{props.rating}</h6>
    <h6>{props.author}</h6>


    </div>
    </div>
   )

}

export default Card;