// 

import React from "react";
import { User, Phone } from "lucide-react";
import type { DeliveryAddress } from "../../../types";

interface AddressFormProps {
  address: DeliveryAddress;
  onChange: (field: keyof DeliveryAddress, value: string) => void;
  onSave: () => void;
  onCancel?: () => void;
  isEditing?: boolean;
  showCancel?: boolean;
}

export const AddressForm: React.FC<AddressFormProps> = ({
  address,
  onChange,
  onSave,
  onCancel,
  isEditing = false,
  showCancel = true,
}) => (
  <div className="bg-white rounded-xl shadow-md p-6">
    {/* Header */}
    <div className="flex items-center justify-between mb-6">
      <h3 className="text-lg font-semibold text-gray-900">
        {isEditing ? "Edit Address" : "Add New Address"}
      </h3>
      {showCancel && onCancel && (
        <button
          onClick={onCancel}
          className="text-sm text-gray-500 hover:text-gray-700"
        >
          Cancel
        </button>
      )}
    </div>

    {/* Label */}
    <div className="mb-5">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Address Label
      </label>
      <select
        value={address.label}
        onChange={(e) => onChange("label", e.target.value)}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
      >
        <option value="">Select label</option>
        <option value="Home">Home</option>
        <option value="Office">Office</option>
        <option value="Other">Other</option>
      </select>
    </div>

    {/* Name and Phone */}
    <div className="grid md:grid-cols-2 gap-4 mb-5">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          <User className="inline w-4 h-4 mr-1" />
          Full Name *
        </label>
        <input
          type="text"
          value={address.fullName}
          onChange={(e) => onChange("fullName", e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          <Phone className="inline w-4 h-4 mr-1" />
          Phone Number *
        </label>
        <input
          type="tel"
          value={address.phoneNumber}
          onChange={(e) => onChange("phoneNumber", e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>
    </div>

    {/* Street Address */}
    <div className="mb-5">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Street Address *
      </label>
      <input
        type="text"
        value={address.streetAddress}
        onChange={(e) => onChange("streetAddress", e.target.value)}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
      />
    </div>

    {/* City and Zip */}
    <div className="grid md:grid-cols-2 gap-4 mb-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          City *
        </label>
        <input
          type="text"
          value={address.city}
          onChange={(e) => onChange("city", e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Zip Code *
        </label>
        <input
          type="text"
          value={address.zipCode}
          onChange={(e) => onChange("zipCode", e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>
    </div>

    {/* Save Button */}
    <button
      onClick={onSave}
      className="bg-orange-600 hover:bg-orange-700 transition text-white font-semibold px-6 py-2 rounded-lg"
    >
      {isEditing ? "Update Address" : "Save Address"}
    </button>
  </div>
);
