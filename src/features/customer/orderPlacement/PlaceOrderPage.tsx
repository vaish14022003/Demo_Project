import { useState } from "react";
import type { DeliveryAddress } from "../../../types";
import { AddressSelection } from "./AddressSelection";
import { AddressForm } from "./AddressForm";
import { PaymentMethodSelector } from "./PaymentMethodSelector";
import { OrderSummarySidebar } from "./OrderSummarySidebar";
import { OrderSuccess } from "./OrderSuccess";

const initialAddresses: DeliveryAddress[] = [
  {
    fullName: "John Doe",
    phoneNumber: "1234567890",
    streetAddress: "123 Main St",
    city: "Springfield",
    zipCode: "12345",
  },
];

export default function PlaceOrderPage() {
  const [addresses, setAddresses] = useState(initialAddresses);
  const [selectedAddressIndex, setSelectedAddressIndex] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("Cash On Delivery");
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);

  const handleAddNew = () => {
    setIsAddingNew(true);
    setIsEditing(false);
  };

  const handleEdit = (index: number) => {
    setEditingIndex(index);
    setIsEditing(true);
    setIsAddingNew(false);
  };

  const handleSaveAddress = (address: DeliveryAddress) => {
    if (isEditing && editingIndex !== null) {
      const newAddresses = [...addresses];
      newAddresses[editingIndex] = address;
      setAddresses(newAddresses);
      setSelectedAddressIndex(editingIndex);
    } else if (isAddingNew) {
      setAddresses([...addresses, address]);
      setSelectedAddressIndex(addresses.length);
    }
    setIsEditing(false);
    setIsAddingNew(false);
    setEditingIndex(null);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setIsAddingNew(false);
    setEditingIndex(null);
  };

  const handlePlaceOrder = () => {
    setIsPlacingOrder(true);
    setTimeout(() => {
      setIsPlacingOrder(false);
      setOrderPlaced(true);
    }, 2000); // Simulate async order processing
  };

  if (orderPlaced) {
    return <OrderSuccess />;
  }

  return (
    <div className="min-h-screen flex bg-gray-100">
      <main className="flex-1 p-6 max-w-4xl mx-auto">
        {isEditing || isAddingNew ? (
          <AddressForm
            initialData={isEditing && editingIndex !== null ? addresses[editingIndex] : undefined}
            onSave={handleSaveAddress}
            onCancel={handleCancelEdit}
          />
        ) : (
          <>
            <AddressSelection
              addresses={addresses}
              selectedIndex={selectedAddressIndex}
              onSelect={setSelectedAddressIndex}
              onEdit={handleEdit}
              onAddNew={handleAddNew}
            />

            <PaymentMethodSelector
              paymentMethod={paymentMethod}
              onChange={setPaymentMethod}
            />
          </>
        )}
      </main>

      <aside className="w-96 border-l bg-white">
        <OrderSummarySidebar
          selectedAddress={addresses[selectedAddressIndex]}
          paymentMethod={paymentMethod}
          onPlaceOrder={handlePlaceOrder}
          isPlacingOrder={isPlacingOrder}
        />
      </aside>
    </div>
  );
}
