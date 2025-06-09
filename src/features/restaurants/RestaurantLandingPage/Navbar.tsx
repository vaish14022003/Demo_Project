import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { type RootState } from "../../../redux/store";
import { FiShoppingCart, FiMapPin } from "react-icons/fi";

const Navbar: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const cartCount = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems]
  );

  return (
    <nav className="flex items-center justify-between px-6 py-3 shadow-md bg-white sticky top-0 z-50">
      {/* Logo */}
      <Link to="/" className="flex items-center space-x-2">
        <img src="https://cdn-icons-png.flaticon.com/512/8382/8382732.png" alt="FoodieFy Logo" className="h-8" />
      </Link>

      {/* Search Bar */}
      <div className="flex items-center w-1/2 bg-gray-100 px-4 py-2 rounded-md">
        <div className="flex items-center pr-4 border-r border-gray-300 text-sm text-gray-700 whitespace-nowrap">
          <FiMapPin className="mr-1" /> <span>New York</span>
        </div>
        <input
          type="text"
          placeholder="Search for restaurants or dishes"
          className="ml-4 bg-transparent outline-none w-full text-sm text-gray-800"
        />
      </div>

      {/* Right side: Cart & User */}
      <div className="flex items-center space-x-4">
        {/* Cart with Badge */}
        <Link to="/cart" className="relative group">
          <FiShoppingCart className="text-2xl text-gray-700 hover:text-red-500 transition" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-semibold">
              {cartCount}
            </span>
          )}
        </Link>

        {/* User Profile */}
        <div className="flex items-center space-x-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/9187/9187604.png"
            alt="User Avatar"
            className="rounded-full h-8 w-8 object-cover border"
          />
          <span className="text-sm font-medium">John</span>
        </div>
      </div>
    </nav>
  );
};

export default React.memo(Navbar);
