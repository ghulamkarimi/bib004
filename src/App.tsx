import { useContext } from "react";
import Navbar from "./components/Navbar";
import { AppContext } from "./AppContext";

import Router from "./Router";
import Footer from "./components/Footer";

const App = () => {
  const { isLight } = useContext(AppContext);

  return (
    <div
      className={` m-0 p-0  ${
        isLight ? "bg-slate-500   text-white" : "bg-slate-300  text-black"
      }`}
    >
      <Navbar />
      <Router />
      <Footer />
    </div>
  );
};

export default App;
