import React, { Component } from 'react';
import "./ideas.css"
import Card from './Card'



const Ideas = ( {ideas} ) => {

  const ideaCards = ideas.map(idea => {
    return (
      <Card
        title={idea.title}
        description={idea.description}
        id={idea.id}
        key={idea.id}
      />
    )
  })

  return (
    <div className='card-section'>
      {ideaCards}
    </div>
  )
}

export default Ideas;
