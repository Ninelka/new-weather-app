import React from "react";
import { InputProps } from "../interfaces/InputProps";

const Input: React.FC<InputProps> = ({
  defaultValue,
  value,
  label,
  placeholder,
  onChange,
}) => {
  return (
    <div className="flex flex-1 flex-col gap-2">
      <label className="regular-subheadline text-dark-primary">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        className="bg-input shadow-input regular-body rounded-[10px] p-2 text-dark-primary"
      />
    </div>
  );
};

export default Input;
