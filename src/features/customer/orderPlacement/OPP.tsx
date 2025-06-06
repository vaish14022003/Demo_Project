import React, { useState, useEffect } from "react";
import {
  MapPin,
  Phone,
  User,
  CreditCard,
  Banknote,
  CheckCircle,
  Plus,
  Edit2,
} from "lucide-react";

import type { DeliveryAddress } from "../../../types";

interface OrderData {
  deliveryAddress: DeliveryAddress;
  paymentMethod: "mock" | "cod";
}

type PaymentMethod = "mock" | "cod";

const OrderPlacementPage: React.FC = () => {
  // Mock saved addresses - in real app, this would come from API/localStorage
  const [savedAddresses, setSavedAddresses] = useState<DeliveryAddress[]>([
    {
      id: "1",
      fullName: "John Doe",
      phoneNumber: "+1234567890",
      streetAddress: "123 Main Street, Apt 4B",
      city: "New York",
      zipCode: "10001",
      label: "Home",
    },
    {
      id: "2",
      fullName: "John Doe",
      phoneNumber: "+1234567890",
      streetAddress: "456 Business Ave, Suite 200",
      city: "New York",
      zipCode: "10002",
      label: "Office",
    },
  ]);

  const [selectedAddressId, setSelectedAddressId] = useState<string>("");
  const [showAddressForm, setShowAddressForm] = useState<boolean>(false);
  const [isEditingAddress, setIsEditingAddress] = useState<boolean>(false);
  const [editingAddressId, setEditingAddressId] = useState<string>("");

  const [deliveryAddress, setDeliveryAddress] = useState<DeliveryAddress>({
    id: "",
    fullName: "",
    phoneNumber: "",
    streetAddress: "",
    city: "",
    zipCode: "",
    label: "",
  });

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("mock");
  const [orderPlaced, setOrderPlaced] = useState<boolean>(false);
  const [orderData, setOrderData] = useState<OrderData | null>(null);

  // Check if user has saved addresses on component mount
  useEffect(() => {
    if (savedAddresses.length === 0) {
      setShowAddressForm(true);
    }
  }, [savedAddresses.length]);

  const handleInputChange = (field: keyof DeliveryAddress, value: string) => {
    setDeliveryAddress((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleAddressSelection = (addressId: string) => {
    setSelectedAddressId(addressId);
    const selectedAddress = savedAddresses.find(
      (addr) => addr.id === addressId
    );
    if (selectedAddress) {
      setDeliveryAddress(selectedAddress);
    }
    setShowAddressForm(false);
    setIsEditingAddress(false);
  };

  const handleAddNewAddress = () => {
    setShowAddressForm(true);
    setIsEditingAddress(false);
    setSelectedAddressId("");
    setDeliveryAddress({
      id: "",
      fullName: "",
      phoneNumber: "",
      streetAddress: "",
      city: "",
      zipCode: "",
      label: "",
    });
  };

  const handleEditAddress = (addressId: string) => {
    const addressToEdit = savedAddresses.find((addr) => addr.id === addressId);
    if (addressToEdit) {
      setDeliveryAddress(addressToEdit);
      setEditingAddressId(addressId);
      setIsEditingAddress(true);
      setShowAddressForm(true);
      setSelectedAddressId("");
    }
  };

  const handleSaveAddress = () => {
    if (
      !deliveryAddress.fullName ||
      !deliveryAddress.phoneNumber ||
      !deliveryAddress.streetAddress ||
      !deliveryAddress.city ||
      !deliveryAddress.zipCode
    ) {
      alert("Please fill in all address fields");
      return;
    }

    if (isEditingAddress && editingAddressId) {
      // Update existing address
      setSavedAddresses((prev) =>
        prev.map((addr) =>
          addr.id === editingAddressId
            ? { ...deliveryAddress, id: editingAddressId }
            : addr
        )
      );
      setIsEditingAddress(false);
      setEditingAddressId("");
    } else {
      // Add new address
      const newAddress = {
        ...deliveryAddress,
        id: Date.now().toString(),
        label: deliveryAddress.label || "Other",
      };
      setSavedAddresses((prev) => [...prev, newAddress]);
      setDeliveryAddress(newAddress);
    }

    setShowAddressForm(false);
  };

  const handlePlaceOrder = () => {
    // Check if address is selected or filled
    if (
      !deliveryAddress.fullName ||
      !deliveryAddress.phoneNumber ||
      !deliveryAddress.streetAddress ||
      !deliveryAddress.city ||
      !deliveryAddress.zipCode
    ) {
      alert("Please select or enter a delivery address");
      return;
    }

    const order: OrderData = {
      deliveryAddress,
      paymentMethod,
    };

    setOrderData(order);
    setOrderPlaced(true);
  };

  const resetOrder = () => {
    setOrderPlaced(false);
    setOrderData(null);
    setSelectedAddressId("");
    setShowAddressForm(savedAddresses.length === 0);
    setIsEditingAddress(false);
    setEditingAddressId("");
    setDeliveryAddress({
      id: "",
      fullName: "",
      phoneNumber: "",
      streetAddress: "",
      city: "",
      zipCode: "",
      label: "",
    });
    setPaymentMethod("mock");
  };

  if (orderPlaced && orderData && orderData.paymentMethod === "cod") {
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Order Placed Successfully!
            </h1>
            <p className="text-gray-600 mb-6">
              Your order has been confirmed and will be delivered soon.
            </p>

            <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
              <h3 className="font-semibold text-gray-900 mb-3">
                Order Summary
              </h3>

              <div className="mb-4">
                <h4 className="font-medium text-gray-700 mb-2">
                  Delivery Address:
                </h4>
                <p className="text-sm text-gray-600">
                  {orderData.deliveryAddress.fullName}
                </p>
                <p className="text-sm text-gray-600">
                  {orderData.deliveryAddress.phoneNumber}
                </p>
                <p className="text-sm text-gray-600">
                  {orderData.deliveryAddress.streetAddress},{" "}
                  {orderData.deliveryAddress.city} -{" "}
                  {orderData.deliveryAddress.zipCode}
                </p>
              </div>

              <div>
                <h4 className="font-medium text-gray-700 mb-2">
                  Payment Method:
                </h4>
                <p className="text-sm text-gray-600">Cash on Delivery</p>
              </div>
            </div>

            <button
              onClick={resetOrder}
              className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors"
            >
              Place Another Order
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Place Your Order
          </h1>
          <p className="text-gray-600">
            Complete your delivery details and payment information
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Delivery Address Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-6">
                <MapPin className="w-6 h-6 text-orange-600 mr-3" />
                <h2 className="text-xl font-semibold text-gray-900">
                  Delivery Address
                </h2>
              </div>

              {/* Address Selection (if saved addresses exist and not showing form) */}
              {savedAddresses.length > 0 && !showAddressForm && (
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Select a saved address:
                  </label>

                  <div className="space-y-3">
                    {savedAddresses.map((address) => (
                      <div
                        key={address.id}
                        className={`border rounded-lg p-4 cursor-pointer transition-all ${
                          selectedAddressId === address.id
                            ? "border-orange-500 bg-orange-50 shadow-md"
                            : "border-gray-300 hover:border-gray-400 hover:shadow-sm"
                        }`}
                        onClick={() => handleAddressSelection(address.id)}
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="flex items-center mb-2">
                              <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full font-medium">
                                {address.label}
                              </span>
                            </div>
                            <p className="font-medium text-gray-900">
                              {address.fullName}
                            </p>
                            <p className="text-sm text-gray-600">
                              {address.phoneNumber}
                            </p>
                            <p className="text-sm text-gray-600">
                              {address.streetAddress}, {address.city} -{" "}
                              {address.zipCode}
                            </p>
                          </div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleEditAddress(address.id);
                            }}
                            className="text-gray-400 hover:text-orange-600 transition-colors"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={handleAddNewAddress}
                    className="mt-4 flex items-center text-orange-600 hover:text-orange-700 font-medium transition-colors"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add New Address
                  </button>
                </div>
              )}

              {/* Address Form (for new address or editing) */}
              {showAddressForm && (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      {isEditingAddress ? "Edit Address" : "Add New Address"}
                    </h3>
                    {savedAddresses.length > 0 && (
                      <button
                        onClick={() => {
                          setShowAddressForm(false);
                          setIsEditingAddress(false);
                          setEditingAddressId("");
                        }}
                        className="text-gray-500 hover:text-gray-700 text-sm"
                      >
                        Cancel
                      </button>
                    )}
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Address Label
                    </label>
                    <select
                      value={deliveryAddress.label}
                      onChange={(e) =>
                        handleInputChange("label", e.target.value)
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
                    >
                      <option value="">Select label</option>
                      <option value="Home">Home</option>
                      <option value="Office">Office</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <User className="w-4 h-4 inline mr-2" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={deliveryAddress.fullName}
                        onChange={(e) =>
                          handleInputChange("fullName", e.target.value)
                        }
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Phone className="w-4 h-4 inline mr-2" />
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={deliveryAddress.phoneNumber}
                        onChange={(e) =>
                          handleInputChange("phoneNumber", e.target.value)
                        }
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
                        placeholder="Enter phone number"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Street Address *
                    </label>
                    <input
                      type="text"
                      value={deliveryAddress.streetAddress}
                      onChange={(e) =>
                        handleInputChange("streetAddress", e.target.value)
                      }
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
                      placeholder="Enter street address"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        City *
                      </label>
                      <input
                        type="text"
                        value={deliveryAddress.city}
                        onChange={(e) =>
                          handleInputChange("city", e.target.value)
                        }
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
                        placeholder="Enter city"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Zip Code *
                      </label>
                      <input
                        type="text"
                        value={deliveryAddress.zipCode}
                        onChange={(e) =>
                          handleInputChange("zipCode", e.target.value)
                        }
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
                        placeholder="Enter zip code"
                        required
                      />
                    </div>
                  </div>

                  <button
                    onClick={handleSaveAddress}
                    className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors font-medium"
                  >
                    {isEditingAddress ? "Update Address" : "Save Address"}
                  </button>
                </div>
              )}
            </div>

            {/* Payment Options */}
            <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
              <div className="flex items-center mb-6">
                <CreditCard className="w-6 h-6 text-orange-600 mr-3" />
                <h2 className="text-xl font-semibold text-gray-900">
                  Payment Method
                </h2>
              </div>

              <div className="space-y-4">
                <div
                  className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                    paymentMethod === "mock"
                      ? "border-orange-500 bg-orange-50"
                      : "border-gray-300 hover:border-gray-400"
                  }`}
                  onClick={() => setPaymentMethod("mock")}
                >
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="mock"
                      checked={paymentMethod === "mock"}
                      onChange={(e) =>
                        setPaymentMethod(e.target.value as PaymentMethod)
                      }
                      className="text-orange-600 focus:ring-orange-500"
                    />
                    <CreditCard className="w-5 h-5 ml-3 mr-2 text-gray-600" />
                    <div>
                      <div className="font-medium text-gray-900">
                        Mock Payment
                      </div>
                      <div className="text-sm text-gray-600">
                        Pay online using mock payment gateway
                      </div>
                    </div>
                  </label>
                </div>

                <div
                  className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                    paymentMethod === "cod"
                      ? "border-orange-500 bg-orange-50"
                      : "border-gray-300 hover:border-gray-400"
                  }`}
                  onClick={() => setPaymentMethod("cod")}
                >
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={paymentMethod === "cod"}
                      onChange={(e) =>
                        setPaymentMethod(e.target.value as PaymentMethod)
                      }
                      className="text-orange-600 focus:ring-orange-500"
                    />
                    <Banknote className="w-5 h-5 ml-3 mr-2 text-gray-600" />
                    <div>
                      <div className="font-medium text-gray-900">
                        Cash on Delivery
                      </div>
                      <div className="text-sm text-gray-600">
                        Pay when your order arrives
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Confirmation Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">
                    Delivery Address
                  </h3>
                  {deliveryAddress.fullName ? (
                    <div className="text-sm text-gray-600 space-y-1">
                      {deliveryAddress.label && (
                        <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full font-medium">
                          {deliveryAddress.label}
                        </span>
                      )}
                      <p>{deliveryAddress.fullName}</p>
                      <p>{deliveryAddress.phoneNumber}</p>
                      <p>{deliveryAddress.streetAddress}</p>
                      <p>
                        {deliveryAddress.city} - {deliveryAddress.zipCode}
                      </p>
                    </div>
                  ) : (
                    <p className="text-sm text-gray-400">
                      Select or enter delivery address
                    </p>
                  )}
                </div>

                <div>
                  <h3 className="font-medium text-gray-700 mb-2">
                    Payment Method
                  </h3>
                  <p className="text-sm text-gray-600">
                    {paymentMethod === "mock"
                      ? "Mock Payment"
                      : "Cash on Delivery"}
                  </p>
                </div>
              </div>

              <button
                onClick={handlePlaceOrder}
                className="w-full bg-orange-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 outline-none"
              >
                Place Order
              </button>

              <p className="text-xs text-gray-500 text-center mt-4">
                By placing this order, you agree to our terms and conditions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPlacementPage;
