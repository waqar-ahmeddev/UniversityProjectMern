// import React from "react";
// import { Link } from "react-router-dom";
// import { useNavigate } from 'react-router-dom'
// import { NavLink } from "react-router-dom";
// const Sidebar = () => {
//     const navigate = useNavigate();
//   const printClick = () => {
//     // Shop Now button click handler
//     navigate('/');
//     // Yahan aap apne shop page ya categories page par navigate kar sakte hain
//   }
//   return (
    
//     <div className="fixed top-0 left-0 w-64 h-screen bg-[#14532D] text-white p-5 z-50">

//       {/* Logo */}
//       <div className="mb-10">
//         <h1 className="text-3xl font-bold">Fresh Mart</h1>
//         <p className="text-sm text-green-200">
//           Grocery Dashboard
//         </p>
//       </div>

//       {/* Menu */}
//       <div className="flex flex-col gap-4">

//         <Link
//           to="/dashboard"
//           className="px-4 py-3 rounded-lg hover:bg-green-600 transition"
//         >
//           🏠 Home
//         </Link>

//           <NavLink
//   to="/dashboard/products"
//   className={({ isActive }) =>
//     `px-4 py-3 rounded-lg transition ${
//       isActive ? "bg-green-600 text-white" : "hover:bg-green-600"
//     }`
//   }
// >
//   🛒 Products
// </NavLink>

//         <Link
//           to="/dashboard/orders"
//           className="px-4 py-3 rounded-lg hover:bg-green-600 transition"
//         >
//           📦 Orders
//         </Link>

//         <Link
//           to="/dashboard/cart"
//           className="px-4 py-3 rounded-lg hover:bg-green-600 transition"
//         >
//           🛍 Cart
//         </Link>

//         <Link
//           to="/dashboard/customers"
//           className="px-4 py-3 rounded-lg hover:bg-green-600 transition"
//         >
//           👥 Customers
//         </Link>

//         <Link
//           to="/dashboard/settings"
//           className="px-4 py-3 rounded-lg hover:bg-green-600 transition"
//         >
//           ⚙ Settings
//         </Link>

//       </div>

//       {/* Bottom */}
//       <div className="absolute bottom-5 pl-5">
//         <button onClick={printClick} className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 cursor-pointer active:scale-95 transition">
//           Back
//         </button>
//       </div>

//     </div>
//   );
// };
// export default Sidebar;
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const printClick = () => {
    navigate("/");
  };

  // reusable class function
  const linkClass = ({ isActive }) =>
    `px-4 py-3 rounded-lg transition block ${
      isActive ? "bg-green-600 text-white" : "hover:bg-green-600"
    }`;

  return (
    <div className="fixed top-0 left-0 w-64 h-screen bg-[#14532D] text-white p-5 z-50">

      {/* Logo */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold">Fresh Mart</h1>
        <p className="text-sm text-green-200">Grocery Dashboard</p>
      </div>

      {/* Menu */}
      <div className="flex flex-col gap-4">

        <NavLink to="/dashboard" end className={linkClass}>
       🏠 Home
        </NavLink>
        <NavLink to="/dashboard/products" className={linkClass}>
          🛒 Products
        </NavLink>

        <NavLink to="/dashboard/orders" className={linkClass}>
          📦 Orders
        </NavLink>

        <NavLink to="/dashboard/cart" className={linkClass}>
          🛍 Cart
        </NavLink>

        <NavLink to="/dashboard/customers" className={linkClass}>
          👥 Customers
        </NavLink>

        <NavLink to="/dashboard/settings" className={linkClass}>
          ⚙ Settings
        </NavLink>

      </div>

      {/* Bottom */}
      <div className="absolute bottom-5 pl-5">
        <button
          onClick={printClick}
          className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 cursor-pointer active:scale-95 transition"
        >
          Back
        </button>
      </div>

    </div>
  );
};

export default Sidebar;