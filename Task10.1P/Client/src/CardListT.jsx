import React from 'react';
import Card from './Card'
import './Card.css'
import tutorialList from './tutorialList'

 function cardComponent(component,  i)
 {
    return <Card
    key={component.key}
    avatar={component.avatar}
    title={component.title}
    description={component.description}
    rating={component.rating}
    author={component.author}
/>
 }
function CardListT() {
    return (
        <div className='row'>
           { tutorialList.map(cardComponent)}
        </div>
    )

}

export default CardListT