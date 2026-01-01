// import React, { useState, useEffect, useRef } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useGetUserProfileQuery, useLogoutMutation } from '../redux/api/userApi';
// import { useSelector } from 'react-redux';

// const Navbar = () => {
//   const navigate = useNavigate();
//   const { data, isLoading } = useGetUserProfileQuery();
//   const [logout] = useLogoutMutation();
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const dropdownRef = useRef(null);
//   const user = data?.user;

//   const totalQuantity = useSelector(state => state.cart.totalQuantity);

//   const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

//   const handleLogout = async () => {
//     try {
//       await logout().unwrap();
//       navigate('/login');
//     } catch (err) {
//       console.error('Logout error', err);
//     }
//   };

//   // Click outside to close dropdown
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
//     <nav className="bg-white border-b border-gray-200 dark:bg-gray-900 py-5 relative">
//       <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between">

//         {/* LOGO */}
//         <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
//           <img
//             src="https://i.pinimg.com/1200x/e6/2c/51/e62c513ea89fe1a701275a8c6cf58118.jpg"
//             alt="Logo"
//             className="h-20 w-auto"
//           />
//           <span className="text-2xl font-semibold dark:text-white">Flame Team</span>
//         </Link>

//         {/* MENU LINKS */}
//         <ul className="hidden md:flex items-center space-x-6">
//           <li><Link to="/" className="hover:text-green-600">Ana səhifə</Link></li>
//           <li><Link to="/about" className="hover:text-green-600">Haqqında</Link></li>
//           <li><Link to="/store" className="hover:text-green-600">Ətirlər</Link></li>
//           {user && <li><Link to="/profile" className="hover:text-green-600">My tree</Link></li>}
//           <li><Link to="/contact" className="hover:text-green-600">Əlaqə</Link></li>
//         </ul>

//         {/* RIGHT SIDE: CART + LOGIN / AVATAR */}
//         <div className="flex items-center space-x-4 md:space-x-6" ref={dropdownRef}>



//         {/* <div className="social-icons flex gap-4">
//   <a
//     href="https://www.tiktok.com/@flame.team6?_r=1&_t=ZS-9250VrlkSvt"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     <i className="fa-brands fa-tiktok"></i>
//   </a>


//   <a
//     href="https://www.instagram.com/fla.meteam?igsh=YW93bTdlcHM5d2Zl"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     <i className="fa-brands fa-instagram"></i>
//   </a>

//   <a
//     href="https://www.youtube.com/@səninkanalin"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     <i className="fa-brands fa-youtube"></i>
//   </a>
// </div> */}



//           {/* CART */}
//           <Link to="/cart" className="relative text-gray-700 dark:text-white">
//             <i className="fa fa-shopping-cart text-xl"></i>
//             {totalQuantity > 0 && (
//               <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
//                 {totalQuantity}
//               </span>
//             )}
//           </Link>

//           {/* USER AVATAR OR LOGIN BUTTON */}
//           {isLoading ? (
//             <div className="w-8 h-8 rounded-full bg-gray-300 animate-pulse" />
//           ) : user ? (
//             <div className="relative">
//               <button
//                 onClick={toggleDropdown}
//                 className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 focus:ring-2 focus:ring-gray-300"
//               >
//                 <img
//                   src="https://static.vecteezy.com/system/resources/previews/026/966/960/non_2x/default-avatar-profile-icon-of-social-media-user-vector.jpg"
//                   alt="User Avatar"
//                   className="w-8 h-8 rounded-full"
//                 />
//               </button>

//               {dropdownOpen && (
//                 <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 rounded-lg shadow-lg z-50 divide-y divide-gray-100 dark:divide-gray-600">
//                   <div className="px-4 py-3">
//                     <p className="text-sm font-medium text-gray-900 dark:text-white">{user.name}</p>
//                     <p className="text-sm text-gray-500 truncate dark:text-gray-300">{user.email}</p>
//                   </div>
//                   <ul className="py-2">
//                     {user.role === 'admin' && (
//                       <li>
//                         <Link
//                           to="/admin/dashboard"
//                           className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200"
//                         >
//                           Dashboard
//                         </Link>
//                       </li>
//                     )}
//                     <li>
//                       <button
//                         onClick={handleLogout}
//                         className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200"
//                       >
//                         Logout
//                       </button>
//                     </li>
//                   </ul>
//                 </div>
//               )}
//             </div>
//           ) : (
//             <button
//               onClick={() => navigate('/login')}
//               className="text-white bg-green-600 px-3 py-2 rounded hover:bg-green-700"
//             >
//               Login
//             </button>
//           )}

