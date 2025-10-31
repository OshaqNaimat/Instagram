import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import * as BiIcons from "react-icons/bi";
import * as IoIcons from "react-icons/io";
import * as FiIcons from "react-icons/fi";
import * as BsIcons from "react-icons/bs";
import * as FaIcons from "react-icons/fa";

export const sidebarItems = [
  {
    id: 1,
    title: "Home",
    icon: <AiIcons.AiFillHome />,
  },
  {
    id: 2,
    title: "Search",
    icon: <AiIcons.AiOutlineSearch />,
  },
  {
    id: 3,
    title: "Explore",
    icon: <MdIcons.MdOutlineExplore />,
  },
  {
    id: 4,
    title: "Reels",
    icon: <BiIcons.BiMoviePlay />,
  },
  {
    id: 5,
    title: "Messages",
    icon: <BsIcons.BsMessenger />,
    badge: 3,
  },
  {
    id: 6,
    title: "Notifications",
    icon: <IoIcons.IoMdHeartEmpty />,
  },
  {
    id: 7,
    title: "Create",
    icon: <MdIcons.MdOutlineAddBox />,
  },
  {
    id: 8,
    title: "Profile",
    icon: <FaIcons.FaRegUserCircle />,
  },
  {
    id: 9,
    title: "More",
    icon: <FiIcons.FiMenu />,
  },
];

export default sidebarItems;
