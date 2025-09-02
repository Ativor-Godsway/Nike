import { SiNike } from "react-icons/si";
import { RxAvatar } from "react-icons/rx";
import { PiHandbagSimpleLight } from "react-icons/pi";
import { GrFormSearch } from "react-icons/gr";
import { Link, useNavigate } from "react-router";
import { useSelector } from "react-redux";

export default function AdminNavbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/");
  };

  return (
    <div className="navbar bg-base-100 py-1 px-10 flex items-center justify-between fixed ">
      <Link to="/">
        <SiNike size={60} />
      </Link>

      <nav className="flex gap-3 font-semibold  pl-20 ">
        <ul className="flex ">
          <li>
            <Link
              to="/admin"
              className="text-lg border-b-2 border-transparent pb-1 hover:border-black transition-all duration-300 ease-in-out px-5"
            >
              DashBoard
            </Link>
          </li>
          <li>
            <Link
              to="/admin/products"
              className="text-lg border-b-2 border-transparent pb-1 hover:border-black transition-all duration-300 ease-in-out px-5"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/admin/orders"
              className="text-lg border-b-2 border-transparent pb-1 hover:border-black transition-all duration-300 ease-in-out px-5"
            >
              Orders
            </Link>
          </li>
          <li>
            <Link
              to="/admin/reviews"
              className="text-lg border-b-2 border-transparent pb-1 hover:border-black transition-all duration-300 ease-in-out px-5"
            >
              Reviews
            </Link>
          </li>
        </ul>
      </nav>

      <div className="flex items-center gap-4">
        <label className="input rounded-full flex items-center gap-2 border px-2 py-1 w-[150px] ">
          <GrFormSearch size={25} />
          <input type="search" required placeholder="Search" />
        </label>

        <div className="dropdown dropdown-hover dropdown-end">
          <div tabIndex={0} role="button" className="m-1">
            <RxAvatar size={30} />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-[#ffffff] rounded-box z-1 w-52 p-2 shadow-lg"
          >
            <li>Change Password</li>
            <li onClick={() => handleLogout()}>Logout</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