//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



// import React, { useState, useEffect, useRef } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useGetUserProfileQuery, useLogoutMutation } from '../redux/api/userApi';
// import { useSelector } from 'react-redux';

// const Navbar = () => {
//   const navigate = useNavigate();
//   const { data, isLoading } = useGetUserProfileQuery();
//   const [logout] = useLogoutMutation();

//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const dropdownRef = useRef(null);
//   const user = data?.user;

//   const totalQuantity = useSelector(state => state.cart.totalQuantity);

//   const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

//   const handleLogout = async () => {
//     try {
//       await logout().unwrap();
//       navigate('/login');
//     } catch (err) {
//       console.error('Logout error', err);
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
//       <nav className="bg-white border-b border-gray-200 py-5 relative z-40">
//         <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between">

//           {/* LOGO */}
//           <Link to="/" className="flex items-center space-x-3">
//             <img
//               src="https://i.pinimg.com/1200x/e6/2c/51/e62c513ea89fe1a701275a8c6cf58118.jpg"
//               alt="Logo"
//               className="h-20 w-auto"
//             />
//             <span className="text-2xl font-semibold">Flame Team</span>
//           </Link>

//           {/* DESKTOP MENU */}
//           <ul className="hidden md:flex items-center space-x-6">
//             <li><Link to="/" className="hover:text-green-600">Ana səhifə</Link></li>
//             <li><Link to="/about" className="hover:text-green-600">Haqqında</Link></li>
//             <li><Link to="/store" className="hover:text-green-600">Ətirlər</Link></li>
//             {user && <li><Link to="/profile" className="hover:text-green-600">My tree</Link></li>}
//             <li><Link to="/contact" className="hover:text-green-600">Əlaqə</Link></li>
//           </ul>

//           {/* RIGHT SIDE */}
//           <div className="flex items-center space-x-4 md:space-x-6" ref={dropdownRef}>

//             {/* SOCIAL ICONS */}
//             {/* <div className="social-icons flex gap-4 text-xl">
//               <a href="https://www.tiktok.com/@flame.team6" target="_blank" rel="noreferrer">
//                 <i className="fa-brands fa-tiktok"></i>
//               </a>
//               <a href="https://www.instagram.com/fla.meteam" target="_blank" rel="noreferrer">
//                 <i className="fa-brands fa-instagram"></i>
//               </a>
//               <a href="https://www.youtube.com/@səninkanalin" target="_blank" rel="noreferrer">
//                 <i className="fa-brands fa-youtube"></i>
//               </a>
//             </div> */}
             
//                  {/* SOCIAL ICONS */}


//             {/* USER */}
//             {isLoading ? (
//               <div className="w-8 h-8 rounded-full bg-gray-300 animate-pulse" />
//             ) : user ? (
//               <div className="relative">
//                 <button
//                   onClick={toggleDropdown}
//                   className="w-8 h-8 rounded-full overflow-hidden focus:ring-2 focus:ring-gray-300"
//                 >
//                   <img
//                     src="https://static.vecteezy.com/system/resources/previews/026/966/960/non_2x/default-avatar-profile-icon-of-social-media-user-vector.jpg"
//                     alt="avatar"
//                   />
//                 </button>

//                 {dropdownOpen && (
//                   <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50">
//                     <div className="px-4 py-3 border-b">
//                       <p className="text-sm font-medium">{user.name}</p>
//                       <p className="text-sm text-gray-500 truncate">{user.email}</p>
//                     </div>
//                     <ul className="py-2">
//                       {user.role === 'admin' && (
//                         <li>
//                           <Link to="/admin/dashboard" className="block px-4 py-2 hover:bg-gray-100">
//                             Dashboard
//                           </Link>
//                         </li>
//                       )}
//                       <li>
//                         <button
//                           onClick={handleLogout}
//                           className="w-full text-left px-4 py-2 hover:bg-gray-100"
//                         >
//                           Logout
//                         </button>
//                       </li>
//                     </ul>
//                   </div>
//                 )}
//               </div>
//             ) : (
//               <button
//                 onClick={() => navigate('/login')}
//                 className="bg-green-600 text-white px-3 py-2 rounded hover:bg-green-700"
//               >
//                 Login
//               </button>
//             )}

