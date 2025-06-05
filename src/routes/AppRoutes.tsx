// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import LandingPage from '../pages/LandingPage';


// export default function AppRoutes() {
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" element={<LandingPage />} />
//             </Routes>
//         </Router>
//     );
// }

import React from 'react';
import { Routes, Route } from 'react-router-dom';






import AdminDashboard from "../features/admin/pages/AdminDashboard";
import ManageManagers from "../features/admin/pages/AdminManagerManager";
import SpecialOrders from "../features/admin/pages/AdminSpecialOrders";
//import SpecialOrderDetails from './SpecialOrderDetails';
import SpecialOrderDetails from "../features/admin/pages/SpecialOrderDetails";
import NotFound from "../features/admin/pages/NotFound";


export default function AppRoutes() {
    return (
        <Routes>

            {/* Admin Routes */}
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/manage-managers" element={<ManageManagers />} />
            <Route path="/admin/special-orders" element={<SpecialOrders />} />

            {/*For view order details:--_*/ }
            {/* <Route path="/special-orders/:orderId" element={<SpecialOrderDetails />} /> */}
            <Route path="/admin/special-orders/:orderId" element={<SpecialOrderDetails />} />



            {/* Fallback */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}