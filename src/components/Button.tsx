import { HTMLAttributes, ReactNode } from "react";

type Props = HTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

const Button = ({ children, ...buttonProps }: Props) => {
  return (
    <button className="btn" {...buttonProps}>
      {children}
    </button>
  );
};

export default Button;
