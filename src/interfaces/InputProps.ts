import React from "react";

export interface InputProps {
  defaultValue?: string;
  value?: string;
  label?: string;
  placeholder?: string;
  icon?: string;
  iconClassName?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}
