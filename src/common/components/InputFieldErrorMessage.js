import React from 'react';
import './InputFieldErrorMessage.css';

// Shows error message near input box
const InputFieldErrorMessage = ({ message }) => {
  if (message !== '') {
    return (
      <span className="input-field-error-message-text pull-left">
        {' '}*{message}{' '}
      </span>
    );
  } else {
    return null;
  }
};

export default InputFieldErrorMessage;
