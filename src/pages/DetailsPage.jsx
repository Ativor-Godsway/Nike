import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { useState } from "react";
import { useGetProductQuery } from "../redux/productsApi";
import toast from "react-hot-toast";

export default function DetailsPage() {
  const [size, setSize] = useState(0);

  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();
  const { data, error, isLoading } = useGetProductQuery(id);
  const product = data ? data : [];
  console.log(product);

  const dispatch = useDispatch();

  const handleBuyNow = (product) => {
    if (!size) {
      alert("Please select a size before buying!");
      return;
    }
    dispatch(addToCart({ ...product, size: size }));
    navigate("/cart");
  };

  const handleAddToCart = (product) => {
    if (!size) {
      alert("Please select a size before adding to cart!");
      return;
    }
    dispatch(addToCart({ ...product, size: size }));
    toast.success("Added");
  };
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong!</p>;
  return (
    <div className="flex items-center justify-center mt-10">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-[40vw] h-[80vh] object-cover rounded-xl mr-10 "
      />
      <div className="w-[30vw] min-h-[80vh]">
        <h1 className="text-2xl font-semibold font-sans">{product.name}</h1>
        <h2 className="font-light text-[#383737]">{product.description}</h2>
        <h3 className="text-2xl font-semibold mt-5">${product.price}</h3>
        <figure className="flex gap-4 mt-5">
          <img src={product.image} alt="" className="w-20 h-20 rounded" />
          <img src={product.image} alt="" className="w-20 h-20 rounded" />
        </figure>
        <div>
          <h3 className="mt-7">Select Size</h3>
          <div className="grid grid-cols-2 mt-3 ">
            {[
              "XS (UK 4–6)",
              "S (UK 8–10)",
              "M (UK 12–14)",
              "L (UK 16–18)",
              "XL (UK 20–22)",
              "XXL (UK 24-26)",
            ].map((size) => (
              <button
                key={size}
                className="border border-gray-400 px-4 py-2 m-1 rounded hover:bg-gray-200"
                onClick={() => setSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <button
          className="mt-20 bg-black text-white px-6 py-3 rounded-full hover:bg-[#4c4c4c] m-auto w-full "
          onClick={() => handleAddToCart(product)}
        >
          Add to Cart
        </button>

        <button
          className="mt-3 bg-white text-black px-6 py-3 border border-[#a3a3a3] rounded-full hover:border-black m-auto w-full "
          onClick={() => handleBuyNow(product)}
        >
          Buy Now
        </button>

        <h2 className="font-light text-[#383737] w-full text-center mt-10">
          This product is excluded from site promotions and discounts.
        </h2>
      </div>
    </div>
  );
}
