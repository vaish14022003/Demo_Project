import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OrderPlacementPage = () => {
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('COD');
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const navigate = useNavigate()

  const handlePlaceOrder = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!fullName || !address || !postalCode || !city || !country) {
      alert('Please fill all the fields');
      return;
    }

    setIsPlacingOrder(true);
    setOrderPlaced(false);

    setTimeout(() => {
      setIsPlacingOrder(false);
      setOrderPlaced(true);

      navigate('order-status')
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#fff5f7] py-10 px-4 flex justify-center items-start">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl p-8 md:p-10 grid md:grid-cols-2 gap-10">
        {/* Left Side: Form */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-6">🍴 Delivery Information</h1>
          <form className="space-y-5">
            {[
              {
                label: 'Full Name',
                value: fullName,
                setter: setFullName,
                placeholder: 'Enter your full name',
              },
              {
                label: 'Address',
                value: address,
                setter: setAddress,
                placeholder: 'Enter your address',
              },
              {
                label: 'City',
                value: city,
                setter: setCity,
                placeholder: 'Enter city',
              },
              {
                label: 'Postal Code',
                value: postalCode,
                setter: setPostalCode,
                placeholder: 'Enter postal code',
              },
              {
                label: 'Country',
                value: country,
                setter: setCountry,
                placeholder: 'Enter country',
              },
            ].map(({ label, value, setter, placeholder }) => (
              <div key={label}>
                <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
                <input
                  type="text"
                  value={value}
                  onChange={(e) => setter(e.target.value)}
                  placeholder={placeholder}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                />
              </div>
            ))}

            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">Select Payment Method</p>
              <div className="flex flex-col gap-2">
                {['MOCK', 'COD'].map((method) => (
                  <label key={method} className="inline-flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="payment"
                      value={method}
                      checked={paymentMethod === method}
                      onChange={() => setPaymentMethod(method)}
                      className="form-radio text-red-500 focus:ring-red-500"
                    />
                    <span className="ml-3 text-gray-700">
                      {method === 'MOCK' ? 'Mock Payment' : 'Cash on Delivery'}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <button
              onClick={handlePlaceOrder}
              className="mt-4 w-full bg-red-500 hover:bg-red-600 transition text-white py-2 px-4 rounded-lg font-semibold text-lg shadow-sm"
            >
              {isPlacingOrder ? 'Placing Order...' : 'Place Order'}
            </button>

            {orderPlaced && (
              <p className="mt-4 text-green-600 font-semibold text-center text-sm">
                ✅ Your delicious order has been placed successfully!
              </p>
            )}
          </form>
        </div>

        {/* Right Side: Confirmation Summary */}
        <div className="bg-[#fff0f0] rounded-xl p-6 md:p-8 shadow-inner">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🧾 Order Summary</h2>
          <div className="space-y-3 text-gray-700 text-sm">
            <p><strong>Name:</strong> {fullName || <span className="italic text-gray-400">Not provided</span>}</p>
            <p><strong>Address:</strong> {address || <span className="italic text-gray-400">Not provided</span>}</p>
            <p><strong>City:</strong> {city || <span className="italic text-gray-400">Not provided</span>}</p>
            <p><strong>Postal Code:</strong> {postalCode || <span className="italic text-gray-400">Not provided</span>}</p>
            <p><strong>Country:</strong> {country || <span className="italic text-gray-400">Not provided</span>}</p>
            <p><strong>Payment Method:</strong> {paymentMethod}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPlacementPage;