import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <main>
      <h1>IdeaBox</h1>
      <p>Hi!</p>
      <form>
  <label>
    Title:
    <input type="text" name="name" />
  </label>
  <label>
    Description:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
            </main>
    )
  }
}

export default App;
