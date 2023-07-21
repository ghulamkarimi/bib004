import React from "react";
import { TbTransitionTop } from "react-icons/tb";

interface ButtonTopProps {
  goTopRef: React.RefObject<HTMLDivElement>;
}
const ButtonTop: React.FC<ButtonTopProps> = ({ goTopRef }) => {
  const goTop = () => {
    const element = goTopRef.current;
    if (element) {
      element.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  };
  return (
    <div className="">
      <span className="text-3xl absolute right-6 bottom-4 " onClick={goTop}>
        <TbTransitionTop />
      </span>
    </div>
  );
};

export default ButtonTop;
