import React, { Component } from 'react';
import Form from './form'
import Idea from './ideas'
class App extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <main>
      <h1>IdeaBox</h1>
      <p>Tell Us Your Ideas!</p>
      <Form/>
      <Idea/>
            </main>

    )
  }
}

export default App;
