import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div
      className="hero min-h-[88vh]  "
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1559697242-cacab5d5b62c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fGZhc2hpb258ZW58MHwwfDB8fHww)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center mt-[300px]">
        <div className="max-w-full">
          <h1 className="mb-5 text-7xl font-bold">
            MORE CHOICE, <br /> MORE RUNNING.
          </h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          </p>
          <Link to="/shoes">
            <button className="btn bg-white text-black rounded-full hover:bg-[#d3d2d2] ">
              Shop
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
