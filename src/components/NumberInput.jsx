import { useState } from 'react';

function NumberInput(props) {  
  return (
    <div className="input-container">
      <label>Number Input: </label>
      <input
        type='number'
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}

export default NumberInput;
