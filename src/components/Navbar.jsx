import { SiNike } from "react-icons/si";
import { IoIosHeartEmpty } from "react-icons/io";
import { PiHandbagSimpleLight } from "react-icons/pi";
import { GrFormSearch } from "react-icons/gr";
import { Link } from "react-router";
import { useSelector } from "react-redux";

export default function Navbar() {
  const { totalQuantity } = useSelector((state) => state.cart);

  return (
    <div className="navbar bg-base-100 py-1 px-10 flex items-center justify-between fixed ">
      <Link to="/">
        <SiNike size={60} />
      </Link>

      <nav className="flex gap-3 font-semibold  pl-20 ">
        <ul className="flex ">
          <li>
            <Link
              to="/shoes"
              className="text-lg border-b-2 border-transparent pb-1 hover:border-black transition-all duration-300 ease-in-out px-5"
            >
              Shoes
            </Link>
          </li>
          <li>
            <Link
              to="/leggings"
              className="text-lg border-b-2 border-transparent pb-1 hover:border-black transition-all duration-300 ease-in-out px-5"
            >
              Leggings
            </Link>
          </li>
          <li>
            <Link
              to="/gym"
              className="text-lg border-b-2 border-transparent pb-1 hover:border-black transition-all duration-300 ease-in-out px-5"
            >
              Gym
            </Link>
          </li>
          <li>
            <Link
              to="/sports"
              className="text-lg border-b-2 border-transparent pb-1 hover:border-black transition-all duration-300 ease-in-out px-5"
            >
              Sports
            </Link>
          </li>
        </ul>
      </nav>

      <div className="flex items-center gap-4">
        <label className="input rounded-full flex items-center gap-2 border px-2 py-1 w-[150px] ">
          <GrFormSearch size={25} />
          <input type="search" required placeholder="Search" />
        </label>
        <IoIosHeartEmpty size={30} />
        <Link to={"/cart"}>
          <div className="indicator relative">
            <PiHandbagSimpleLight size={30} />
            <span className="badge badge-sm indicator-item bg-transparent border border-none  text-black absolute  top-[16px] right-[16px]">
              {totalQuantity}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
