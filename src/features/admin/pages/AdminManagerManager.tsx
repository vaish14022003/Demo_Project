// import React, { useState } from 'react';

// export default function AdminManageManagers() {
//     const [managers, setManagers] = useState([
//         { id: 1, name: 'Aman Sharma', email: 'aman@foodapp.com', restaurant: 'Spicy Bites' },
//         { id: 2, name: 'Priya Mehta', email: 'priya@foodapp.com', restaurant: 'Tandoori Treats' },
//         { id: 3, name: 'Rahul Verma', email: 'rahul@foodapp.com', restaurant: 'Urban Chaat' },
//     ]);

//     const handleDelete = (id: number) => {
//         const confirmed = window.confirm("Are you sure you want to delete this manager?");
//         if (confirmed) {
//             setManagers(prev => prev.filter(manager => manager.id !== id));
//             // Later add: await axios.delete(/api/admin/managers/${id})
//         }
//     };

//     return (
//         <div className="p-6">
//             <h1 className="text-2xl font-bold mb-6">Manage Managers</h1>

//             <div className="overflow-x-auto">
//                 <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
//                     <thead className="bg-gray-100 text-gray-700">
//                         <tr>
//                             <th className="px-6 py-3 text-left">Name</th>
//                             <th className="px-6 py-3 text-left">Email</th>
//                             <th className="px-6 py-3 text-left">Restaurant</th>
//                             <th className="px-6 py-3 text-center">Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {managers.map(manager => (
//                             <tr key={manager.id} className="border-b">
//                                 <td className="px-6 py-4">{manager.name}</td>
//                                 <td className="px-6 py-4">{manager.email}</td>
//                                 <td className="px-6 py-4">{manager.restaurant}</td>
//                                 <td className="px-6 py-4 text-center">
//                                     <button
//                                         onClick={() => handleDelete(manager.id)}
//                                         className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
//                                     >
//                                         Delete
//                                     </button>
//                                 </td>
//                             </tr>
//                         ))}
//                         {managers.length === 0 && (
//                             <tr>
//                                 <td colSpan={4} className="text-center text-gray-500 py-6">
//                                     No managers available.
//                                 </td>
//                             </tr>
//                         )}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// export default function AdminManageManagers() {
//     const USE_DUMMY_DATA = true; // Set to false when backend is ready
//     const API_URL = 'http://localhost:5000/api/admin/managers'; // Replace with real one

//     const dummyData = [
//         { id: 1, name: 'Aman Sharma', email: 'aman@foodapp.com', restaurant: 'Spicy Bites' },
//         { id: 2, name: 'Priya Mehta', email: 'priya@foodapp.com', restaurant: 'Tandoori Treats' },
//         { id: 3, name: 'Rahul Verma', email: 'rahul@foodapp.com', restaurant: 'Urban Chaat' },
//     ];

//     const [managers, setManagers] = useState<any[]>([]);
//     const [loading, setLoading] = useState<boolean>(true);

//     useEffect(() => {
//         const fetchManagers = async () => {
//             setLoading(true);
//             try {
//                 if (USE_DUMMY_DATA) {
//                     setTimeout(() => {
//                         setManagers(dummyData);
//                         setLoading(false);
//                     }, 800); // Simulate loading
//                 } else {
//                     const res = await axios.get(API_URL);
//                     if (Array.isArray(res.data)) {
//                         setManagers(res.data);
//                     } else {
//                         throw new Error('Invalid response format');
//                     }
//                 }
//             } catch (err) {
//                 toast.error('Failed to load managers');
//                 console.error(err);
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchManagers();
//     }, []);

//     const handleDelete = async (id: number) => {
//         const confirmed = window.confirm("Are you sure you want to delete this manager?");
//         if (!confirmed) return;

//         if (USE_DUMMY_DATA) {
//             setManagers(prev => prev.filter(manager => manager.id !== id));
//             toast.success('Manager deleted (dummy)');
//         } else {
//             try {
//                 await axios.delete(`${API_URL}/${id}`);
//                 setManagers(prev => prev.filter(manager => manager.id !== id));
//                 toast.success('Manager deleted successfully');
//             } catch (err) {
//                 toast.error('Failed to delete manager');
//                 console.error(err);
//             }
//         }
//     };

