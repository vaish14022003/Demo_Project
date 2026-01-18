
// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// export default function NotFound() {
//     const navigate = useNavigate();

//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
//             <h1 className="text-6xl font-extrabold text-red-500 mb-4">404</h1>
//             <h2 className="text-2xl font-semibold mb-2 text-gray-800">Page Not Found</h2>
//             <p className="text-gray-600 mb-6">
//                 Oops! The page you're looking for doesn't exist or has been moved.
//             </p>
//             <button
//                 onClick={() => navigate('/')}
//                 className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
//             >
//                 Back Home
//             </button>
//         </div>
//     );
// }
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
//import errorAnimation from '../assets/error_404.json'; // adjust path if needed
import errorAnimation from "../../../assets/error_404.json";

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
            <div className="w-80 sm:w-96 mb-6">
                <Lottie animationData={errorAnimation} loop={true} />
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-red-500 mb-4">404</h1>
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">Page Not Found</h2>
            <p className="text-gray-600 mb-6 text-center max-w-md">
                Oops! The page you're looking for doesn't exist or has been moved.
            </p>
            <button
                onClick={() => navigate('/')}
                className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
            >
                Back Home
            </button>
        </div>
    );
}
