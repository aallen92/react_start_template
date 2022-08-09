import React from "react";

function TextField({
  label,
  value,
  type,
  placeholder,
  autoComplete,
  onChange,
  disabled,
}) {
  return (
    <div className='flex flex-col mt-2 mb-4'>
      <label className='mb-2'>{label}</label>
      <input
        className='p-2 h-10 border rounded-lg'
        value={value}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
}

export default TextField;
