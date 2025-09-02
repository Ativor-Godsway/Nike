import { Link } from "react-router";

export default function Collections() {
  return (
    <div className="collections min-h-[88vh] text-white px-10 mt-5 grid grid-cols-2 gap-5">
      <div
        className=" w-[47vw] h-[80vh] flex flex-col justify-end "
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1606902965551-dce093cda6e7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVnZ2luZ3N8ZW58MHx8MHx8fDA%3D)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
        }}
      >
        <div className=" items-start pl-8 pb-8 flex flex-col  bg-gradient-to-t from-[#00000047] to-transparent h-full justify-end">
          <p className="text-md ">Nike Training</p>
          <h2 className="text-4xl font-semibold">Leggings</h2>
          <Link to="/leggings">
            <button className="btn mt-5 bg-white text-black rounded-full hover:bg-[#d3d2d2] ">
              Shop
            </button>
          </Link>
        </div>
      </div>
      <div
        className=" w-[47vw] h-[80vh] flex flex-col justify-end "
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1679111513962-762e14317937?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAwfHxuaWtlfGVufDB8fDB8fHww)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className=" items-start pl-8 pb-8 flex flex-col  bg-gradient-to-t from-[#00000047] to-transparent h-full justify-end">
          <p className="text-md ">Gym Wear</p>
          <h2 className="text-4xl font-semibold">Shoes</h2>
          <Link to="/shoes">
            <button className="btn mt-5 bg-white text-black rounded-full hover:bg-[#d3d2d2] ">
              Shop
            </button>
          </Link>
        </div>
      </div>
      <div
        className=" w-[47vw] h-[80vh] flex flex-col justify-end "
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1659350774649-12580038fcba?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
        }}
      >
        <div className=" items-start pl-8 pb-8 flex flex-col  bg-gradient-to-t from-[#00000047] to-transparent h-full justify-end">
          <p className="text-md ">Sports Wear</p>
          <h2 className="text-4xl font-semibold">Gym Wear</h2>
          <Link to="/gym">
            <button className="btn mt-5 bg-white text-black rounded-full hover:bg-[#d3d2d2] ">
              Shop
            </button>
          </Link>
        </div>
      </div>
      <div
        className=" w-[47vw] h-[80vh] flex flex-col justify-end "
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1608444265903-d7883082872b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fG5pa2V8ZW58MHx8MHx8fDA%3D)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
        }}
      >
        <div className=" items-start pl-8 pb-8 flex flex-col  bg-gradient-to-t from-[#00000047] to-transparent h-full justify-end">
          <p className="text-md ">Nike Training</p>
          <h2 className="text-4xl font-semibold">Sports Wear</h2>
          <Link to="/sports">
            <button className="btn mt-5 bg-white text-black rounded-full hover:bg-[#d3d2d2] ">
              Shop
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
