import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TextInput from '../../components/TextInput';
import NumberInput from '../../components/NumberInput';
import Button from '../../components/Button';
import {
  textChange,
  numberChange,
  selectTextValue,
  selectNumberValue,
  selectForm,
  submitForm,
} from './formSlice';
import styles from './Form.module.css';

export default function Form() {
  const textValue = useSelector(selectTextValue);
  const numberValue = useSelector(selectNumberValue);
  const form = useSelector(selectForm);
  const dispatch = useDispatch();

  const dispatchForm = () => {
    dispatch(submitForm(form));
  }

  return (
    <div>
      <TextInput
        value={textValue}
        onChange={e => dispatch(textChange(e.target.value))}
      />
      <NumberInput
        value={numberValue}
        onChange={e => dispatch(numberChange(e.target.value))}
      />
      <div className={styles.buttonContainer} >
        <Button className={styles.primaryButton} onClick={dispatchForm} label='Submit' />
      </div>
      {/*  <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </button>
      </div> */}
    </div>
  );
}
