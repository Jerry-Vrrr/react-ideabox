import React, { Component } from 'react';

const Form = () => {
  return (
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
  )
}

export default Form;
