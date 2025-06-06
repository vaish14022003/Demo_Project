// AddressForm.tsx
import type { DeliveryAddress } from "../../../../types";

interface AddressFormProps {
  address: DeliveryAddress;
  isEditing: boolean;
  onInputChange: (field: keyof DeliveryAddress, value: string) => void;
  onSave: () => void;
  onCancel: () => void;
}

const AddressForm: React.FC<AddressFormProps> = ({
  address,
  isEditing,
  onInputChange,
  onSave,
  onCancel,
}) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-gray-900">
          {isEditing ? "Edit Address" : "Add New Address"}
        </h3>
        <button
          onClick={onCancel}
          className="text-gray-500 hover:text-gray-700 text-sm"
        >
          Cancel
        </button>
      </div>

      {/* Form fields would go here */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Address Label
        </label>
        <select
          value={address.label}
          onChange={(e) => onInputChange("label", e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
        >
          <option value="">Select label</option>
          <option value="Home">Home</option>
          <option value="Office">Office</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Other form fields... */}

      <button
        onClick={onSave}
        className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors font-medium"
      >
        {isEditing ? "Update Address" : "Save Address"}
      </button>
    </div>
  );
};

export default AddressForm;