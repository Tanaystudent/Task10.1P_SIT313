import React from 'react';
import Card from './Card'
import './Card.css'
import staffList from './staffList'


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
function CardList() {
    return (
        <div className='row'>
           { staffList.map(cardComponent)}
        </div>
    )

}

export default CardList