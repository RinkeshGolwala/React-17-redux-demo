import React from 'react';
import Form from '../features/Form';

class Homepage extends React.Component {
  state = {
    textInput: '',
    numberInput: 0
  }
  render() {
    return (
      <section className="home-container">
        <Form />
      </section>
    );
  }
}

export default Homepage;
