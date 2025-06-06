import React from "react";

interface PaymentMethodSelectorProps {
  paymentMethod: string;
  onChange: (method: string) => void;
}

export const PaymentMethodSelector: React.FC<PaymentMethodSelectorProps> = ({
  paymentMethod,
  onChange,
}) => (
  <div className="mt-6">
    <h3 className="text-lg font-medium text-gray-900 mb-4">Payment Method</h3>
    <div className="space-y-2">
      {["Cash On Delivery", "UPI", "Credit/Debit Card"].map((method) => (
        <label key={method} className="flex items-center space-x-2">
          <input
            type="radio"
            name="paymentMethod"
            value={method}
            checked={paymentMethod === method}
            onChange={() => onChange(method)}
            className="form-radio text-orange-600"
          />
          <span>{method}</span>
        </label>
      ))}
    </div>
  </div>
);
