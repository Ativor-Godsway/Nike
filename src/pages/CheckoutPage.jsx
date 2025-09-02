import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import {
  addToCart,
  decreaseQuantity,
  removeFromCart,
} from "../redux/cartSlice";
import { useSelector } from "react-redux";
import { GoCheckCircleFill } from "react-icons/go";
import { regions } from "../components/regions";
import toast from "react-hot-toast";
import { useCreateOrderMutation } from "../redux/OrderApi";

export default function CheckoutPage() {
  const { cartItems, totalPrice, totalQuantity } = useSelector(
    (state) => state.cart
  );
  const navigate = useNavigate();
  const [createOrder] = useCreateOrderMutation();

  // initialize react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // when form is submitted
  const onSubmit = async (data) => {
    try {
      const order = {
        ...data,
        cartItems,
        totalPrice,
        totalQuantity,
      };
      console.log("Order Data:", order);
      await createOrder(order);
      toast.success("Order Placed");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Error Placing order");
    }
  };

  return (
    <div className="min-h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-[50vw] ml-[15vw] flex flex-col gap-4"
      >
        <h2 className="text-3xl font-bold mb-2">Checkout</h2>

        {/* Personal Info */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Full Name</span>
          </label>
          <input
            type="text"
            placeholder="John Doe"
            {...register("fullName", { required: "Full name is required" })}
            className="input input-bordered w-full"
          />
          {errors.fullName && (
            <span className="text-red-500 text-sm">
              {errors.fullName.message}
            </span>
          )}
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone Number</span>
          </label>
          <input
            type="tel"
            placeholder="0123456789"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10,15}$/,
                message: "Invalid phone number",
              },
            })}
            className="input input-bordered w-full"
          />
          {errors.phone && (
            <span className="text-red-500 text-sm">{errors.phone.message}</span>
          )}
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Invalid email address",
              },
            })}
            className="input input-bordered w-full"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>

        {/* Delivery Address */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Country</span>
          </label>
          <select
            {...register("country", { required: true })}
            className="select select-bordered w-full"
          >
            <option value="Ghana">Ghana</option>
            <option value="Nigeria">Nigeria</option>
            <option value="Kenya">Kenya</option>
            <option value="South Africa">South Africa</option>
          </select>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Digital Address</span>
          </label>
          <input
            type="text"
            placeholder="VX-0000-0000"
            {...register("digitalAddress", {
              required: "Digital address is required",
            })}
            className="input input-bordered w-full"
          />
          {errors.digitalAddress && (
            <span className="text-red-500 text-sm">
              {errors.digitalAddress.message}
            </span>
          )}
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">City / Town</span>
          </label>
          <input
            type="text"
            placeholder="Accra"
            {...register("city", { required: "City is required" })}
            className="input input-bordered w-full"
          />
          {errors.city && (
            <span className="text-red-500 text-sm">{errors.city.message}</span>
          )}
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Region</span>
          </label>
          <select
            {...register("region", { required: "Please select a region" })}
            className="select select-bordered w-full"
          >
            <option value="">Select a region</option>
            {regions.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
          {errors.region && (
            <span className="text-red-500 text-sm">
              {errors.region.message}
            </span>
          )}
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Landmark / Directions (optional)</span>
          </label>
          <input
            type="text"
            placeholder="Near Shell Filling Station"
            {...register("landmark")}
            className="input input-bordered w-full"
          />
        </div>

        {/* Delivery Options */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Delivery Method</span>
          </label>
          <select
            {...register("deliveryMethod", {
              required: "Select a delivery method",
            })}
            className="select select-bordered w-full"
          >
            <option value="">Select...</option>
            <option value="standard">Standard Delivery</option>
            <option value="express">Express Delivery</option>
            <option value="pickup">Pickup</option>
          </select>
          {errors.deliveryMethod && (
            <span className="text-red-500 text-sm">
              {errors.deliveryMethod.message}
            </span>
          )}
        </div>

        {/* Payment */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Payment Method</span>
          </label>
          <select
            {...register("paymentMethod", {
              required: "Select a payment method",
            })}
            className="select select-bordered w-full"
          >
            <option value="">Select...</option>
            <option value="momo">Mobile Money</option>
            <option value="card">Credit / Debit Card</option>
            <option value="cod">Cash on Delivery</option>
          </select>
          {errors.paymentMethod && (
            <span className="text-red-500 text-sm">
              {errors.paymentMethod.message}
            </span>
          )}
        </div>

        {/* Order Notes */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Order Notes (optional)</span>
          </label>
          <textarea
            {...register("notes")}
            className="textarea textarea-bordered w-full"
            rows="3"
            placeholder="Any special instructions?"
          ></textarea>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="bg-black mt-5 text-white p-2 rounded-full"
        >
          Place Order
        </button>
      </form>

      {/* Summary Section */}
      <div className="w-[25vw] bg-white z-10 shadow-lg  flex flex-col gap-4 p-4 border border-gray-300 rounded-3xl fixed right-28 top-20 h-fit">
        <h2 className="text-3xl">Order Summary</h2>
        <p className="flex justify-between">
          <span>Subtotal</span> <span>${totalPrice}</span>
        </p>
        <p className="flex justify-between">
          <span>Estimated Delivery</span>{" "}
          <span className="text-[green]">FREE</span>
        </p>
        <hr />
        <p className="flex justify-between font-semibold text-lg">
          <span>Total</span> <span>${totalPrice}</span>
        </p>
        <hr />

        {/* CartItems */}
        <div className="max-h-[400px] overflow-y-auto">
          {cartItems.map((item) => (
            <div key={item.name} className="flex gap-3 mt-3">
              <img
                src={item.imageUrl}
                alt=""
                className="w-20 h-20 object-cover rounded"
              />
              <div className="flex flex-col gap-3">
                <span>
                  {item.name} x {item.quantity}
                </span>
                <span>${item.price * item.quantity}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
