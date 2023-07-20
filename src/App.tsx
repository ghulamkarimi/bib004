import { useContext } from "react";
import Navbar from "./components/Navbar";
import { AppContext } from "./AppContext";
import { useRef } from "react";
import Router from "./Router";
import Footer from "./components/Footer";
import Top from "./components/top";

const App = () => {
  const { isLight } = useContext(AppContext);
  const goTopRef = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={goTopRef}
      className={`min-h-screen relative m-0 p-0  ${
        isLight ? "bg-slate-500   text-white" : "bg-slate-300  text-black"
      }`}
    >
      <Navbar />
      <Router />
      <Footer />
      <div className=" fixed bottom-12 right-3 ">
        <Top goTopRef={goTopRef} />
      </div>
    </div>
  );
};

export default App;
