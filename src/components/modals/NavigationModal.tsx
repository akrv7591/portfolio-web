import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import IconButton from "../IconButton";

type Props = {
  open: boolean;
  onClose: () => void;
};

const NavigationModal = ({ open, onClose }: Props) => {
  const [blur, setBlur] = React.useState("backdrop-blur-none");
  React.useEffect(() => {
    setBlur("backdrop-blur-sm");
  }, []);
  return (
    // <CSSTransition in={open} timeout={300} classNames="nav-modal" unmountOnExit onExited={onClose}>
    <div
      className={`fixed top-0 left-0 bottom-0 right-0 duration-500 ${blur} ${
        blur === "backdrop-blur-none" ? "opacity-0" : "opacity-100"
      } dark:bg-card/50 bg-secondary/50`}
    >
      <div className="flex justify-end p-4">
        <IconButton onClick={onClose} className="">
          <IoCloseOutline className="text text-2xl animate__animated animate__rotateIn" />
        </IconButton>
      </div>
      <div className="flex flex-col items-center  justify-center h-full space-y-5">
        <Link to={"/#"} className={"nav-link text-sm"}>
          Home
        </Link>
        <Link to={"/#"} className={"nav-link"}>
          About{" "}
        </Link>
        <Link to={"/#"} className={"nav-link"}>
          Blog
        </Link>
        <Link to={"/#"} className={"nav-link"}>
          Portfolio
        </Link>
      </div>
      {/* <div className="fixed top-0 left-0 bottom-0 right-0 backdrop-blur-sm dark:bg-card/50 bg-secondary/50  -z-10"></div> */}
    </div>
    // </CSSTransition>
  );
};

export default NavigationModal;
