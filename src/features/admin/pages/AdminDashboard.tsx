
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBars, FaBell, FaCog, FaUser } from 'react-icons/fa';
import { Pie, Bar, Line } from 'react-chartjs-2';

import HeaderIcons from './HeaderIcons';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
} from 'chart.js';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement
);





export default function AdminDashboard() {
    const navigate = useNavigate();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    
    const [viewMode, setViewMode] = useState<'chart' | 'value'>('chart');

    const orderStats = [
        { label: 'Delivered', value: 60, color: '#22c55e' },
        { label: 'Pending', value: 25, color: '#f97316' },
        { label: 'Other', value: 15, color: '#3b82f6' },
    ];


    const barData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'New Customers',
                data: [20, 35, 45, 60, 75, 90],
                backgroundColor: '#6366F1',
            },
        ],
    };

    const lineData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Total Revenue (₹)',
                data: [10000, 15000, 20000, 25000, 30000, 45000],
                fill: false,
                borderColor: '#10B981',
                tension: 0.3,
            },
        ],
    };

    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            {sidebarOpen && (
                <div className="w-64 bg-orange-600 text-white p-5 space-y-6">
                    <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
                    <button onClick={() => navigate('/admin/manage-managers')} className="block w-full text-left hover:bg-gray-700 px-3 py-2 rounded">
                        Manage Managers
                    </button>
                    <button onClick={() => navigate('/admin/special-orders')} className="block w-full text-left hover:bg-gray-700 px-3 py-2 rounded">
                        Special Orders
                    </button>
                </div>
            )}

            {/* Main Content */}
            <div className="flex-1 flex flex-col bg-gray-100">
                {/* Top Navbar */}
                <div className="flex items-center justify-between bg-white px-6 py-4 shadow">
                    <div className="flex items-center gap-4">
                        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-gray-600 text-xl">
                            <FaBars />
                        </button>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="border px-4 py-2 rounded-md focus:outline-none focus:ring w-64"
                        />
                    </div>


                    <HeaderIcons />
                     {/* <HeaderIcons useApi={true} /> */}



                </div>

                {/* Dashboard Content */}
                <div className="p-8 overflow-auto space-y-10">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">Admin Dashboard</h1>

                    {/* Charts Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                        {/* <div className="bg-white p-6 rounded-lg shadow">
                            <h2 className="text-xl font-semibold mb-4 text-gray-700">Order Stats Overview</h2>
                            <div className="w-60 h-60">
                                <Pie data={pieData} />
                            </div>
                        </div>
                     */}

                        <div className="bg-white p-6 rounded-lg shadow">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-semibold text-gray-700">Order Stats Overview</h2>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => setViewMode('chart')}
                                        className={`px-3 py-1 rounded text-md font-medium ${viewMode === 'chart'
                                                ? 'bg-blue-600 text-white'
                                                : 'bg-gray-200 text-gray-800'
                                            }`}
                                    >
                                        Chart
                                    </button>
                                    <button
                                        onClick={() => setViewMode('value')}
                                        className={`px-3 py-1 rounded text-md font-large ${viewMode === 'value'
                                                ? 'bg-blue-600 text-white'
                                                : 'bg-gray-200 text-gray-800'
                                            }`}
                                    >
                                        Show Values
                                    </button>
                                </div>
                            </div>

                            <div className="flex justify-around flex-wrap gap-6 h-[160px] items-center">
                                {orderStats.map((item, index) => (
                                    <div key={index} className="flex flex-col items-center justify-center">
                                        {viewMode === 'chart' ? (
                                            <div className="w-40 h-40 mt-20">
                                                <Pie
                                                    data={{
                                                        datasets: [
                                                            {
                                                                data: [item.value, 100 - item.value],
                                                                backgroundColor: [item.color, '#e5e7eb'],
                                                                borderWidth: 0,
                                                            },
                                                        ],
                                                    }}
                                                    options={{
                                                        plugins: {
                                                            legend: { display: false },
                                                            tooltip: { enabled: false },
                                                        },
                                                        cutout: '70%',
                                                        maintainAspectRatio: false,
                                                    }}
                                                />
                                            </div>
                                        ) : (
                                            <div
                                                className="flex items-center justify-center rounded-full mt-20"
                                                style={{
                                                    width: 80,
                                                    height: 80,
                                                    backgroundColor: '#f3f4f6',
                                                    fontSize: '1.2rem',
                                                    fontWeight: 600,
                                                    color: item.color,
                                                }}
                                            >
                                                {item.value}
                                            </div>
                                        )}
                                        <span className="mt-2 text-lg  font-medium">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                       
                        
                        
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h2 className="text-xl font-semibold mb-4 text-gray-700">Monthly Customer Growth</h2>
                            <div className="w-full">
                                <Bar data={barData} />
                            </div>
                        </div>
                    </div>

                
                  

                    {/* Line Chart */}
                    {/* <div className="bg-white p-6 rounded-lg shadow">
                        <h2 className="text-xl font-semibold mb-4 text-gray-700">Revenue Trend</h2>
                        <div className="w-full md:w-2/3 mx-auto">
                            <Line data={lineData} />
                        </div>
                    </div> */}
                    {/* Revenue Values Card */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Left: Revenue Trend Line Chart */}
                        <div className="bg-white p-6 rounded-lg shadow flex flex-col">
                            <h2 className="text-xl font-semibold mb-4 text-gray-700">Revenue Trend</h2>
                            <div className="flex-1">
                                <Line data={lineData} />
                            </div>
                        </div>

                        {/* Right: Total Revenue Card */}
                        <div className="bg-white p-6 rounded-lg shadow flex flex-col justify-between">
                            <div className="flex flex-col items-center mb-6">
                                {/* Icon */}
                                <div className="text-green-600 text-4xl mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.333 0-2 .667-2 2s.667 2 2 2 2-.667 2-2-.667-2-2-2zM4 6a8 8 0 1116 0v12a8 8 0 01-16 0V6z" />
                                    </svg>
                                </div>

                                {/* Total Revenue Value */}
                                <div className="text-2xl font-bold text-gray-800">
                                    ${lineData.datasets[0].data.reduce((a, b) => a + b, 0).toLocaleString()}
                                </div>
                                <div className="text-sm text-gray-500 mt-1">Total Revenue</div>
                            </div>

                            {/* Monthly Breakdown List */}
                            <ul className="space-y-8">
                                {lineData.labels.map((month, index) => (
                                    <li key={index} className="flex justify-between text-gray-600">
                                        <span>{month}</span>
                                        <span className="font-semibold text-green-600">${lineData.datasets[0].data[index].toLocaleString()}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>


{/*Analytics section*/}
                    {/* Analytics Row */}
                    <div className="text-2xl font-bold text-gray-800">Analytics</div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        {/* Feedback Sentiment */}
                        {/* <div className="bg-white p-6 rounded-lg shadow">
                            <h2 className="text-lg font-semibold text-gray-700 mb-4">Feedback Sentiment</h2>
                            <Pie data={{
                                labels: ['Positive', 'Neutral', 'Negative'],
                                datasets: [{
                                    data: [65, 25, 10],
                                    backgroundColor: ['#10B981', '#FBBF24', '#EF4444'],
                                    borderWidth: 1,
                                }]
                            }} />
                        </div> */}
                        
                        <div className="bg-white p-6 rounded-lg shadow">
                            
                            <h2 className="text-lg font-semibold text-gray-700 mb-4">Feedback Sentiment</h2>

                            <div className="flex items-center justify-between">
                                {/* Smaller Pie Chart */}
                                <div className="w-40 h-40">
                                    <Pie
                                        data={{
                                            labels: ['Positive', 'Neutral', 'Negative'],
                                            datasets: [{
                                                data: [65, 25, 10],
                                                backgroundColor: ['#10B981', '#FBBF24', '#EF4444'],
                                                borderWidth: 3,
                                            }]
                                        }}
                                        options={{
                                            plugins: {
                                                legend: {
                                                    display: false
                                                }
                                            }
                                        }}
                                    />
                                </div>

                                {/* Labels */}
                                <div className="ml-6 space-y-2 text-sm text-gray-700">
                                    <div className="flex items-center gap-2">
                                        <div className="w-5 h-5 rounded-full bg-[#10B981]"></div>
                                        <span>Positive</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-5 h-5 rounded-full bg-[#FBBF24]"></div>
                                        <span>Neutral</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-5 h-5 rounded-full bg-[#EF4444]"></div>
                                        <span>Negative</span>
                                    </div>
                                </div>
                            </div>
                        </div>






                        {/* Top Performing Manager */}
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h2 className="text-lg font-semibold text-gray-700 mb-4">Top Performing Managers</h2>
                            <Bar data={{
                                labels: ['Alice', 'Bob', 'Carol'],
                                datasets: [{
                                    label: 'Orders',
                                    data: [120, 95, 87],
                                    backgroundColor: ['#6366F1', '#3B82F6', '#60A5FA']
                                }]
                            }} options={{
                                plugins: { legend: { display: false } },
                                scales: {
                                    y: { beginAtZero: true }
                                }
                            }} />
                        </div>

                        {/* Daily Traffic */}
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h2 className="text-lg font-semibold text-gray-700 mb-4">Daily Traffic</h2>
                            <Line data={{
                                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                                datasets: [{
                                    label: 'Visits',
                                    data: [150, 180, 165, 200, 220, 240, 210],
                                    borderColor: '#3B82F6',
                                    backgroundColor: '#93C5FD',
                                    tension: 0.3,
                                    fill: true
                                }]
                            }} />
                        </div>
                    </div>





                    <div className="mt-8 px-1">
                        {/* <h3 className="text-lg font-semibold text-gray-700 mb-3 ">Quick Status Overview</h3> */}
                        <h3 className="text-2xl font-bold text-gray-800 ">Quick Status Review</h3>
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 bg-gray-200 p-4 rounded-lg shadow-sm mt-4">

                            {/* Tasks / Approvals Pending */}
                            <div className="flex items-center justify-between text-lg text-gray-800 ">
                                <span className="font-medium">Tasks / Approvals Pending</span>
                                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-semibold">5</span>
                            </div>

                            {/* Refunds Summary */}
                            <div className="flex items-center justify-between text-sm text-gray-800">
                                <span className="font-medium">Refunds Processed This Week</span>
                                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold">₹8,700</span>
                            </div>

                        </div>
                    </div>







                </div>
            </div>
        </div>
    );
}




