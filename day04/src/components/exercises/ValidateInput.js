import React, { useState, useEffect } from 'react';

const ValidateInput = () => {
  const errorMessage = 'Please enter a valid name';
  const [value, setValue] = useState('');
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    if (isSubmitClicked)
      setIsValid(validate(value));
  }, [value, isSubmitClicked]);

  function validate(value) {
    return !!value;
  }
  return (
    <div>
      <input
        type="text"
        placeholder='Enter your name'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <br/>
      {!isValid && <label className="error-message">{errorMessage}</label>}
      <br/>
      <button onClick={() => setIsSubmitClicked(true)}>Submit</button>
    </div>
  );
};

export default ValidateInput;