//             {/* MOBILE MENU BUTTON */}
//             <button
//               onClick={() => setMobileMenuOpen(true)}
//               className="md:hidden p-2 rounded hover:bg-gray-100"
//             >
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               </svg>
//             </button>

//           </div>
//         </div>
//       </nav>

//       {/* FULLSCREEN MOBILE MENU */}
//       {mobileMenuOpen && (
//         <div className="fixed inset-0 z-50 bg-[#ccc] flex flex-col">

//           <div className="flex justify-between items-center px-6 py-4 border-b border-gray-400">
//             <span className="text-2xl font-semibold">Flame Team</span>
//             <button onClick={() => setMobileMenuOpen(false)} className="text-3xl">✕</button>
//           </div>

//           <div className="flex-1 flex flex-col items-center justify-center space-y-8 text-2xl font-medium">
//             <Link onClick={() => setMobileMenuOpen(false)} to="/" className="hover:text-green-600 transition">
//               Ana səhifə
//             </Link>
//             <Link onClick={() => setMobileMenuOpen(false)} to="/about" className="hover:text-green-600 transition">
//               Haqqında
//             </Link>
//             <Link onClick={() => setMobileMenuOpen(false)} to="/store" className="hover:text-green-600 transition">
//               Ətirlər
//             </Link>
//             {user && (
//               <Link onClick={() => setMobileMenuOpen(false)} to="/profile" className="hover:text-green-600 transition">
//                 My tree
//               </Link>
//             )}
//             <Link onClick={() => setMobileMenuOpen(false)} to="/contact" className="hover:text-green-600 transition">
//               Əlaqə
//             </Link>

//             {!user && (
//               <button
//                 onClick={() => {
//                   setMobileMenuOpen(false);
//                   navigate('/login');
//                 }}
//                 className="mt-6 bg-green-600 text-white px-10 py-3 rounded text-xl hover:bg-green-700"
//               >
//                 Login
//               </button>
//             )}
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;



// import React, { useState, useEffect, useRef } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useGetUserProfileQuery, useLogoutMutation } from '../redux/api/userApi';
// import { useSelector } from 'react-redux';

// const Navbar = () => {
//   const navigate = useNavigate();
//   const { data, isLoading } = useGetUserProfileQuery();
//   const [logout] = useLogoutMutation();

//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const dropdownRef = useRef(null);
//   const user = data?.user;

//   const totalQuantity = useSelector(state => state.cart.totalQuantity);

//   const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

//   const handleLogout = async () => {
//     try {
//       await logout().unwrap();
//       setDropdownOpen(false);
//       setMobileMenuOpen(false);
//       navigate('/login');
//     } catch (err) {
//       console.error('Logout error', err);
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
//       <nav className="bg-white border-b border-gray-200 py-5 relative z-40">
//         <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between">

//           {/* LOGO */}
//           <Link to="/" className="flex items-center space-x-3">
//             <img
//               src="https://i.pinimg.com/1200x/e6/2c/51/e62c513ea89fe1a701275a8c6cf58118.jpg"
//               alt="Logo"
//               className="h-20 w-auto"
//             />
//             <span className="text-2xl font-semibold">Flame Team</span>
//           </Link>

//           {/* DESKTOP MENU */}
//           <ul className="hidden md:flex items-center space-x-6">
//             <li><Link to="/" className="hover:text-green-600">Ana səhifə</Link></li>
//             <li><Link to="/about" className="hover:text-green-600">Haqqında</Link></li>
//             <li><Link to="/store" className="hover:text-green-600">Ətirlər</Link></li>
//             {user && <li><Link to="/profile" className="hover:text-green-600">My tree</Link></li>}
//             <li><Link to="/contact" className="hover:text-green-600">Əlaqə</Link></li>
//           </ul>

//           {/* RIGHT SIDE */}
//           <div className="flex items-center space-x-4 md:space-x-6" ref={dropdownRef}>

//             {/* USER DROPDOWN (DESKTOP) */}
//             {isLoading ? (
//               <div className="w-8 h-8 rounded-full bg-gray-300 animate-pulse" />
//             ) : user ? (
//               <div className="relative hidden md:block">
//                 <button
//                   onClick={toggleDropdown}
//                   className="w-8 h-8 rounded-full overflow-hidden focus:ring-2 focus:ring-gray-300"
//                 >
//                   <img
//                     src="https://static.vecteezy.com/system/resources/previews/026/966/960/non_2x/default-avatar-profile-icon-of-social-media-user-vector.jpg"
//                     alt="avatar"
//                   />
//                 </button>

