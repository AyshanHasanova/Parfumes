


// import React, { useState, useEffect, useRef } from 'react';
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import { useGetUserProfileQuery, useLogoutMutation } from '../redux/api/userApi';

// const Navbar = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { data, isLoading, refetch } = useGetUserProfileQuery();
//   const [logout] = useLogoutMutation();

//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const dropdownRef = useRef(null);
  
//   const user = data?.user || data;

//   useEffect(() => {
//     refetch();
//   }, [location.pathname, refetch]);

//   const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

//   const handleLogout = async () => {
//     try {
//       await logout().unwrap();
//     } catch (err) {
//       console.error('Logout error', err);
//     } finally {
//       localStorage.removeItem("token");
//       setDropdownOpen(false);
//       setMobileMenuOpen(false);
//       // Deployda səhifə tapılmadı xətasını kəsmək üçün:
//       window.location.replace("/login");
//     }
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setDropdownOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   return (
//     <>
//       <nav className="bg-white border-b border-gray-100 py-4 relative z-40">
//         <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between">
//           <Link to="/" className="flex items-center space-x-2">
//             <img src="https://i.pinimg.com/1200x/e6/2c/51/e62c513ea89fe1a701275a8c6cf58118.jpg" alt="Logo" className="h-16 w-auto object-contain" />
//             <span className="text-xl font-bold text-gray-800">Flame Team</span>
//           </Link>

//           <ul className="hidden md:flex items-center space-x-8 font-medium text-gray-600">
//             <li><Link to="/" className="hover:text-green-600 transition">Ana səhifə</Link></li>
//             <li><Link to="/about" className="hover:text-green-600 transition">Haqqında</Link></li>
//             <li><Link to="/store" className="hover:text-green-600 transition">Ətirlər</Link></li>
//             {user?.name && <li><Link to="/profile" className="hover:text-green-600 transition">My tree</Link></li>}
//             <li><Link to="/contact" className="hover:text-green-600 transition">Əlaqə</Link></li>
//           </ul>

//           <div className="flex items-center space-x-4" ref={dropdownRef}>
//             {!isLoading && user?.name ? (
//               <div className="relative hidden md:block">
//                 <button onClick={toggleDropdown} className="flex items-center space-x-2 focus:outline-none">
//                   <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold border border-green-200">
//                     {user.name?.charAt(0).toUpperCase()}
//                   </div>
//                 </button>
//                 {dropdownOpen && (
//                   <div className="absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
//                     <div className="px-4 py-3 border-b border-gray-50">
//                       <p className="text-sm font-bold text-gray-800">{user.name}</p>
//                       <p className="text-xs text-gray-500 truncate">{user.email}</p>
//                     </div>
//                     {user.role === 'admin' && (
//                       <Link to="/admin/dashboard" onClick={() => setDropdownOpen(false)} className="block px-4 py-2 text-sm text-green-600 font-semibold hover:bg-green-50">Dashboard</Link>
//                     )}
//                     <button onClick={handleLogout} className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50">Logout</button>
//                   </div>
//                 )}
//               </div>
//             ) : !isLoading && (
//               <button onClick={() => navigate('/login')} className="hidden md:block bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition">Giriş</button>
//             )}

//             <button onClick={() => setMobileMenuOpen(true)} className="md:hidden p-2 text-gray-600">
//               <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* MOBILE MENU */}
//       {mobileMenuOpen && (
//         <div className="fixed inset-0 z-50 bg-white flex flex-col p-6 animate-in slide-in-from-right duration-300">
//           <div className="flex justify-between items-center mb-10">
//             <span className="text-xl font-bold text-green-600">Flame Team</span>
//             <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-gray-400">
//               <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
//             </button>
//           </div>
//           <div className="flex flex-col space-y-6 text-xl font-semibold text-gray-800">
//             <Link onClick={() => setMobileMenuOpen(false)} to="/">Ana səhifə</Link>
//             <Link onClick={() => setMobileMenuOpen(false)} to="/about">Haqqında</Link>
//             <Link onClick={() => setMobileMenuOpen(false)} to="/store">Ətirlər</Link>
//             <Link onClick={() => setMobileMenuOpen(false)} to="/contact">Əlaqə</Link>
//           </div>
//           <div className="mt-auto border-t pt-8 pb-10">
//             {user?.name ? (
//               <div className="flex flex-col space-y-4">
//                 <div className="flex items-center space-x-3 mb-4">
//                   <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold border border-green-200">{user.name?.charAt(0).toUpperCase()}</div>
//                   <div><p className="font-bold text-gray-900">{user.name}</p><p className="text-sm text-gray-500">Xoş gəldiniz!</p></div>
//                 </div>
//                 <Link onClick={() => setMobileMenuOpen(false)} to="/profile" className="w-full text-center py-3 bg-gray-50 rounded-xl text-green-600 font-bold">My Tree</Link>
//                 {user.role === 'admin' && <Link onClick={() => setMobileMenuOpen(false)} to="/admin/dashboard" className="w-full text-center py-3 bg-green-600 text-white rounded-xl font-bold">Admin Dashboard</Link>}
//                 <button onClick={handleLogout} className="w-full text-center py-3 text-red-500 font-semibold">Logout</button>
//               </div>
//             ) : (
//               <button onClick={() => { setMobileMenuOpen(false); navigate('/login'); }} className="w-full bg-green-600 text-white py-4 rounded-xl text-xl font-bold">Giriş et</button>
//             )}
//           </div>
//         </div>
//       )}
//     </>
//   );
// };
// export default Navbar;


import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useGetUserProfileQuery, useLogoutMutation } from '../redux/api/userApi';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { data, isLoading, refetch } = useGetUserProfileQuery();
  const [logout] = useLogoutMutation();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const user = data?.user || data;

  useEffect(() => {
    refetch();
  }, [location.pathname, refetch]);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleLogout = async () => {
    try {
      await logout().unwrap();
    } catch (err) {
      console.error('Logout error', err);
    } finally {
      localStorage.removeItem("token");
      setDropdownOpen(false);
      setMobileMenuOpen(false);
      // iPhone-da sessiyanı tam sıfırlamaq üçün ən yaxşı yol:
      window.location.replace("/login");
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <nav className="bg-white border-b border-gray-100 py-4 relative z-40">
        <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src="https://i.pinimg.com/1200x/e6/2c/51/e62c513ea89fe1a701275a8c6cf58118.jpg" alt="Logo" className="h-16 w-auto object-contain" />
            <span className="text-xl font-bold text-gray-800">Flame Team</span>
          </Link>

          <ul className="hidden md:flex items-center space-x-8 font-medium text-gray-600">
            <li><Link to="/" className="hover:text-green-600 transition">Ana səhifə</Link></li>
            <li><Link to="/about" className="hover:text-green-600 transition">Haqqında</Link></li>
            <li><Link to="/store" className="hover:text-green-600 transition">Ətirlər</Link></li>
            {user?.name && <li><Link to="/profile" className="hover:text-green-600 transition">My tree</Link></li>}
            <li><Link to="/contact" className="hover:text-green-600 transition">Əlaqə</Link></li>
          </ul>

          <div className="flex items-center space-x-4" ref={dropdownRef}>
            {!isLoading && user?.name ? (
              <div className="relative hidden md:block">
                <button onClick={toggleDropdown} className="flex items-center space-x-2 focus:outline-none">
                  <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold border border-green-200">
                    {user.name?.charAt(0).toUpperCase()}
                  </div>
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                    <div className="px-4 py-3 border-b border-gray-50">
                      <p className="text-sm font-bold text-gray-800">{user.name}</p>
                      <p className="text-xs text-gray-500 truncate">{user.email}</p>
                    </div>
                    {user.role === 'admin' && (
                      <Link to="/admin/dashboard" onClick={() => setDropdownOpen(false)} className="block px-4 py-2 text-sm text-green-600 font-semibold hover:bg-green-50">Dashboard</Link>
                    )}
                    <button onClick={handleLogout} className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50">Logout</button>
                  </div>
                )}
              </div>
            ) : !isLoading && (
              <button onClick={() => navigate('/login')} className="hidden md:block bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition">Giriş</button>
            )}

            <button onClick={() => setMobileMenuOpen(true)} className="md:hidden p-2 text-gray-600">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col p-6 animate-in slide-in-from-right duration-300">
          <div className="flex justify-between items-center mb-10">
            <span className="text-xl font-bold text-green-600">Flame Team</span>
            <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-gray-400">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          <div className="flex flex-col space-y-6 text-xl font-semibold text-gray-800">
            <Link onClick={() => setMobileMenuOpen(false)} to="/">Ana səhifə</Link>
            <Link onClick={() => setMobileMenuOpen(false)} to="/about">Haqqında</Link>
            <Link onClick={() => setMobileMenuOpen(false)} to="/store">Ətirlər</Link>
            <Link onClick={() => setMobileMenuOpen(false)} to="/contact">Əlaqə</Link>
          </div>
          <div className="mt-auto border-t pt-8 pb-10">
            {user?.name ? (
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold border border-green-200">{user.name?.charAt(0).toUpperCase()}</div>
                  <div><p className="font-bold text-gray-900">{user.name}</p><p className="text-sm text-gray-500 font-medium">Xoş gəldiniz!</p></div>
                </div>
                <Link onClick={() => setMobileMenuOpen(false)} to="/profile" className="w-full text-center py-3 bg-gray-50 rounded-xl text-green-600 font-bold">My Tree</Link>
                {user.role === 'admin' && <Link onClick={() => setMobileMenuOpen(false)} to="/admin/dashboard" className="w-full text-center py-3 bg-green-600 text-white rounded-xl font-bold">Admin Dashboard</Link>}
                <button onClick={handleLogout} className="w-full text-center py-3 text-red-500 font-semibold">Logout</button>
              </div>
            ) : (
              <button onClick={() => { setMobileMenuOpen(false); navigate('/login'); }} className="w-full bg-green-600 text-white py-4 rounded-xl text-xl font-bold">Giriş et</button>
            )}
          </div>
        </div>
      )}
    </>
  );
};
export default Navbar;



















