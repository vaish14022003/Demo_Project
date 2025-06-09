import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { type RootState } from '../../redux/store';
import { updateQuantity, removeFromCart } from '../../redux/slice/cartSlice';
import { motion, AnimatePresence } from 'framer-motion';
import { FiTrash2, FiShoppingCart, FiPlus, FiMinus } from 'react-icons/fi'; 

const CartPage: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    alert('Proceed to payment /route');
  };

  return (
    <div className="max-w-5xl mx-auto mt-12 px-4">
      <h2 className="text-4xl font-bold text-red-600 mb-10 text-center flex items-center justify-center gap-3 animate-pulse">
        <FiShoppingCart className="text-4xl" /> Your Cart
      </h2>

      {cartItems.length === 0 ? (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-gray-600 text-center text-lg"
        >
          Your cart is empty.
        </motion.p>
      ) : (
        <div className="space-y-6">
          <AnimatePresence>
            {cartItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col sm:flex-row items-center gap-4 bg-white shadow-lg rounded-xl p-5 border border-gray-200 hover:shadow-2xl transition-shadow"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-28 h-28 object-cover rounded-lg border border-gray-300"
                />

                <div className="flex-1 w-full">
                  <div className="flex justify-between items-center">
                    <h4 className="text-xl font-bold text-gray-800">
                      {item.name}
                    </h4>
                    <p className="text-red-500 font-semibold text-lg">
                      ₹{(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                  <p className="text-gray-500 text-sm mt-1">
                    Unit Price: ₹{item.price.toFixed(2)}
                  </p>

                  <div className="mt-4 flex items-center gap-3">
                    <div className="flex items-center border rounded-md shadow-sm">
                      <button
                        onClick={() =>
                          dispatch(updateQuantity({ id: item.id, delta: -1 }))
                        }
                        className="px-3 py-1 text-red-600 hover:text-red-800"
                        title="Decrease quantity"
                      >
                        <FiMinus />
                      </button>
                      <span className="px-4 font-medium text-gray-700">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          dispatch(updateQuantity({ id: item.id, delta: 1 }))
                        }
                        className="px-3 py-1 text-green-600 hover:text-green-800"
                        title="Increase quantity"
                      >
                        <FiPlus />
                      </button>
                    </div>
                    <button
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="text-red-500 hover:text-red-700 text-lg"
                      title="Remove item"
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-right mt-12 border-t pt-6"
          >
            <p className="text-2xl font-semibold text-gray-800 mb-4">
              Total: <span className="text-red-600">₹{totalPrice.toFixed(2)}</span>
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCheckout}
              className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:from-red-600 hover:to-red-700 transition-all"
            >
              Proceed to Checkout
            </motion.button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
