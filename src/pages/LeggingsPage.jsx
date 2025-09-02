import { Link } from "react-router";
import { useGetProductsQuery } from "../redux/productsApi";

export default function LeggingsPage() {
  const { data, error, isLoading } = useGetProductsQuery();
  const products = data ? data : [];
  const leggings = products.filter(
    (product) => product.category === "leggings"
  );
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong!</p>;

  return (
    <div className="px-10 ">
      <div className="h-[45vh] bg-black flex justify-between px-10 items-center ">
        <div>
          <h1 className="text-white text-5xl font-semibold w-[50%] font-serif mb-2">
            LEADERS OF THE NEW PACK
          </h1>
          <p className="text-white">
            Shop the latest trends and styles from the top brands.
          </p>
        </div>
        <figure></figure>
      </div>
      <div className="grid grid-cols-3">
        {/* Product cards will go here */}
        {leggings.map((product, index) => (
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
