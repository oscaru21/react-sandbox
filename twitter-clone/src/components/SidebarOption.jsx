import { Link } from "react-router-dom";

function SidebarOption({ Icon, text, to }) {
  return (
    <Link to={to ?? '/'}>
      <div className="flex flex-row items-center flex-none p-3 rounded-full hover:bg-gray-200 hover:bg-opacity-75  my-2 mr-2 text-gray-700 hover:text-black">
        <Icon className="text-2xl" />
        <p className="px-4 text-xl hidden xl:flex ">{text}</p>
      </div>
    </Link>
  );
}
export default SidebarOption;
