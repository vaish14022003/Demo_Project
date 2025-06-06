import React from "react";
import type { DeliveryAddress } from "../../../types/index";
import { AddressCard } from "./AddressCard";

interface AddressSelectionProps {
  addresses: DeliveryAddress[];
  selectedIndex: number;
  onSelect: (index: number) => void;
  onEdit: (index: number) => void;
  onAddNew: () => void;
}

export const AddressSelection: React.FC<AddressSelectionProps> = ({
  addresses,
  selectedIndex,
  onSelect,
  onEdit,
  onAddNew,
}) => (
  <div className="space-y-4">
    <h3 className="text-lg font-medium text-gray-900 mb-2">Saved Addresses</h3>
    {addresses.map((address, index) => (
      <AddressCard
        key={index}
        address={address}
        selected={selectedIndex === index}
        onSelect={() => onSelect(index)}
        onEdit={() => onEdit(index)}
      />
    ))}
    <button
      onClick={onAddNew}
      className="mt-4 px-4 py-2 border border-orange-500 text-orange-500 hover:bg-orange-50 rounded-lg"
    >
      + Add New Address
    </button>
  </div>
);
