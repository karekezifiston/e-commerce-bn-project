import { FaChevronDown } from "react-icons/fa"


const NavGo = () => {
  return (
    <ul className="flex items-center gap-2 border border-gray-300 px-10 pr-157 h-12">
        <li className="flex items-center gap-2">
         <p className="text-black/70 text-sm font-medium">HOME</p>
         <FaChevronDown className="text-black/50 text-xs cursor-pointer" />
         </li>
        <li className="flex items-center gap-2">
        <p className="text-black/70 text-sm font-medium">SHOP</p>
        <FaChevronDown className="text-black/50 text-xs cursor-pointer" />
        </li>
        <li className="flex items-center gap-2">
         <p className="text-black/70 text-sm font-medium">PAGES</p>
         <FaChevronDown className="text-black/50 text-xs cursor-pointer" />
         </li>
        <li className="flex items-center gap-2">
        <p className="text-black/70 text-sm font-medium">BLOG</p>
        <FaChevronDown className="text-black/50 text-xs cursor-pointer" />
        </li>
        <li className="flex items-center gap-2">
        <p className="text-black/70 text-sm font-medium">ELEMENTS</p>
        <FaChevronDown className="text-black/50 text-xs cursor-pointer" />
        </li>
        <li className="flex items-center gap-2">
        <p className="text-black/70 text-sm font-medium">BUY NOW</p>
        <FaChevronDown className="text-black/50 text-xs cursor-pointer" />
        </li>
    </ul>
  )
}

export default NavGo