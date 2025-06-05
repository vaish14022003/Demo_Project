// import React, { useEffect, useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import axios from 'axios';

// export default function SpecialOrderDetails() {
//     const { orderId } = useParams();
//     const [order, setOrder] = useState<any>(null);

//     useEffect(() => {
//         const fetchOrderDetails = async () => {
//             try {
//                 const res = await axios.get(`/api/admin/special-orders/${orderId}`);
//                 setOrder(res.data);
//             } catch (err) {
//                 console.error('Failed to fetch order details', err);
//             }
//         };

//         fetchOrderDetails();
//     }, [orderId]);

//     if (!order) return <div className="p-6">Loading order details...</div>;

//     return (
//         <div className="p-6 max-w-3xl mx-auto">
//             <Link to="/admin/special-orders" className="text-blue-600 hover:underline mb-4 inline-block">← Back to Special Orders</Link>
//             <h2 className="text-2xl font-bold mb-4">Order #{order.orderId}</h2>

//             <div className="bg-white shadow-md rounded p-4 space-y-3">
//                 <p><strong>Customer:</strong> {order.customer.name}</p>
//                 <p><strong>Email:</strong> {order.customer.email}</p>
//                 <p><strong>Phone:</strong> {order.customer.phone}</p>
//                 <p><strong>Status:</strong> {order.status}</p>
//                 <p><strong>Urgency:</strong> {order.urgency}</p>
//                 <p><strong>Occasion:</strong> {order.occasion}</p>
//                 <p><strong>Bulk Order:</strong> {order.isBulkOrder ? 'Yes' : 'No'}</p>
//                 <p><strong>Special Instructions:</strong> {order.specialInstructions || 'N/A'}</p>
//             </div>
//         </div>
//     );
// }


// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// export default function SpecialOrderDetails() {
//     const { orderId } = useParams();
//     const USE_DUMMY_DATA = true; // Set to false when backend is ready
//     const API_URL = `http://localhost:5000/api/admin/special-orders/${orderId}`;

//     const [orderDetails, setOrderDetails] = useState<any>(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchOrderDetails = async () => {
//             setLoading(true);
//             try {
//                 if (USE_DUMMY_DATA) {
//                     // Simulate API delay
//                     setTimeout(() => {
//                         setOrderDetails({
//                             orderId: orderId,
//                             status: 'Preparing',
//                             urgency: 'High',
//                             occasion: 'Birthday',
//                             isBulkOrder: true,
//                             specialInstructions: 'Extra spicy, deliver before 6 PM',
//                             customer: {
//                                 name: 'Vaishnavi Singh',
//                                 email: 'vaishnavi@example.com',
//                                 phone: '9876543210',
//                             },
//                         });
//                         setLoading(false);
//                     }, 500);
//                 } else {
//                     const res = await axios.get(API_URL);
//                     setOrderDetails(res.data);
//                     setLoading(false);
//                 }
//             } catch (error) {
//                 console.error('Failed to fetch order details:', error);
//                 setLoading(false);
//             }
//         };

//         fetchOrderDetails();
//     }, [orderId]);

//     if (loading) {
//         return <div className="p-6 text-center">Loading order details...</div>;
//     }

//     if (!orderDetails) {
//         return <div className="p-6 text-center text-red-500">Order not found.</div>;
//     }

//     const {
//         status,
//         urgency,
//         occasion,
//         isBulkOrder,
//         specialInstructions,
//         customer,
//     } = orderDetails;

//     return (
//         <div className="p-6 max-w-3xl mx-auto bg-white shadow-md rounded-md">
//             <h2 className="text-2xl font-semibold mb-4">Order Details: {orderId}</h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                     <strong>Status:</strong> {status}
//                 </div>
//                 <div>
//                     <strong>Urgency:</strong> {urgency}
//                 </div>
//                 <div>
//                     <strong>Occasion:</strong> {occasion}
//                 </div>
//                 <div>
//                     <strong>Bulk Order:</strong> {isBulkOrder ? 'Yes' : 'No'}
//                 </div>
//                 <div className="md:col-span-2">
//                     <strong>Special Instructions:</strong> {specialInstructions}
//                 </div>
//                 <div className="md:col-span-2 mt-4 border-t pt-4">
//                     <h3 className="font-semibold mb-2">Customer Details</h3>
//                     <div><strong>Name:</strong> {customer?.name}</div>
//                     <div><strong>Email:</strong> {customer?.email}</div>
//                     <div><strong>Phone:</strong> {customer?.phone}</div>
//                 </div>
//             </div>
//         </div>
//     );
// }


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaUser, FaCalendarAlt, FaExclamationTriangle, FaClipboardList } from 'react-icons/fa';

export default function SpecialOrderDetails() {
    const { orderId } = useParams();
    const USE_DUMMY_DATA = true;
    const API_URL = `http://localhost:5000/api/admin/special-orders/${orderId}`;

    const [orderDetails, setOrderDetails] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrderDetails = async () => {
            setLoading(true);
            try {
                if (USE_DUMMY_DATA) {
                    setTimeout(() => {
                        setOrderDetails({
                            orderId,
                            status: 'Preparing',
                            urgency: 'High',
                            occasion: 'Birthday',
                            isBulkOrder: true,
                            specialInstructions: 'Extra spicy, deliver before 6 PM',
                            customer: {
                                name: 'Vaishnavi Singh',
                                email: 'vaishnavi@example.com',
                                phone: '9876543210',
                            },
                        });
                        setLoading(false);
                    }, 500);
                } else {
                    const res = await axios.get(API_URL);
                    setOrderDetails(res.data);
                    setLoading(false);
                }
            } catch (error) {
                console.error('Failed to fetch order details:', error);
                setLoading(false);
            }
        };

        fetchOrderDetails();
    }, [orderId]);

    if (loading) {
        return <div className="p-6 text-center text-lg font-medium">Loading order details...</div>;
    }

    if (!orderDetails) {
        return <div className="p-6 text-center text-red-500">Order not found.</div>;
    }

    const {
        status,
        urgency,
        occasion,
        isBulkOrder,
        specialInstructions,
        customer,
    } = orderDetails;

    const badgeClass = {
        Preparing: "bg-yellow-200 text-yellow-800",
        Delivered: "bg-green-200 text-green-800",
        "Out for Delivery": "bg-blue-200 text-blue-800",
    };

    return (
        <div className="p-6 max-w-3xl mx-auto bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-semibold mb-4">Order Details: {orderId}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <strong>Status:</strong> {status}
                </div>
                <div>
                    <strong>Urgency:</strong> {urgency}
                </div>
                <div>
                    <strong>Occasion:</strong> {occasion}
                </div>
                <div>
                    <strong>Bulk Order:</strong> {isBulkOrder ? 'Yes' : 'No'}
                </div>
                <div className="md:col-span-2">
                    <strong>Special Instructions:</strong> {specialInstructions}
                </div>
                <div className="md:col-span-2 mt-4 border-t pt-4">
                    <h3 className="font-semibold mb-2">Customer Details</h3>
                    <div><strong>Name:</strong> {customer?.name}</div>
                    <div><strong>Email:</strong> {customer?.email}</div>
                    <div><strong>Phone:</strong> {customer?.phone}</div>
                </div>
            </div>
        </div>
    );
}
