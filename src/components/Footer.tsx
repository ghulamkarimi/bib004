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

      <div className="grid sm:grid-cols-1 bg-yellow-400 gap-10 place-items-center lg:grid-cols-3 py-12 px-20 border-r-2 ">
        <div className="flex flex-col gap-3 ">
          <span className="flex gap-4 items-center  ">
            <BsCheck2All className="text-green-700" />
            <p className="uppercase text-2xl tracking-[.25em] text-green-700">
              hook
            </p>
          </span>
          <p>Van-Recum-strasse 6</p>
          <p>55545 Bad Kreuznach</p>
          <p className="uppercase">deutschland</p>
          <p className="font-bold">{"(671)-4568654"}</p>
        </div>

        <nav>
          <p className="uppercase mb-4 text-green-700">sitemap</p>
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
          <p className="uppercase text-green-700  ">
            want our best marketing tipps?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            reiciendis odio molestias.
          </p>
          <span className="bg-yellow-500 cursor-pointer w-[260px] rounded-lg">
            <input
              className="p-1 rounded-l-lg outline-none"
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
