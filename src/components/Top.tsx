import { BiArrowToTop } from "react-icons/bi";
interface buttonTopParaps {
  goTopRef: React.RefObject<HTMLDivElement>;
}
const Top: React.FC<buttonTopParaps> = ({ goTopRef }) => {
  const goTop = () => {
    const element = goTopRef.current;
    if (element) {
      element.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  };
  return (
    <div className=" flex justify-end   " onClick={goTop}>
      <BiArrowToTop className="text-5xl  border  rounded-full bg-slate-500" />
    </div>
  );
};

export default Top;
