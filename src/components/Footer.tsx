import { useContext } from "react";

import { AppContext } from "../AppContext";
import EmailButtonFooter from "./EmailButtonFooter";
import NavFooter from "./NavFooter";
import HookFooter from "./HookFooter";

const Footer = () => {
  const { isLight } = useContext(AppContext);
  return (
    <div className={`${isLight ? "bg-slate-500 " : "bg-yellow-400"}`}>
      <span className=" footer-container flex flex-col justify-center items-center gap-4 bg-slate-600 ">
        <p className=" text-center mt-4  w-96 hidden font-bold md:flex ">
          want to hook better leads with hard-working digital marketing?
        </p>
        <button className="px-3 py-2 uppercase rounded-lg bg-yellow-400">
          get a free consultation now
        </button>
      </span>
      <div className="  grid grid-cols-1 py-12 px-4 border-r-2 place-items-center gap-6 lg:grid-cols-3">
        <HookFooter />
        <NavFooter />
        <div className="flex flex-col gap-4">
          <p className="uppercase text-yellow-800  ">
            want our best marketing tipps?
          </p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <EmailButtonFooter />
        </div>
      </div>
    </div>
  );
};

export default Footer;
