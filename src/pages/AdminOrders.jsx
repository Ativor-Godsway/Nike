import { useState } from "react";
import { useDeleteOrderMutation, useGetOrdersQuery } from "../redux/OrderApi";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";

export default function AdminOrders() {
  const { data, error, isLoading } = useGetOrdersQuery();
  const [deleteOrder] = useDeleteOrderMutation();
  const orders = data ? data : [];
  const [isOpen, setIsOpen] = useState(false);
  const handleDeleteOrder = async (order) => {
    try {
      deleteOrder(order);
      toast.success("Order Deleted");
    } catch (error) {
      console.log(error);
      toast.error("Unable to delete, Try Later");
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong!</p>;

  return (
    <div className="border-b border-gray-200 py-3">
      {/* Basic Info Row */}
      {orders.map((order) => (
        <div>
          <div className="grid grid-cols-5 items-center gap-4">
            <span className="font-medium">{order.fullName}</span>
            <span>{order.contact}</span>
            <span>{order.totalPrice} GHS</span>
            <span className="text-sm capitalize">Pending</span>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-blue-500 hover:underline"
            >
              {isOpen ? "Hide Details" : "View Details"}
            </button>
          </div>

          {/* Expandable Details */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-2 ml-4 border-l-2 border-blue-200 pl-4 text-sm text-gray-600 space-y-2"
              >
                <p>
                  <strong>Items:</strong>{" "}
                  {order.cartItems.map((item) => item.name)}
                </p>
                <p>
                  <strong>Payment:</strong> {order.paymentMethod} ( )
                </p>
                <p>
                  <strong>Delivery:</strong> {order.deliveryMethod}
                </p>
                <p>
                  <strong>Address:</strong> {order.address}
                </p>
                {order.notes && (
                  <p>
                    <strong>Notes:</strong> {order.notes}
                  </p>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
