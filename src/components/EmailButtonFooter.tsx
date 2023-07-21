const EmailButtonFooter = () => {
  return (
    <div>
      <span className="bg-yellow-500  w-[290px] rounded-lg">
        <input
          className="py-1 px-2 rounded-l-lg"
          type="email"
          placeholder="Email"
        />
        <span className="py-[5px] px-2 rounded-r-lg bg-yellow-500">sign up</span>
      </span>
    </div>
  );
};

export default EmailButtonFooter;
