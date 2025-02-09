function Aside() {
  return (
    <div className="w-[340px] text-white">
      <h1 className="ml-10">Content</h1>
      <hr className="w-32 ml-10 border-t-5 border-gray-500" />
      <ul className="flex flex-col justify-center item-center ml-10  ">
        <li className="pt-2 pb-2 pl-5 pr-5 cursor-pointer transition-transform hover:scale-110">
          Hi
        </li>
        <li className="pt-2 pb-2 pl-5 pr-5  cursor-pointer transition-transform hover:scale-110">
          Bye
        </li>
        <li className="pt-2 pb-2 pl-5 pr-5  cursor-pointer transition-transform hover:scale-110">
          F u
        </li>
      </ul>
    </div>
  );
}
export default Aside;
