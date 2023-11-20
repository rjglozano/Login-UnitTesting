import React from "react";

const TextInput = ({ value, onChange, placeholder, ...props }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="border border-black rounded-md p-2 m-2"
      {...props}
    />
  );
};

export default TextInput;