//                 {dropdownOpen && (
//                   <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50 border border-gray-100">
//                     <div className="px-4 py-3 border-b">
//                       <p className="text-sm font-medium">{user.name}</p>
//                       <p className="text-sm text-gray-500 truncate">{user.email}</p>
//                     </div>
//                     <ul className="py-2">
//                       {user.role === 'admin' && (
//                         <li>
//                           <Link to="/admin/dashboard" onClick={() => setDropdownOpen(false)} className="block px-4 py-2 hover:bg-gray-100">
//                             Dashboard
//                           </Link>
//                         </li>
//                       )}
//                       <li>
//                         <button
//                           onClick={handleLogout}
//                           className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
//                         >
//                           Logout
//                         </button>
//                       </li>
//                     </ul>
//                   </div>
//                 )}
//               </div>
//             ) : (
//               <button
//                 onClick={() => navigate('/login')}
//                 className="hidden md:block bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700"
//               >
//                 Login
//               </button>
//             )}

//             {/* MOBILE MENU BUTTON (HAMBURGER) */}
//             <button
//               onClick={() => setMobileMenuOpen(true)}
//               className="md:hidden p-2 rounded hover:bg-gray-100"
//             >
//               <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             </button>

//           </div>
//         </div>
//       </nav>

//       {/* FULLSCREEN MOBILE MENU */}
//       {mobileMenuOpen && (
//         <div className="fixed inset-0 z-50 bg-white flex flex-col animate-in fade-in duration-300">
          
//           {/* Mobile Menu Header */}
//           <div className="flex justify-between items-center px-6 py-6 border-b">
//             <span className="text-2xl font-semibold">Flame Team</span>
//             <button onClick={() => setMobileMenuOpen(false)} className="text-3xl p-2">✕</button>
//           </div>

//           {/* Mobile Menu Links */}
//           <div className="flex-1 flex flex-col items-center justify-start pt-12 space-y-8 text-2xl font-medium">
//             <Link onClick={() => setMobileMenuOpen(false)} to="/" className="hover:text-green-600 transition">Ana səhifə</Link>
//             <Link onClick={() => setMobileMenuOpen(false)} to="/about" className="hover:text-green-600 transition">Haqqında</Link>
//             <Link onClick={() => setMobileMenuOpen(false)} to="/store" className="hover:text-green-600 transition">Ətirlər</Link>
            
//             {/* Login olubsa Mobildə görünən hissə */}
//             {user && (
//               <>
//                 <Link onClick={() => setMobileMenuOpen(false)} to="/profile" className="text-green-600">My tree</Link>
                
//                 {user.role === 'admin' && (
//                   <Link 
//                     onClick={() => setMobileMenuOpen(false)} 
//                     to="/admin/dashboard" 
//                     className="text-blue-600 font-bold"
//                   >
//                     Admin Dashboard
//                   </Link>
//                 )}

//                 <button 
//                   onClick={handleLogout} 
//                   className="text-red-500 font-bold mt-4"
//                 >
//                   Logout
//                 </button>
//               </>
//             )}

//             <Link onClick={() => setMobileMenuOpen(false)} to="/contact" className="hover:text-green-600 transition">Əlaqə</Link>

//             {/* Login olmayıbsa */}
//             {!user && (
//               <button
//                 onClick={() => {
//                   setMobileMenuOpen(false);
//                   navigate('/login');
//                 }}
//                 className="mt-6 bg-green-600 text-white px-12 py-3 rounded-full text-xl shadow-lg"
//               >
//                 Giriş et
//               </button>
//             )}
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;



