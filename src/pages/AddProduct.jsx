import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useCreateProductMutation } from "../redux/productsApi";
import { useNavigate } from "react-router";

export default function AddProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [createProduct] = useCreateProductMutation();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      console.log(data);
      await createProduct(data).unwrap();
      toast.success("Product Added");
      navigate("/admin/products");
    } catch (err) {
      console.log(err);
      toast.error("Error Adding Product");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto p-6 shadow-md rounded-xl space-y-4 bg-base-100"
    >
      <h2 className="text-xl font-bold text-center">Add Product</h2>

      {/* Name */}
      <div>
        <label className="label">
          <span className="label-text">Product Name</span>
        </label>
        <input
          type="text"
          placeholder="Enter product name"
          {...register("name", { required: "Name is required" })}
          className="input input-bordered w-full"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>

      {/* Price */}
      <div>
        <label className="label">
          <span className="label-text">Price</span>
        </label>
        <input
          type="number"
          placeholder="Enter price"
          {...register("price", { required: "Price is required", min: 1 })}
          className="input input-bordered w-full"
        />
        {errors.price && (
          <p className="text-red-500 text-sm">{errors.price.message}</p>
        )}
      </div>

      {/* Description */}
      <div>
        <label className="label">
          <span className="label-text">Description</span>
        </label>
        <textarea
          placeholder="Enter description"
          {...register("description", { required: "Description is required" })}
          className="textarea textarea-bordered w-full"
        />
        {errors.description && (
          <p className="text-red-500 text-sm">{errors.description.message}</p>
        )}
      </div>

      {/* Image URL */}
      <div>
        <label className="label">
          <span className="label-text">Image URL</span>
        </label>
        <input
          type="url"
          placeholder="https://example.com/image.jpg"
          {...register("imageUrl", { required: "Image URL is required" })}
          className="input input-bordered w-full"
        />
        {errors.imageUrl && (
          <p className="text-red-500 text-sm">{errors.imageUrl.message}</p>
        )}
      </div>

      {/* Category */}
      <div>
        <label className="label">
          <span className="label-text">Category</span>
        </label>
        <select
          {...register("category", { required: "Category is required" })}
          className="select select-bordered w-full"
        >
          <option value="">Select category</option>
          <option value="shoe">Shoe</option>
          <option value="leggings">Leggings</option>
          <option value="gym">Gym</option>
          <option value="sports">Sports</option>
        </select>
        {errors.category && (
          <p className="text-red-500 text-sm">{errors.category.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button type="submit" className="btn btn-primary w-full">
        Add Product
      </button>
    </form>
  );
}
