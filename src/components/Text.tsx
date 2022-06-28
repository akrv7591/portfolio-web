import { HTMLAttributes, ReactNode } from "react";

type Props = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
};

const Text = ({ children, ...spanAttributes }: Props) => {
  return (
    <span {...spanAttributes} className={`${spanAttributes.className} text `}>
      {children}
    </span>
  );
};

export default Text;
