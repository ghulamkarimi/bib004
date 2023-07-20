import { useContext } from "react";
import { TbSearch } from "react-icons/tb";
import { AppContext } from "../AppContext";

const SearchButton:React.FC = () => {
  const{filter,setFilter} = useContext(AppContext);
  return (
    <span className=" rounded-2xl flex items-center w-72 h-8 bg-slate-700 ">
      <input
        className="rounded-2xl w-60 m-1 pl-2 outline-none"
        type="text"
        placeholder="search here..."
         value={filter}
         onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFilter(e.target.value)
        }
      />
      <TbSearch className="ml-2 text-yellow-500" />
    </span>
  );
};

export default SearchButton;
