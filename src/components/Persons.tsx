import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../AppContext";

const Persons = () => {
  const { person, filter } = useContext(AppContext);
  return (
    <div className="p-4 grid place-items-center gap-3  sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 ">
      {person
        .filter((person) =>
          person.name.toLowerCase().includes(filter.toLowerCase())
        )

        .map((p) => (
          <NavLink
            to={`/home/${p.id}`}
            className="flex flex-col w-[270px] border-b rounded-2xl  bg-slate-600 md:w-[400px] md:flex-row"
            key={p.id}
          >
            <img
              className="  rounded-l-2xl h-[300px] w-[270px] object-cover "
              src={`image/${p.imageUrl}.avif`}
              alt=""
            />
            <span className="flex flex-col items-center justify-center ml-3 gap-4">
              <h2 className="border-b w-full ">{p.name}</h2>
              <p className="border-b w-full ">{p.age}</p>
              <p className="border-b w-full ">{p.hobby}</p>
            </span>
          </NavLink>
        ))}
    </div>
  );
};

export default Persons;
