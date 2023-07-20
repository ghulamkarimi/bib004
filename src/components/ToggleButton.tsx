import { TbSun } from "react-icons/tb";
import { FaRegMoon } from "react-icons/fa";
import { useContext } from "react";
import { AppContext } from "../AppContext";
const ToggleButton = () => {
  const { isLight, setIsLight } = useContext(AppContext);
  const LightModus = () => {
    setIsLight(!isLight);
  };
  return (
    <div>
      <div
        className={`h-6 w-14 flex rounded-xl items-center duration-500 ${
          isLight ? "bg-slate-500 " : "bg-white"
        }`}
        onClick={LightModus}
      >
        <span
          className={`h-5 w-5 bg-slate-300 flex ml-1 rounded-full justify-center items-center duration-500 ${
            isLight ? "-translate-x-0.5" : "translate-x-7"
          }`}
        >
          <TbSun
            className={`bg-yellow-500 rounded-full h-5 w-5  ${
              isLight ? "hidden" : "flex"
            } `}
          />

          <FaRegMoon
            className={`bg-slate-400  h-5 w-5   rounded-full  ${
              isLight ? "flex" : "hidden"
            }`}
          />
        </span>
      </div>
    </div>
  );
};

export default ToggleButton;
