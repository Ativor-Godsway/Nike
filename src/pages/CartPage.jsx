import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaRegTrashCan } from "react-icons/fa6";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { TbShoppingCartOff } from "react-icons/tb";

import {
  addToCart,
  decreaseQuantity,
  removeFromCart,
} from "../redux/cartSlice";

export default function CartPage() {
  const { cartItems, totalPrice, totalQuantity } = useSelector(
    (state) => state.cart
  );

  const dispatch = useDispatch();

  return (
    <div className="pl-[15vw] min-h-screen">
      <div className="w-[50vw]">
        <h1 className="text-4xl font-semibold">Cart</h1>{" "}
        <div>
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-[70vh] gap-4">
              <TbShoppingCartOff className="text-6xl text-gray-400" />
              <h2 className="text-2xl">Your cart is empty</h2>
              <p className="text-gray-500">
                Add items to your cart to get started
              </p>
              <Link
                to="/shoes"
                className="text-white bg-black py-2 px-4 rounded-full hover:bg-[#444343]"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-start justify-between border-b border-gray-300 py-4"
                >
                  <div>
                    <div className="flex flex-start gap-4">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-28 h-28 object-cover rounded-lg"
                      />
                      <div>
                        <h2 className="text-xl font-semibold">{item.name}</h2>

                        <p className="text-gray-600 text-[0.8rem] font-light">
                          Size {item.size}
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="mt-2 py-2 px-4 border flex items-center gap-5 w-fit rounded-full">
                        <p>
                          {item.quantity === 1 ? (
                            <FaRegTrashCan
                              className="hover:text-red-500"
                              onClick={() => dispatch(removeFromCart(item._id))}
                            />
                          ) : (
                            <FiMinus
                              onClick={() =>
                                dispatch(decreaseQuantity(item._id))
                              }
                            />
                          )}
                        </p>
                        <p>{item.quantity}</p>
                        <p>
                          <GoPlus onClick={() => dispatch(addToCart(item))} />
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-lg font-semibold">${item.price}</div>
                </div>
              ))}
            </>
          )}
        </div>{" "}
      </div>

      <div className="w-[25vw]  flex flex-col gap-4 p-4 border border-gray-300 rounded-3xl fixed right-28 top-20 h-fit">
        <h2 className="text-3xl">Summary</h2>
        <p className="flex justify-between">
          <span>Subtotal</span> <span>${totalPrice}</span>
        </p>
        <p className="flex justify-between">
          <span>Estimated Delivery</span> <span>FREE</span>
        </p>
        <hr />
        <p className="flex justify-between font-semibold text-lg">
          <span>Total</span> <span>${totalPrice}</span>
        </p>
        <hr />
        {cartItems.length === 0 ? (
          <button className="bg-gray-300 text-white py-2 px-4 rounded-full cursor-not-allowed">
            Checkout
          </button>
        ) : (
          <Link
            to="/checkout"
            className="bg-black text-white py-2 px-4 rounded-full text-center hover:bg-[#444343]"
          >
            Checkout
          </Link>
        )}
      </div>
    </div>
  );
}