import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useGetUserProfileQuery, useLogoutMutation } from '../redux/api/userApi';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useGetUserProfileQuery();
  const [logout] = useLogoutMutation();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const dropdownRef = useRef(null);
  const user = data?.user;

  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleLogout = async () => {
    try {
      await logout().unwrap();
      setDropdownOpen(false);
      setMobileMenuOpen(false);
      navigate('/login');
    } catch (err) {
      console.error('Logout error', err);
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

          {/* LOGO */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="https://i.pinimg.com/1200x/e6/2c/51/e62c513ea89fe1a701275a8c6cf58118.jpg"
              alt="Logo"
              className="h-16 w-auto object-contain"
            />
            <span className="text-xl font-bold text-gray-800">Flame Team</span>
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center space-x-8 font-medium text-gray-600">
            <li><Link to="/" className="hover:text-green-600 transition">Ana səhifə</Link></li>
            <li><Link to="/about" className="hover:text-green-600 transition">Haqqında</Link></li>
            <li><Link to="/store" className="hover:text-green-600 transition">Ətirlər</Link></li>
            {user && <li><Link to="/profile" className="hover:text-green-600 transition">My tree</Link></li>}
            <li><Link to="/contact" className="hover:text-green-600 transition">Əlaqə</Link></li>
          </ul>

          {/* RIGHT SIDE (Desktop & Mobile trigger) */}
          <div className="flex items-center space-x-4" ref={dropdownRef}>
            
            {/* DESKTOP USER PROFILE */}
            {!isLoading && user ? (
              <div className="relative hidden md:block">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center space-x-2 focus:outline-none"
                >
                  <img
                    className="w-9 h-9 rounded-full border border-gray-200"
                    src="https://static.vecteezy.com/system/resources/previews/026/966/960/non_2x/default-avatar-profile-icon-of-social-media-user-vector.jpg"
                    alt="user"
                  />
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                    <div className="px-4 py-3 border-b border-gray-50">
                      <p className="text-sm font-bold text-gray-800">{user.name}</p>
                      <p className="text-xs text-gray-500 truncate">{user.email}</p>
                    </div>
                    {user.role === 'admin' && (
                      <Link to="/admin/dashboard" onClick={() => setDropdownOpen(false)} className="block px-4 py-2 text-sm text-green-600 font-semibold hover:bg-green-50">
                        Dashboard
                      </Link>
                    )}
                    <button onClick={handleLogout} className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : !isLoading && (
              <button onClick={() => navigate('/login')} className="hidden md:block bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition">
                Giriş
              </button>
            )}

            {/* MOBILE HAMBURGER BUTTON */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* FULLSCREEN MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col p-6 animate-in slide-in-from-right duration-300">
          
          {/* Mobile Header */}
          <div className="flex justify-between items-center mb-10">
            <span className="text-xl font-bold text-green-600">Flame Team</span>
            <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-gray-400">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Nav Links */}
          <div className="flex flex-col space-y-6 text-xl font-semibold text-gray-800">
            <Link onClick={() => setMobileMenuOpen(false)} to="/" className="hover:text-green-600">Ana səhifə</Link>
            <Link onClick={() => setMobileMenuOpen(false)} to="/about" className="hover:text-green-600">Haqqında</Link>
            <Link onClick={() => setMobileMenuOpen(false)} to="/store" className="hover:text-green-600">Ətirlər</Link>
            <Link onClick={() => setMobileMenuOpen(false)} to="/contact" className="hover:text-green-600">Əlaqə</Link>
          </div>

          {/* User Section at Bottom */}
          <div className="mt-auto border-t border-gray-100 pt-8 pb-10">
            {user ? (
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                   <img className="w-12 h-12 rounded-full" src="https://static.vecteezy.com/system/resources/previews/026/966/960/non_2x/default-avatar-profile-icon-of-social-media-user-vector.jpg" alt="user" />
                   <div>
                     <p className="font-bold text-gray-900">{user.name}</p>
                     <p className="text-sm text-gray-500 font-medium">Xoş gəldiniz!</p>
                   </div>
                </div>

                <Link onClick={() => setMobileMenuOpen(false)} to="/profile" className="w-full text-center py-3 bg-gray-50 rounded-xl text-green-600 font-bold border border-green-100">
                   My Tree
                </Link>

                {user.role === 'admin' && (
                  <Link 
                    onClick={() => setMobileMenuOpen(false)} 
                    to="/admin/dashboard" 
                    className="w-full text-center py-3 bg-green-600 text-white rounded-xl font-bold shadow-md shadow-green-100"
                  >
                    Admin Dashboard
                  </Link>
                )}

                <button 
                  onClick={handleLogout} 
                  className="w-full text-center py-3 text-red-500 font-semibold"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => { setMobileMenuOpen(false); navigate('/login'); }}
                className="w-full bg-green-600 text-white py-4 rounded-xl text-xl font-bold shadow-lg shadow-green-100"
              >
                Giriş et
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;





