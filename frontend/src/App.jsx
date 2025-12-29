
// import './App.css'
// // componentler
// import Navbar from './components/Navbar'
// import {BrowserRouter,Routes,Route} from 'react-router-dom'
// // sehifeler
// import Home from './pages/Home'
// import Login from './pages/Login'
// import ForgetPassword from './pages/ForgetPassword'
// import ResetPassword from './pages/ResetPassword'
// import Register from './pages/Register'
// import { Toaster } from 'react-hot-toast'
// import ProductDetails from './pages/ProductDetails'
// import PrivateRoute from './components/PrivateRoute'
// import GuestRoute from './components/GuestRoute'
// import ProductForm from './components/admin/ProductForm'
// import ProductEdit from './components/admin/ProductEdit'
// import AdminDashboard from '/src/pages/admin/AdminDashboard'

// import Unauthorizedpages from './pages/admin/Unauthorizedpages'
// import About from './pages/About'
// import Footer from './components/Footer'
// import Store from './pages/Store'
// import Profile from "./components/ui/Profile";
// import Contact from './pages/Contact'
// import Cart from './pages/Cart'


// function App() {


//   return (
//  <>
//  <BrowserRouter>
//  <Navbar/>
//  <Toaster/>
//  <Routes>
//   <Route path='/' element={
//      <PrivateRoute>
//        <Home/>
//      </PrivateRoute>
   
//   } 
//     />
//     <Route path='/about' element={<About/>}/>
//     <Route path='/store' element={<Store/>}/>
//     <Route path='/profile'element={<Profile/>}/>
//     <Route path='/contact'element={<Contact/>}/>
//   <Route path='/login' element={
//     <GuestRoute>
//          <Login/>
//     </GuestRoute>

//     }/>
//   <Route path='/forgot-password' element={<ForgetPassword/>}/>
//   <Route path="/password/reset/:token" element={<ResetPassword />} />
//   <Route path="/cart" element={<Cart />} />
//   <Route path='/register' element={
//     <GuestRoute>
//          <Register/>
//     </GuestRoute>
  
//     }/>
//   <Route path = '/mehsullar/:id' element ={
//     <PrivateRoute>
//          <ProductDetails/>
//     </PrivateRoute>
   
//     } />

// <Route path='/admin/dashboard/*' element={
//   <PrivateRoute allowedRoles={["admin"]}>
//     <AdminDashboard />
//   </PrivateRoute>
// } />

// <Route path='/admin/product/new' element = {
//       <PrivateRoute allowedRoles={["admin"]}>
//         <ProductForm/>
//       </PrivateRoute>
      
//     }/>

    
// <Route path='/admin/product/edit/:id' element = {
//       <PrivateRoute allowedRoles={["admin"]}>
//         <ProductEdit/>
//       </PrivateRoute>
      
//     }/>

//     <Route path='unauthorized' element ={ <Unauthorizedpages/>} />


  
//  </Routes>
//  <Footer/>
//  </BrowserRouter>
 
//  </>
//   )
// }

// export default App



// import './App.css'
// // componentler
// import Navbar from './components/Navbar'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// // sehifeler
// import Home from './pages/Home'
// import Login from './pages/Login'
// import ForgetPassword from './pages/ForgetPassword'
// import ResetPassword from './pages/ResetPassword'
// import Register from './pages/Register'
// import { Toaster } from 'react-hot-toast'
// import ProductDetails from './pages/ProductDetails'
// import PrivateRoute from './components/PrivateRoute'
// import GuestRoute from './components/GuestRoute'
// import ProductForm from './components/admin/ProductForm'
// import ProductEdit from './components/admin/ProductEdit'
// import AdminDashboard from '/src/pages/admin/AdminDashboard'
// import Unauthorizedpages from './pages/admin/Unauthorizedpages'
// import About from './pages/About'
// import Footer from './components/Footer'
// import Store from './pages/Store'
// import Profile from "./components/ui/Profile"
// import Contact from './pages/Contact'
// import Cart from './pages/Cart'

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Navbar />
//         <Toaster />

