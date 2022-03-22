import React, { Component } from 'react';
import "./ideas.css"
import Card from './Card'

const Idea = () => {
  return (
    <section className ='card-section'>
      <Card/>
      <Card/>
      <Card/>
    </section>
  )
}

export default Idea;
