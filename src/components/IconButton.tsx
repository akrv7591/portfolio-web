import { HTMLAttributes, ReactNode } from "react";

type Props = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

const IconButton = ({ children, ...divAttributes }: Props) => {
  return (
    <div
      {...divAttributes}
      className="rounded-full min-w-3 hover:bg-opacity-10 hover:bg-slate-500 cursor-pointer w-9 h-9  flex items-center justify-center overflow-hidden focus-visible:bg-red-700"
    >
      {children}
    </div>
  );
};

export default IconButton;