//         <Routes>

//           {/* 🔓 PUBLIC ROUTES */}
//           <Route path="/" element={<Home />} />
//           <Route path='/about' element={<About />} />
//           <Route path='/store' element={<Store />} />
//           <Route path='/contact' element={<Contact />} />
//           <Route path='/mehsullar/:id' element={<ProductDetails />} />

//           {/* 🛒 Cart (İstəyə bağlı, public və ya protected) */}
//           <Route path='/cart' element={<Cart />} />

//           {/* 👤 AUTH ROUTES */}
//           <Route path='/login' element={
//             <GuestRoute>
//               <Login />
//             </GuestRoute>
//           } />

//           <Route path='/register' element={
//             <GuestRoute>
//               <Register />
//             </GuestRoute>
//           } />

//           <Route path='/forgot-password' element={<ForgetPassword />} />
//           <Route path="/password/reset/:token" element={<ResetPassword />} />

//           {/* 🔐 USER PROTECTED ROUTES */}
//           <Route path='/profile' element={
//             <PrivateRoute>
//               <Profile />
//             </PrivateRoute>
//           } />

//           {/* 🔐 ADMIN PROTECTED ROUTES */}
//           <Route path='/admin/dashboard/*' element={
//             <PrivateRoute allowedRoles={["admin"]}>
//               <AdminDashboard />
//             </PrivateRoute>
//           } />

//           <Route path='/admin/product/new' element={
//             <PrivateRoute allowedRoles={["admin"]}>
//               <ProductForm />
//             </PrivateRoute>
//           } />

//           <Route path='/admin/product/edit/:id' element={
//             <PrivateRoute allowedRoles={["admin"]}>
//               <ProductEdit />
//             </PrivateRoute>
//           } />

//           {/* 🚫 Unauthorized page */}
//           <Route path='/unauthorized' element={<Unauthorizedpages />} />

//         </Routes>

//         <Footer />
//       </BrowserRouter>
//     </>
//   )
// }

// export default App




// import './App.css'
// // componentler
// import Navbar from './components/Navbar'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// // sehifeler
// import Home from './pages/Home'
// import Login from './pages/Login'
// import ForgetPassword from './pages/ForgetPassword'
// import ResetPassword from './pages/ResetPassword'
// import Register from './pages/Register'
// import { Toaster } from 'react-hot-toast'
// import ProductDetails from './pages/ProductDetails'
// import PrivateRoute from './components/PrivateRoute'
// import GuestRoute from './components/GuestRoute'
// import ProductForm from './components/admin/ProductForm'
// import ProductEdit from './components/admin/ProductEdit'
// import AdminDashboard from '/src/pages/admin/AdminDashboard'
// import Unauthorizedpages from './pages/admin/Unauthorizedpages'
// import About from './pages/About'
// import Footer from './components/Footer'
// import Store from './pages/Store'
// import Profile from "./components/ui/Profile"
// import Contact from './pages/Contact'
// import Cart from './pages/Cart'

// // DÜZƏLDİLMİŞ İMPORT: user qovluğu silindi
// import MyReferrals from './components/MyReferrals' 

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Navbar />
//         <Toaster />

//         <Routes>
//           {/* ... digər routelar eyni qalır ... */}
//           <Route path="/" element={<Home />} />
//           <Route path='/about' element={<About />} />
//           <Route path='/store' element={<Store />} />
//           <Route path='/contact' element={<Contact />} />
//           <Route path='/mehsullar/:id' element={<ProductDetails />} />
//           <Route path='/cart' element={<Cart />} />

//           <Route path='/login' element={<GuestRoute><Login /></GuestRoute>} />
//           <Route path='/register' element={<GuestRoute><Register /></GuestRoute>} />
//           <Route path='/forgot-password' element={<ForgetPassword />} />
//           <Route path="/password/reset/:token" element={<ResetPassword />} />

