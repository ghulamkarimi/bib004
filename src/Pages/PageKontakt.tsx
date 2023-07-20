import { FaUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { HiUserCircle } from "react-icons/hi";
import { useContext } from "react";
import { AppContext } from "../AppContext";

const PageKontakt = () => {
  const { isLight } = useContext(AppContext);
  return (
    <div>
      <div
        className={`flex h-[80vh] justify-center items-center ${
          isLight ? "bg-slate-500" : "bg-slate-300"
        }`}
      >
        <div
          className={`bg-slate-600  flex flex-col mt-6 gap-6  py-6  w-[70vw] justify-center  items-center rounded-2xl ${
            isLight ? "text-white" : "text-black"
          }`}
        >
          <HiUserCircle className=" text-8xl  " />
          <h2 className="uppercase font-bold  ">Sign up</h2>

          <span className=" bg-white flex items-center rounded-lg  ">
            <FaUserCircle className=" ml-2 text-xl text-gray-500" />
            <input className="rounded-lg" type="text" placeholder="username" />
          </span>

          <span className=" bg-white flex items-center rounded-lg">
            <MdEmail className="ml-2 text-xl text-gray-500" />
            <input className="rounded-lg" type="text" placeholder="E-mail" />
          </span>

          <span className=" bg-white flex items-center rounded-lg">
            <RiLockPasswordFill className="ml-2 text-xl text-gray-500 " />
            <input className="rounded-lg" type="text" placeholder="Password" />
          </span>

          <span className=" bg-white flex items-center rounded-lg">
            <RiLockPasswordFill className="ml-2 text-xl text-gray-500" />
            <input
              className="rounded-lg
            "
              type="text"
              placeholder="Confirm Password"
            />
          </span>

          <button className=" bg-cyan-500 py-2 px-4 rounded-3xl text-sm uppercase">
            Create Account
          </button>
          <p className="text-[0.7rem]  ">Already have on account? Login here</p>
        </div>
      </div>
      <p className="text-center text-xl px-6 py-5">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
        veritatis aspernatur labore odio recusandae et eum eaque quo tempora,
        quidem eius repellendus nesciunt excepturi praesentium. Et modi impedit
        voluptatem explicabo?
      </p>
    </div>
  );
};

export default PageKontakt;
