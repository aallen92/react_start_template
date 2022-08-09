import React from "react";

function Button({ label, onClick, disabled, selected }) {
  return (
    <button
      className={
        selected
          ? "bg-green-500 disabled:bg-slate-200 text-white mt-2 px-6 py-2 rounded-lg shadow-lg"
          : "bg-slate-500 disabled:bg-slate-400 text-white mt-2 px-6 py-2 rounded-lg shadow-lg"
      }
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

export default Button;
