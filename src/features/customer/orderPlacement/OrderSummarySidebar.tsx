import React from "react";
import type { DeliveryAddress } from "../../../types/index";

interface OrderSummarySidebarProps {
  selectedAddress: DeliveryAddress;
  paymentMethod: string;
  onPlaceOrder: () => void;
  isPlacingOrder: boolean;
}

export const OrderSummarySidebar: React.FC<OrderSummarySidebarProps> = ({
  selectedAddress,
  paymentMethod,
  onPlaceOrder,
  isPlacingOrder,
}) => (
  <div className="p-6 border-l bg-white h-full flex flex-col justify-between">
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Summary</h2>
      <div className="mb-4">
        <h3 className="font-medium text-gray-700 mb-1">Delivery Address</h3>
        <p className="text-sm text-gray-600">
          {selectedAddress.fullName} — {selectedAddress.phoneNumber}
        </p>
        <p className="text-sm text-gray-600">
          {selectedAddress.streetAddress}, {selectedAddress.city} - {selectedAddress.zipCode}
        </p>
      </div>
      <div className="mb-4">
        <h3 className="font-medium text-gray-700 mb-1">Payment</h3>
        <p className="text-sm text-gray-600">{paymentMethod}</p>
      </div>
    </div>

    <button
      onClick={onPlaceOrder}
      disabled={isPlacingOrder}
      className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition-all"
    >
      {isPlacingOrder ? "Placing Order..." : "Place Order"}
    </button>
  </div>
);
