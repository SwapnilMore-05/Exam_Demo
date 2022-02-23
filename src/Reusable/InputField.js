import React from "react";

const InputField = ({ value, label, placeholder, type, onChange }) => {
  
  return (
    <div className="form-group">
      {label && <label htmlFor="input-field">{label}</label>}
      <input
        type={type}
        value={value}
        autoComplete="on"
        className="form-control"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default React.memo(InputField);