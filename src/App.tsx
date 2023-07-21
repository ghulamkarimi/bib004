import { useContext, useRef } from "react";
import Navbar from "./components/Navbar";
import { AppContext } from "./AppContext";
import Router from "./Router";
import Footer from "./components/Footer";

import ButtonTop from "./components/ButtonTop";

const App = () => {
  const { isLight } = useContext(AppContext);
  const goTopRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={` m-0 p-0 relative  ${
        isLight ? "bg-slate-500   text-white" : "bg-slate-300  text-black"
      }`}
      ref={goTopRef}
    >
      <Navbar />
      <Router />
      <Footer />
      <ButtonTop goTopRef={goTopRef} />
    </div>
  );
};

export default App;
