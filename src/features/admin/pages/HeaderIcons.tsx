
import React, { useState, useEffect } from 'react';
import { FaBell, FaCog, FaUser } from 'react-icons/fa';

type HeaderIconsProps = {
    useApi?: boolean;  // If true, fetch from API; else use dummy data
};

const HeaderIcons: React.FC<HeaderIconsProps> = ({ useApi = false }) => {
    const [showNotifications, setShowNotifications] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [showProfileMenu, setShowProfileMenu] = useState(false);

    const [notifications, setNotifications] = useState<string[]>([
        'New user signed up',
        'Server restart scheduled',
        'Profile updated',
    ]);

    const unreadCount = notifications.length;

    useEffect(() => {
        if (!useApi) return;  // If not using API, skip fetch

        const fetchNotifications = async () => {
            try {
                const response = await fetch('https://api.example.com/notifications'); // Your API URL here
                const data = await response.json();

                // Adjust according to your API response structure
                if (Array.isArray(data)) {
                    setNotifications(data);
                } else if (Array.isArray(data.notifications)) {
                    setNotifications(data.notifications);
                } else {
                    console.warn('Unexpected API format');
                }
            } catch (error) {
                console.error('Error fetching notifications:', error);
            }
        };

        fetchNotifications();
    }, [useApi]);

    return (
        <div className="relative flex items-center space-x-6">
            {/* Bell Icon */}
            <div className="relative">
                <FaBell
                    className="text-gray-600 cursor-pointer text-lg"
                    onClick={() => {
                        setShowNotifications(!showNotifications);
                        setShowSettings(false);
                        setShowProfileMenu(false);
                    }}
                />
                {unreadCount > 0 && (
                    <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                        {unreadCount}
                    </span>
                )}
                {showNotifications && (
                    <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-3 z-50">
                        <h4 className="text-md font-bold mb-2">Notifications</h4>
                        <ul className="text-md space-y-1">
                            {notifications.map((note, idx) => (
                                <li key={idx} className="hover:bg-gray-100 p-1 rounded">
                                    {note}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            {/* Settings */}
            <div className="relative">
                <FaCog
                    className="text-gray-600 cursor-pointer text-lg"
                    onClick={() => {
                        setShowSettings(!showSettings);
                        setShowNotifications(false);
                        setShowProfileMenu(false);
                    }}
                />
                {showSettings && (
                    <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-2 z-50">
                        <ul className="text-md space-y-1">
                            <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">Preferences</li>
                            <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">Theme</li>
                        </ul>
                    </div>
                )}
            </div>

            {/* Profile */}
            <div className="relative">
                <div
                    className="flex items-center space-x-2 cursor-pointer"
                    onClick={() => {
                        setShowProfileMenu(!showProfileMenu);
                        setShowNotifications(false);
                        setShowSettings(false);
                    }}
                >
                    <FaUser className="text-gray-600" />
                </div>
                {showProfileMenu && (
                    <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-2 z-50">
                        <ul className="text-md space-y-1">
                            <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">View Profile</li>
                            {/* <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">Edit Profile</li> */}
                            <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">Change Password</li>
                            <li className="hover:bg-gray-100 p-2 rounded cursor-pointer text-red-500">Logout</li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HeaderIcons;
