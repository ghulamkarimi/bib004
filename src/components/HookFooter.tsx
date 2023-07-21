import { BsCheck2All } from "react-icons/bs";

const HookFooter = () => {
  return (
    <div>
      <div className="flex flex-col gap-3 ">
        <span className="flex gap-4 items-center  ">
          <BsCheck2All className="text-yellow-800" />
          <p className="uppercase text-2xl tracking-[.25em] text-yellow-800">
            hook
          </p>
        </span>
        <p>Van-Recum-strasse 6</p>
        <p>55545 Bad Kreuznach</p>
        <p className="uppercase">deutschland</p>
        <p className="font-bold">{"(671)-4568654"}</p>
      </div>
    </div>
  );
};

export default HookFooter;
