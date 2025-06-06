import { Edit2 } from "lucide-react";
import type { DeliveryAddress } from "../../../types/index";

interface AddressCardProps {
  address: DeliveryAddress;
  selected: boolean;
  onSelect: () => void;
  onEdit: () => void;
}

export const AddressCard: React.FC<AddressCardProps> = ({
  address,
  selected,
  onSelect,
  onEdit,
}) => (
  <div
    className={`border rounded-lg p-4 cursor-pointer transition-all ${
      selected
        ? "border-orange-500 bg-orange-50 shadow-md"
        : "border-gray-300 hover:border-gray-400 hover:shadow-sm"
    }`}
    onClick={onSelect}
  >
    <div className="flex justify-between items-start">
      <div className="flex-1">
        <div className="flex items-center mb-2">
          <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full font-medium">
            {address.label}
          </span>
        </div>
        <p className="font-medium text-gray-900">{address.fullName}</p>
        <p className="text-sm text-gray-600">{address.phoneNumber}</p>
        <p className="text-sm text-gray-600">
          {address.streetAddress}, {address.city} - {address.zipCode}
        </p>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onEdit();
        }}
        className="text-gray-400 hover:text-orange-600 transition-colors"
      >
        <Edit2 className="w-4 h-4" />
      </button>
    </div>
  </div>
);
