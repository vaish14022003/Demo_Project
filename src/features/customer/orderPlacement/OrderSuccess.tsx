import React from "react";

export const OrderSuccess: React.FC = () => (
  <div className="h-screen flex items-center justify-center bg-white">
    <div className="text-center">
      <h2 className="text-2xl font-semibold text-green-600 mb-4">
        🎉 Order Placed Successfully!
      </h2>
      <p className="text-gray-600 mb-6">
        Thank you for your purchase. Your order is on the way!
      </p>
      <button
        onClick={() => window.location.href = "/"}
        className="bg-orange-600 text-white px-6 py-3 rounded-lg"
      >
        Back to Home
      </button>
    </div>
  </div>
);
