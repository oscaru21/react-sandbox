import {
  FaTwitter,
  FaHome,
  FaHashtag,
  FaRegBell,
  FaRegEnvelope,
  FaBookmark,
  FaListUl,
  FaUser,
  FaFeatherAlt,
} from "react-icons/fa";
import { CgMoreO } from "react-icons/cg";
import SidebarOption from "./SidebarOption";
import Button from "./Button";

function Sidebar() {
  return (
    <div className="flex flex-col items-end xl:items-start h-screen border-r basis-1/5 sticky top-0 self-start ">
      <Button Icon={FaTwitter} size="3" to="/" color="sky-500"/>

      <SidebarOption Icon={FaHome} text={"Home"} />
      <SidebarOption Icon={FaHashtag} text={"Explore"} />
      <SidebarOption Icon={FaRegBell} text={"Notifications"} />
      <SidebarOption Icon={FaRegEnvelope} text={"Messages"} />
      <SidebarOption Icon={FaBookmark} text={"Bookmarks"} />
      <SidebarOption Icon={FaListUl} text={"Lists"} />
      <SidebarOption Icon={FaUser} text={"Profile"} />
      <SidebarOption Icon={CgMoreO} text={"More"} />

      <div className="flex flex-row xl:w-11/12 justify-center p-3 rounded-full bg-[#1da1f2] hover:bg-opacity-75  my-2 mr-2 text-white">
        <FaFeatherAlt className="flex xl:hidden" />
        <p className="px-4 text-lg hidden xl:flex ">Tweet</p>
      </div>
    </div>
  );
}

export default Sidebar;
