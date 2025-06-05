import { store } from '../../../store/store';
import { addOrder } from '../../../store/slices/orderSlice';
import type { Order, OrderItem } from '../../../store/slices/orderSlice';

const customerNames = ['Rohit Sharma', 'Priya Verma', 'Rahul Singh', 'Neha Gupta', 'Vikram Malhotra'];
const phoneNumbers = ['+91 9876543210', '+91 9876543211', '+91 9876543212', '+91 9876543213', '+91 9876543214'];
const addresses = [
  '12/4 Vikas Marg, Lajpat Nagar, Delhi - 110024',
  '456 Connaught Place, Delhi - 110001',
  '789 Lajpat Nagar, Delhi - 110024',
  '321 Karol Bagh, Delhi - 110005',
  '654 South Extension, Delhi - 110049',
];


const sampleItems: Omit<OrderItem, 'quantity'>[] = [
  { id: '1', name: 'Margherita Pizza', price: 299 },
  { id: '2', name: 'Chicken Biryani', price: 349 },
  { id: '3', name: 'Caesar Salad', price: 199 },
  { id: '4', name: 'Chocolate Cake', price: 149 },
];

export const simulateNewOrder = () => {
  const randomCustomer = Math.floor(Math.random() * customerNames.length);
  const randomItems = Math.floor(Math.random() * 3) + 1; // 1-3 items
  const orderItems: OrderItem[] = [];
  let totalAmount = 0;

  for (let i = 0; i < randomItems; i++) {
    const randomItem = sampleItems[Math.floor(Math.random() * sampleItems.length)];
    const quantity = Math.floor(Math.random() * 3) + 1; // 1-3 quantity
    const existingItem = orderItems.find(item => item.id === randomItem.id);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      orderItems.push({
        ...randomItem,
        quantity
      });
    }
  }

  totalAmount = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const newOrder: Order = {
    id: `ORD${Date.now()}`,
    customerName: customerNames[randomCustomer],
    customerPhone: phoneNumbers[randomCustomer],
    items: orderItems,
    totalAmount,
    status: 'pending',
    orderTime: new Date().toISOString(),
    deliveryAddress: addresses[randomCustomer],
    paymentMethod: Math.random() > 0.7 ? 'Online' : 'Cash on Delivery',
  };

  store.dispatch(addOrder(newOrder));
};

// Simulate orders every 50 seconds for demo purposes
export const startOrderSimulation = () => {
  setInterval(() => {
    if (Math.random() > 0.7) { // 30% chance every 10 seconds
      simulateNewOrder();
    }
  }, 50000);
};