//           <Route path='/profile' element={<PrivateRoute><Profile /></PrivateRoute>} />

//           {/* REFERALLAR ROUTE */}
//           <Route path='/me/referrals' element={
//             <PrivateRoute>
//               <MyReferrals />
//             </PrivateRoute>
//           } />

//           <Route path='/admin/dashboard/*' element={<PrivateRoute allowedRoles={["admin"]}><AdminDashboard /></PrivateRoute>} />
//           <Route path='/admin/product/new' element={<PrivateRoute allowedRoles={["admin"]}><ProductForm /></PrivateRoute>} />
//           <Route path='/admin/product/edit/:id' element={<PrivateRoute allowedRoles={["admin"]}><ProductEdit /></PrivateRoute>} />
//           <Route path='/unauthorized' element={<Unauthorizedpages />} />
//         </Routes>

//         <Footer />
//       </BrowserRouter>
//     </>
//   )
// }

// export default App


import './App.css'
// componentler
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// sehifeler
import Home from './pages/Home'
import Login from './pages/Login'
import ForgetPassword from './pages/ForgetPassword'
import ResetPassword from './pages/ResetPassword'
import Register from './pages/Register'
import { Toaster } from 'react-hot-toast'
import ProductDetails from './pages/ProductDetails'
import PrivateRoute from './components/PrivateRoute'
import GuestRoute from './components/GuestRoute'
import ProductForm from './components/admin/ProductForm'
import ProductEdit from './components/admin/ProductEdit'
import AdminDashboard from '/src/pages/admin/AdminDashboard'
import Unauthorizedpages from './pages/admin/Unauthorizedpages'
import About from './pages/About'
import Footer from './components/Footer'
import Store from './pages/Store'
import Profile from "./components/ui/Profile"
import Contact from './pages/Contact'
import Cart from './pages/Cart'

// KOMPONENTLƏR
import MyReferrals from './components/MyReferrals' 
import MyTree from './components/MyTree' // Yeni ağac görünüşü

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Toaster />

        <Routes>
          {/* ÜMUMİ SEHİFƏLƏR */}
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/mehsullar/:id' element={<ProductDetails />} />
          <Route path='/cart' element={<Cart />} />

          {/* Navbardakı My Tree linki /store-dur, ona görə bura MyTree komponentini qoyuruq */}
          <Route path='/profile' element={
            <PrivateRoute>
              <MyTree />
            </PrivateRoute>
          } />

          {/* Əgər köhnə Mağaza səhifəsinə girmək istəsən, yolu /shop etdim */}
          <Route path='/store' element={<Store />} />

          {/* AUTH SEHİFƏLƏRİ */}
          <Route path='/login' element={<GuestRoute><Login /></GuestRoute>} />
          <Route path='/register' element={<GuestRoute><Register /></GuestRoute>} />
          <Route path='/forgot-password' element={<ForgetPassword />} />
          <Route path="/password/reset/:token" element={<ResetPassword />} />

          {/* PROFİL VƏ REFERAL CƏDVƏLİ */}
          <Route path='/profile' element={<PrivateRoute><Profile /></PrivateRoute>} />
          <Route path='/me/referrals' element={
            <PrivateRoute>
              <MyReferrals />
            </PrivateRoute>
          } />

          {/* ADMİN SEHİFƏLƏRİ */}
          <Route path='/admin/dashboard/*' element={
            <PrivateRoute allowedRoles={["admin"]}>
              <AdminDashboard />
            </PrivateRoute>
          } />
          
          <Route path='/admin/product/new' element={
            <PrivateRoute allowedRoles={["admin"]}>
              <ProductForm />
            </PrivateRoute>
          } />
          
          <Route path='/admin/product/edit/:id' element={
            <PrivateRoute allowedRoles={["admin"]}>
              <ProductEdit />
            </PrivateRoute>
          } />

          <Route path='/unauthorized' element={<Unauthorizedpages />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App