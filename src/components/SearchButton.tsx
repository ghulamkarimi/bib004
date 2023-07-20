import React, { useContext } from "react";
import { BsSearch } from "react-icons/bs";
import { AppContext } from "../AppContext";

const SearchButton: React.FC = () => {
  const { filter, setFilter } = useContext(AppContext);
  return (
    <div>
      <span className=" flex bg-yellow-500 w-[px] rounded-xl">
        <input
          className="p-1 rounded-l-lg"
          type="text"
          placeholder="search here..."
          value={filter}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFilter(e.target.value)
          }
        />
        <span className="px-4 py-2">
          <BsSearch />
        </span>
      </span>
    </div>
  );
};

export default SearchButton;
