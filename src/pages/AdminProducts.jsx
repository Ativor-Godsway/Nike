import { useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
import { AiOutlineEdit } from "react-icons/ai";
import { useNavigate } from "react-router";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from "../redux/productsApi";

export default function AdminProducts() {
  const { data: products, error, isLoading } = useGetProductsQuery();

  const [sortCategory, setSortCategory] = useState("all");
  const [deleteProduct] = useDeleteProductMutation();

  const navigate = useNavigate();

  const sortedProducts =
    sortCategory === "all"
      ? products
      : products.filter((product) => product.category === sortCategory);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong!</p>;

  return (
    <div className="min-h-screen  p-10 flex flex-col items-center">
      <button
        className="btn bg-black text-white py-2 px-4 hover:bg-[#5f5f5f] my-5 rounded-full"
        onClick={() => navigate("/admin/add")}
      >
        Add New Product
      </button>
      <div className="flex justify-between mb-5 w-full">
        <h1 className="text-5xl">Products</h1>
        {/* Sorting dropdown */}
        <div className="mb-4 flex gap-3">
          <label htmlFor="sort" className="label">
            Sort by:
          </label>
          <select
            id="sort"
            value={sortCategory}
            onChange={(e) => setSortCategory(e.target.value)}
            className="select"
          >
            <option value="all">All</option>
            <option value="shoe">Shoes</option>
            <option value="leggings">Leggings</option>
            <option value="gym">Gym</option>
            <option value="sports">Sports</option>
          </select>
        </div>
      </div>
      {sortedProducts.length === 0 ? (
        <div>Nothing</div>
      ) : (
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-left">
              <th className="py-2">Item</th>
              <th className="py-2">Price</th>
              <th className="py-2 px-10 ">Category</th>
              <th className="py-2">Description</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>

          <tbody>
            {sortedProducts.map((product) => (
              <tr key={product._id} className="border-t">
                <td className="py-2 flex items-center gap-3">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-20 h-20 rounded-md object-cover"
                  />
                  {product.name}
                </td>
                <td className="py-2">${product.price}</td>
                <td className="py-2 px-10">{product.category}</td>
                <td className="py-2">{product.description}</td>
                <td className="py-2">
                  <button className="px-3 py-1 ">
                    <AiOutlineEdit className="size-7 " />
                  </button>
                  <button
                    className="px-3 py-1  "
                    onClick={() => deleteProduct(product._id)}
                  >
                    <IoTrashOutline className="size-7 hover:text-[red]" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
