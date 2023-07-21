import { NavLink } from "react-router-dom";

const NavFooter = () => {
  return (
    <div>
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
    </div>
  );
};

export default NavFooter;
