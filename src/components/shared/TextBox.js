import React from "react";

const TextBox = ({ name, text, label, onChange }) => {
  return (
    <div>
      <label for={name}>{label}</label>:
      <input type="text" name={name} value={text} onChange={onChange} />
    </div>
  );
};

export default TextBox;
