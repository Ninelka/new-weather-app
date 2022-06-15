import React from "react";

export interface InputProps {
  defaultValue?: string;
  value?: string;
  label?: string;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}
