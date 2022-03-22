import React, { Component } from 'react';
import "./ideas.css"
import Card from './Card'



const Ideas = ( {ideas} ) => {

  const ideaCards = ideas.map(idea => {
    return (
      <Card className ='card-section'
        title={idea.title}
        description={idea.description}
        id={idea.id}
        key={idea.id}
      />
    )
  })

  return (
    <div className='ideas-container'>
      {ideaCards}
    </div>
  )
}

export default Ideas;
