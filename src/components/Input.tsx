import React from "react";
import { InputProps } from "../interfaces/InputProps";
import { SpriteIcon } from "./SpriteIcon";
import classNames from "classnames";

const Input: React.FC<InputProps> = ({
  defaultValue,
  value,
  label,
  placeholder,
  icon,
  iconClassName,
  onChange,
}) => {
  const iconStyles = classNames("!h-4 !w-4", iconClassName);
  const inputStyles = classNames(
    "bg-input w-full shadow-input regular-body rounded-[10px] p-2 text-dark-primary truncate",
    {
      "pl-7": icon,
    }
  );

  return (
    <div className="flex flex-1 flex-col gap-2">
      {label && (
        <label className="regular-subheadline text-dark-primary">{label}</label>
      )}
      <div className="relative">
        {icon && <SpriteIcon icon={icon} className={iconStyles} />}
        <input
          type="text"
          placeholder={placeholder}
          defaultValue={defaultValue}
          value={value}
          onChange={onChange}
          className={inputStyles}
        />
      </div>
    </div>
  );
};

export default Input;
