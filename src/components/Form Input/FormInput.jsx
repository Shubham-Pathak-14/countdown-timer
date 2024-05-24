import React, { useState } from "react";
import "./FormInput.css";

const InputForm = () => {
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // onDateSelect(date);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="datetime-local"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
        className="input-field"
      />
      <button type="button">Start Timer</button>
    </form>
  );
};

export default InputForm;
