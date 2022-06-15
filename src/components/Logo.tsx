import { Link } from "react-router-dom";
import { IoCodeSlashOutline } from "react-icons/io5";

const Logo = () => {
  return (
    <Link className="text-4xl flex items-center overflow-y-hidden" to={"/"}>
      <IoCodeSlashOutline className="text-highlight" fontSize={"30px"} />
      <span className="ml-2 text-primary font-thin ">
        AKRV
        <span className="text-6xl leading-3 text-highlight animate__animated animate__infinite animate__flash ">.</span>
      </span>

      <span className="text-xl self-end text">dev</span>
    </Link>
  );
};

export default Logo;
