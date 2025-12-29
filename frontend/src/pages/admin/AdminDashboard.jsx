

// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import ProductList from '../../components/admin/ProductList';
// import ProductForm from '../../components/admin/ProductForm'; // Yeni məhsul üçün
// import ProductEdit from '../../components/admin/ProductEdit'; // Redaktə üçün

// const AdminDashboard = () => {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<ProductList />} />
//         <Route path="new" element={<ProductForm />} />
//         <Route path="edit/:id" element={<ProductEdit />} />
//       </Routes>
//     </>
//   );
// };

// export default AdminDashboard;

import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import ProductList from '../../components/admin/ProductList';
import ProductForm from '../../components/admin/ProductForm'; 
import ProductEdit from '../../components/admin/ProductEdit';
import ReferralManagement from '../../components/admin/ReferralManagement'; // YENİ İMPORT

const AdminDashboard = () => {
  const location = useLocation();

  // Aktiv səhifəni rəngləndirmək üçün köməkçi funksiya
  const isActive = (path) => location.pathname.endsWith(path) ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700";

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Admin Paneli</h1>

      {/* ADMIN MENYU (TABLAR) */}
      <div className="flex justify-center gap-4 mb-10">
        <Link 
          to="/admin/dashboard" 
          className={`px-6 py-2 rounded-full font-semibold transition ${location.pathname === "/admin/dashboard" || location.pathname === "/admin/dashboard/" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}`}
        >
          Məhsullar
        </Link>
        <Link 
          to="referrals" 
          className={`px-6 py-2 rounded-full font-semibold transition ${isActive("referrals")}`}
        >
          Referal Sistemi
        </Link>
        <Link 
          to="new" 
          className={`px-6 py-2 rounded-full font-semibold transition ${isActive("new")}`}
        >
          Yeni Məhsul +
        </Link>
      </div>

      {/* DASHBOARD KONTENTİ */}
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="new" element={<ProductForm />} />
          <Route path="edit/:id" element={<ProductEdit />} />
          
          {/* YENİ ROUTE: Referalların İdarə Edilməsi */}
          <Route path="referrals" element={<ReferralManagement />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;