//     return (
//         <div className="p-6 relative">
//             <ToastContainer position="top-right" autoClose={3000} />

//             <h1 className="text-2xl font-bold mb-6">Manage Managers</h1>

//             {loading ? (
//                 <div className="flex justify-center items-center h-40">
//                     <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
//                 </div>
//             ) : (
//                 <div className="overflow-x-auto">
//                     <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
//                         <thead className="bg-gray-100 text-gray-700">
//                             <tr>
//                                 <th className="px-6 py-3 text-left">Name</th>
//                                 <th className="px-6 py-3 text-left">Email</th>
//                                 <th className="px-6 py-3 text-left">Restaurant</th>
//                                 <th className="px-6 py-3 text-center">Action</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {managers.map(manager => (
//                                 <tr key={manager.id} className="border-b hover:bg-gray-50 transition">
//                                     <td className="px-6 py-4">{manager.name}</td>
//                                     <td className="px-6 py-4">{manager.email}</td>
//                                     <td className="px-6 py-4">{manager.restaurant}</td>
//                                     <td className="px-6 py-4 text-center">
//                                         <button
//                                             onClick={() => handleDelete(manager.id)}
//                                             className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition"
//                                         >
//                                             Delete
//                                         </button>
//                                     </td>
//                                 </tr>
//                             ))}
//                             {managers.length === 0 && (
//                                 <tr>
//                                     <td colSpan={4} className="text-center text-gray-500 py-6">
//                                         No managers available.
//                                     </td>
//                                 </tr>
//                             )}
//                         </tbody>
//                     </table>
//                 </div>
//             )}
//         </div>
//     );
// }


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// export default function AdminManageManagers() {
//     const USE_DUMMY_DATA = true; // Set to false when backend is ready
//     const API_URL = 'http://localhost:5000/api/admin/managers'; // Replace with actual backend URL

//     const dummyData = [
//         { id: 1, name: 'Aman Sharma', email: 'aman@foodapp.com', restaurant: 'Spicy Bites' },
//         { id: 2, name: 'Priya Mehta', email: 'priya@foodapp.com', restaurant: 'Tandoori Treats' },
//         { id: 3, name: 'Rahul Verma', email: 'rahul@foodapp.com', restaurant: 'Urban Chaat' },
//     ];

//     const [managers, setManagers] = useState<any[]>([]);
//     const [loading, setLoading] = useState<boolean>(true);

//     useEffect(() => {
//         const fetchManagers = async () => {
//             setLoading(true);
//             try {
//                 if (USE_DUMMY_DATA) {
//                     setTimeout(() => {
//                         setManagers(dummyData);
//                         setLoading(false);
//                     }, 800); // simulate loading
//                 } else {
//                     const res = await axios.get(API_URL);
//                     if (Array.isArray(res.data)) {
//                         setManagers(res.data);
//                     } else {
//                         throw new Error('Invalid response format');
//                     }
//                 }
//             } catch (err) {
//                 toast.error('Failed to load managers');
//                 console.error(err);
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchManagers();
//     }, []);

//     const handleDelete = async (id: number) => {
//         // const confirmed = window.confirm("Are you sure you want to delete this manager?");
//         // if (!confirmed) return;

//         if (USE_DUMMY_DATA) {
//             setManagers(prev => prev.filter(manager => manager.id !== id));
//             toast.success('Manager deleted (dummy)');
//         } else {
//             try {
//                 await axios.delete(`${API_URL}/${id}`);
//                 setManagers(prev => prev.filter(manager => manager.id !== id));
//                 toast.success('Manager deleted successfully');
//             } catch (err) {
//                 toast.error('Failed to delete manager');
//                 console.error(err);
//             }
//         }
//     };

//     return (
//         <div className="p-6 relative">
//             <h1 className="text-2xl font-bold mb-6">Manage Managers</h1>

