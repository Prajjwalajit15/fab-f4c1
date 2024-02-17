import React from 'react';

const Input = ({ type, value, onChange, valid, errorMessage, label }) => {
  return (
    <div className="form-control">
      <label>{label}:</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        style={{ borderColor: valid ? 'green' : 'red' }}
      />
      {!valid && <p className="error">{errorMessage}</p>}
    </div>
  );
};

export default Input;
