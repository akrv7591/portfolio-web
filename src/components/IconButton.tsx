import { HTMLAttributes, ReactNode } from "react";

type Props = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

const IconButton = ({ children, ...divAttributes }: Props) => {
  return (
    <div
      {...divAttributes}
      className="rounded-full hover:bg-opacity-10 hover:bg-slate-500 cursor-pointer p-2  flex items-center justify-center overflow-hidden focus-visible:bg-red-700"
    >
      {children}
    </div>
  );
};

export default IconButton;