//             {loading ? (
//                 <div className="flex justify-center items-center h-40">
//                     <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
//                 </div>
//             ) : (
//                 <div className="overflow-x-auto">
//                     <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
//                         <thead className="bg-gray-100 text-gray-700">
//                             <tr>
//                                 <th className="px-6 py-3 text-left">Name</th>
//                                 <th className="px-6 py-3 text-left">Email</th>
//                                 <th className="px-6 py-3 text-left">Restaurant</th>
//                                 <th className="px-6 py-3 text-center">Action</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {managers.map(manager => (
//                                 <tr key={manager.id} className="border-b hover:bg-gray-50 transition">
//                                     <td className="px-6 py-4">{manager.name}</td>
//                                     <td className="px-6 py-4">{manager.email}</td>
//                                     <td className="px-6 py-4">{manager.restaurant}</td>
//                                     <td className="px-6 py-4 text-center">
//                                         <button
//                                             onClick={() => handleDelete(manager.id)}
//                                             className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition"
//                                         >
//                                             Delete
//                                         </button>
//                                     </td>
//                                 </tr>
//                             ))}
//                             {managers.length === 0 && (
//                                 <tr>
//                                     <td colSpan={4} className="text-center text-gray-500 py-6">
//                                         No managers available.
//                                     </td>
//                                 </tr>
//                             )}
//                         </tbody>
//                     </table>
//                 </div>
//             )}
//         </div>
//     );
// }


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function AdminManageManagers() {
    const USE_DUMMY_DATA = true;
    const API_URL = 'http://localhost:5000/api/admin/managers';

    const dummyData = [
        { id: 1, name: 'Aman Sharma', email: 'aman@foodapp.com', restaurant: 'Spicy Bites' },
        { id: 2, name: 'Priya Mehta', email: 'priya@foodapp.com', restaurant: 'Tandoori Treats' },
        { id: 3, name: 'Rahul Verma', email: 'rahul@foodapp.com', restaurant: 'Urban Chaat' },
    ];

    const [managers, setManagers] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchManagers = async () => {
            setLoading(true);
            try {
                if (USE_DUMMY_DATA) {
                    setTimeout(() => {
                        setManagers(dummyData);
                        setLoading(false);
                    }, 800);
                } else {
                    const res = await axios.get(API_URL);
                    if (Array.isArray(res.data)) {
                        setManagers(res.data);
                    } else {
                        throw new Error('Invalid response format');
                    }
                }
            } catch (err) {
                toast.error('Failed to load managers');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchManagers();
    }, []);

    const handleDelete = async (id: number) => {
        if (USE_DUMMY_DATA) {
            setManagers(prev => prev.filter(manager => manager.id !== id));
            toast.success('Manager deleted (dummy)');
        } else {
            try {
                await axios.delete(`${API_URL}/${id}`);
                setManagers(prev => prev.filter(manager => manager.id !== id));
                toast.success('Manager deleted successfully');
            } catch (err) {
                toast.error('Failed to delete manager');
                console.error(err);
            }
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-100 p-6">
            <div className="w-full max-w-5xl bg-white shadow-xl rounded-lg p-8">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-8 border-b pb-4">
                    Manage Managers
                </h1>

                {loading ? (
                    <div className="flex justify-center items-center h-40">
                        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-sm text-left text-gray-600">
                            <thead className="bg-blue-100 text-gray-700 text-base">
                                <tr>
                                    <th className="px-6 py-4">Name</th>
                                    <th className="px-6 py-4">Email</th>
                                    <th className="px-6 py-4">Restaurant</th>
                                    <th className="px-6 py-4 text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {managers.map((manager) => (
                                    <tr
                                        key={manager.id}
                                        className="bg-white border-b hover:bg-gray-50 transition"
                                    >
                                        <td className="px-6 py-4 font-medium">{manager.name}</td>
                                        <td className="px-6 py-4">{manager.email}</td>
                                        <td className="px-6 py-4">{manager.restaurant}</td>
                                        <td className="px-6 py-4 text-center">
                                            <button
                                                onClick={() => handleDelete(manager.id)}
                                                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                {managers.length === 0 && (
                                    <tr>
                                        <td colSpan={4} className="text-center text-gray-500 py-6">
                                            No managers available.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}
