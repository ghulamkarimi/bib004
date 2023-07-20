import { Navigate, Route, Routes } from "react-router-dom";
import PageHome from "./Pages/PageHome";
import PageAbout from "./Pages/PageAbout";
import PageKontakt from "./Pages/PageKontakt";
import Person from "./components/Person";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<PageHome />} />
        <Route path="/home/:IdPersonal" element={<Person />} />
        <Route path="/about" element={<PageAbout />} />
        <Route path="/kontakt" element={<PageKontakt />} />
      </Routes>
    </div>
  );
};

export default Router;
