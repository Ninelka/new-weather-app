import { IconPropsBase } from "../interfaces/IconPropsBase";

export const Icon = ({ path, ...props }: IconPropsBase) => {
  return <img {...props} src={path} alt="icon" />;
};
