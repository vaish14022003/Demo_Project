import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, updateQuantity, removeFromCart } from '../../../redux/slice/cartSlice';
import {type RootState } from '../../../redux/store';

interface MenuItemProps {
  id: number;
  name: string;
  price: number;
  description: string;
  image?: string;
}

const MenuItemCard: React.FC<MenuItemProps> = ({
  id,
  name,
  price,
  description,
  image,
}) => {
  const dispatch = useDispatch();

  const cartItem = useSelector((state: RootState) =>
    state.cart.items.find((item) => item.id === id)
  );

  const handleAdd = () => {
    dispatch(addToCart({ id, name, price, image, quantity: 1 }));
  };

  const increaseQty = () => {
    dispatch(updateQuantity({ id, delta: 1 }));
  };

  const decreaseQty = () => {
    if (cartItem?.quantity === 1) {
      dispatch(removeFromCart(id));
    } else {
      dispatch(updateQuantity({ id, delta: -1 }));
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      {/* Image */}
      {image && (
        <div className="relative">
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="w-full h-48 object-cover"
          />
        </div>
      )}

      {/* Details */}
      <div className="p-4">
        <h4 className="text-xl font-semibold text-gray-800 mb-1">{name}</h4>
        <p className="text-gray-600 text-sm mb-3">{description}</p>

        <div className="flex justify-between items-center">
          <span className="text-lg text-red-600 font-bold">₹{price.toFixed(2)}</span>

          {/* Add to Cart or Quantity Controls */}
          {!cartItem ? (
            <button
              onClick={handleAdd}
              className="bg-red-500 text-white text-sm px-4 py-2 rounded hover:bg-red-600 transition-colors"
            >
              Add to Cart
            </button>
          ) : (
            <div className="flex items-center border rounded-md overflow-hidden">
              <button
                onClick={decreaseQty}
                className="px-3 py-1 text-red-600 hover:text-red-800"
              >
                −
              </button>
              <span className="px-4 font-medium text-gray-700">
                {cartItem.quantity}
              </span>
              <button
                onClick={increaseQty}
                className="px-3 py-1 text-green-600 hover:text-green-800"
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;
