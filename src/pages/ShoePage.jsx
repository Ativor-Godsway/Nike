import { Link } from "react-router";
import { useGetProductsQuery } from "../redux/productsApi";

export default function ShoePage() {
  const { data, error, isLoading } = useGetProductsQuery();
  const products = data ? data : [];
  const shoes = products.filter((product) => product.category === "shoe");
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong!</p>;
  return (
    <div className="px-10 ">
      <div className="h-[45vh] bg-[#c81414] flex justify-between pl-10 items-center ">
        <div>
          <h1 className="text-black text-5xl font-semibold w-[50%] font-serif mb-2">
            LEADERS OF THE NEW PACK
          </h1>
          <p className="text-black">
            Shop the latest trends and styles from the top brands.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXxlbnwwfDB8MHx8fDA%3D"
          alt=""
          className="h-full object-cover"
        />
      </div>
      <div className="mt-10 flex justify-between items-center p-4 ">
        <h2 className="text-4xl font-serif font-semibold ">Shoes</h2>

        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="m-1">
            Sort by
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a>Latest</a>
            </li>
            <li>
              <a>Oldest</a>
            </li>
            <li>
              <a>Price: High to Low</a>
            </li>
            <li>
              <a>Price: Low to High</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-3">
        {/* Product cards will go here */}
        {shoes.map((product, index) => (
          <Link to={`/details/${product._id}`} key={index}>
            <div className="mb-20 m-4">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-[80%] object-cover mb-2"
              />
              <h2 className="text-xl font-semibold mb-1">{product.name}</h2>
              <p className="text-gray-700 mb-1">${product.price}</p>
              <p className="text-gray-600">{product.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
