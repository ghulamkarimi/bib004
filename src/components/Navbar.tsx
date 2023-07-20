import { NavLink } from "react-router-dom";
import { AiOutlineBars } from "react-icons/ai";
import ToggleButton from "./ToggleButton";
import Smallmenu from "./Smallmenu";
import { useContext } from "react";
import { AppContext } from "../AppContext";

const Navbar = () => {
  const { isLight, isActiveMenu, menuHandler } = useContext(AppContext);
  return (
    <header
      className={`flex px-4 gap-4 py-2 items-center sticky top-0 justify-around ${
        isLight ? "bg-slate-400 " : "bg-yellow-400"
      }`}
    >
      <AiOutlineBars
        className={`text-2xl flex md:hidden ${
          isActiveMenu ? "hidden" : "flex"
        }`}
        onClick={menuHandler}
      />
      <h1 className=" text-blue-700 text-2xl">Pesonalverwaltung</h1>
      <ul className=" gap-8 hidden md:flex ">
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/kontakt">Kontakt</NavLink>
        </li>
      </ul>
      <ToggleButton />
      <Smallmenu />
    </header>
  );
};

export default Navbar;
