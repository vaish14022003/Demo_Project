// import React from 'react';

// export default function SpecialOrders() {
//     return (
//         <div className="p-6">
//             <h2 className="text-xl font-semibold mb-4">Special Orders</h2>
//             <table className="table-auto w-full text-left border">
//                 <thead>
//                     <tr>
//                         <th className="border px-4 py-2">Order ID</th>
//                         <th className="border px-4 py-2">Status</th>
//                         <th className="border px-4 py-2">Customer</th>
//                         <th className="border px-4 py-2">Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td className="border px-4 py-2">#ORD123</td>
//                         <td className="border px-4 py-2">Preparing</td>
//                         <td className="border px-4 py-2">Vaishnavi</td>
//                         <td className="border px-4 py-2">
//                             <select className="input mr-2">
//                                 <option>Preparing</option>
//                                 <option>Out for Delivery</option>
//                             </select>
//                             <button className="btn-secondary">View</button>
//                         </td>
//                     </tr>
//                 </tbody>
//             </table>
//         </div>
//     );
// }




// import React from 'react';

// const specialOrdersData = [
//     {
//         orderId: '#ORD123',
//         status: 'Preparing',
//         customer: 'Vaishnavi',
//         urgency: true,
//         occasion: 'Birthday',
//         isBulkOrder: false,
//     },
//     {
//         orderId: '#ORD124',
//         status: 'Out for Delivery',
//         customer: 'Rohan',
//         urgency: false,
//         occasion: null,
//         isBulkOrder: true,
//     },
//     {
//         orderId: '#ORD125',
//         status: 'Preparing',
//         customer: 'Anjali',
//         urgency: true,
//         occasion: 'Anniversary',
//         isBulkOrder: true,
//     },
// ];

// export default function SpecialOrders() {
//     return (
//         <div className="p-6">
//             <h2 className="text-2xl font-bold mb-6 text-center text-indigo-700">Special Orders</h2>
//             <div className="overflow-x-auto">
//                 <table className="min-w-full table-auto bg-white shadow-md rounded-lg overflow-hidden">
//                     <thead className="bg-indigo-100 text-indigo-800 font-semibold">
//                         <tr>
//                             <th className="border px-4 py-2">Order ID</th>
//                             <th className="border px-4 py-2">Status</th>
//                             <th className="border px-4 py-2">Customer</th>
//                             <th className="border px-4 py-2">Urgency</th>
//                             <th className="border px-4 py-2">Occasion</th>
//                             <th className="border px-4 py-2">Bulk Order</th>
//                             <th className="border px-4 py-2">Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {specialOrdersData.map((order, index) => (
//                             <tr key={index} className="border-b hover:bg-gray-50 transition">
//                                 <td className="border px-4 py-2">{order.orderId}</td>
//                                 <td className="border px-4 py-2">{order.status}</td>
//                                 <td className="border px-4 py-2">{order.customer}</td>
//                                 <td className="border px-4 py-2">
//                                     {order.urgency ? (
//                                         <span className="text-red-600 font-semibold">High</span>
//                                     ) : (
//                                         <span className="text-gray-500">Normal</span>
//                                     )}
//                                 </td>
//                                 <td className="border px-4 py-2">
//                                     {order.occasion ? (
//                                         <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm">
//                                             {order.occasion}
//                                         </span>
//                                     ) : (
//                                         '—'
//                                     )}
//                                 </td>
//                                 <td className="border px-4 py-2">
//                                     {order.isBulkOrder ? (
//                                         <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
//                                             Yes
//                                         </span>
//                                     ) : (
//                                         'No'
//                                     )}
//                                 </td>
//                                 <td className="border px-4 py-2">
//                                     <select className="border rounded px-2 py-1 mr-2">
//                                         <option>Preparing</option>
//                                         <option>Out for Delivery</option>
//                                     </select>
//                                     <button className="bg-indigo-500 text-white px-3 py-1 rounded hover:bg-indigo-600">
//                                         View
//                                     </button>
//                                 </td>
//                             </tr>
//                         ))}
//                         {specialOrdersData.length === 0 && (
//                             <tr>
//                                 <td colSpan={7} className="text-center py-6 text-gray-500">
//                                     No special orders found.
//                                 </td>
//                             </tr>
//                         )}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }



// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function SpecialOrders() {
//     return (
//         <div className="p-6">
//             <h2 className="text-2xl font-bold text-center mb-6">Special Orders</h2>

//             <table className="table-auto w-full text-left border shadow-md rounded-lg overflow-hidden">
//                 <thead className="bg-gray-100">
//                     <tr>
//                         <th className="border px-4 py-2">Order ID</th>
//                         <th className="border px-4 py-2">Status</th>
//                         <th className="border px-4 py-2">Customer</th>
//                         <th className="border px-4 py-2">Urgency</th>
//                         <th className="border px-4 py-2">Occasion</th>
//                         <th className="border px-4 py-2">Bulk Order</th>
//                         <th className="border px-4 py-2 text-center">Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr className="hover:bg-gray-50 transition">
//                         <td className="border px-4 py-2">#ORD123</td>
//                         <td className="border px-4 py-2">Preparing</td>
//                         <td className="border px-4 py-2">Vaishnavi</td>
//                         <td className="border px-4 py-2">
//                             <span className="text-red-600 font-semibold">High</span>
//                         </td>
//                         <td className="border px-4 py-2">Birthday</td>
//                         <td className="border px-4 py-2">Yes</td>
//                         <td className="border px-4 py-2 text-center">
//                             <select className="border px-2 py-1 mr-2 rounded">
//                                 <option>Preparing</option>
//                                 <option>Out for Delivery</option>
//                                 <option>Delivered</option>
//                             </select>
//                             {/* <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">
//                                 View
//                             </button> */}
//                             <Link to={`/admin/special-orders/${orderId}`}>
//                                 <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">
//                                     View
//                                 </button>
//                             </Link>
                           
                                
//                         </td>
//                     </tr>
//                 </tbody>
//             </table>
//         </div>
//     );
// }


import React from 'react';
import { Link } from 'react-router-dom';

export default function SpecialOrders() {
    const orderId = 'ORD123'; // dummy order ID

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold text-center mb-6">Special Orders</h2>

            <table className="table-auto w-full text-left border shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="border px-4 py-2">Order ID</th>
                        <th className="border px-4 py-2">Status</th>
                        <th className="border px-4 py-2">Customer</th>
                        <th className="border px-4 py-2">Urgency</th>
                        <th className="border px-4 py-2">Occasion</th>
                        <th className="border px-4 py-2">Bulk Order</th>
                        <th className="border px-4 py-2 text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="hover:bg-gray-50 transition">
                        <td className="border px-4 py-2">#{orderId}</td>
                        <td className="border px-4 py-2">Preparing</td>
                        <td className="border px-4 py-2">Vaishnavi</td>
                        <td className="border px-4 py-2">
                            <span className="text-red-600 font-semibold">High</span>
                        </td>
                        <td className="border px-4 py-2">Birthday</td>
                        <td className="border px-4 py-2">Yes</td>
                        <td className="border px-4 py-2 text-center">
                            <select className="border px-2 py-1 mr-2 rounded">
                                <option>Preparing</option>
                                <option>Out for Delivery</option>
                                <option>Delivered</option>
                            </select>

                            <Link to={`/admin/special-orders/${orderId}`}>
                                <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">
                                    View
                                </button>
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
