import { useState } from 'react';

function TextInput(props) {
  return (
    <div className="input-container">
      <label>Text Input: </label>
      <input
        type='text'
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}

export default TextInput;
