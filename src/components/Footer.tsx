import { useContext } from "react";
import { BsCheck2All } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { AppContext } from "../AppContext";

const Footer = () => {
  const { isLight } = useContext(AppContext);
  return (
    <div className={`h-[80vh] ${isLight ? "bg-slate-500 " : "bg-yellow-400"}`}>
      <div className=" footer-container flex flex-col justify-center items-center gap-4 bg-slate-600">
        <p className=" text-center mt-4  w-96 text-2xl font-bold  ">
          want to hook better leads with hard-working digital marketing?
        </p>
        <button className="px-3 py-2 uppercase rounded-lg bg-yellow-400">
          get a free consultation now
        </button>
      </div>

      <div className="  grid grid-cols-3 py-12 px-20 border-r-2 ">
        <div className="flex flex-col gap-3 ">
          <span className="flex gap-4 items-center  ">
            <BsCheck2All className="text-yellow-800" />
            <p className="uppercase text-2xl tracking-[.25em] text-yellow-800">
              hook
            </p>
          </span>
          <p>Van-Recum-strasse 6</p>
          <p>55545 Bad Kreuznach</p>
          <p className="uppercase">deutschland</p>
          <p className="font-bold">{"(671)-4568654"}</p>
        </div>

        <nav>
          <p className="uppercase mb-4 text-yellow-800">sitemap</p>
          <ul className="flex flex-col gap-4">
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
        </nav>
        <div className="flex flex-col gap-4">
          <p className="uppercase text-yellow-800  ">
            want our best marketing tipps?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            reiciendis odio molestias.
          </p>
          <span className="bg-yellow-500 w-[260px] rounded-lg">
            <input
              className="p-1 rounded-l-lg"
              type="email"
              placeholder="Email"
            />
            <span className="p-2">sign up</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
