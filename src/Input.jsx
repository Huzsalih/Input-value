import React, { useState } from "react";

function InputLogger() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    const newValue = event.target.value; // Get the input value
    setInputValue(newValue); // Update state
    console.log(newValue); // Log the input value to the console
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue} // Bind input value to state
        onChange={handleChange} // Handle changes
        placeholder="Type something..."
      />
      <p>Current Input: {inputValue}</p>
    </div>
  );
}

export default InputLogger;
