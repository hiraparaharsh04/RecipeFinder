// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Navbar: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <header className="bg-gray-800 text-white py-4 shadow-md">
//       <div className="w-full flex justify-between items-center px-6">
//         <div className="text-3xl font-bold">
//           <span className="text-orange-500">Recipe</span>Finder
//         </div>

//         <nav className="hidden md:block">
//           <ul className="flex space-x-8 text-lg">
//             <li className="group relative">
//               <Link to="/" className="hover:text-orange-500 transition-colors">
//                 Home
//               </Link>
//               <span className="absolute bottom-0 left-0 w-0 h-1 bg-orange-500 transition-all group-hover:w-full"></span>
//             </li>
//             <li className="group relative">
//               <Link
//                 to="/categories"
//                 className="hover:text-orange-500 transition-colors"
//               >
//                 Categories
//               </Link>

//               <span className="absolute bottom-0 left-0 w-0 h-1 bg-orange-500 transition-all group-hover:w-full"></span>
//             </li>
//             <li className="group relative">
//               <Link
//                 to="/favorites"
//                 className="hover:text-orange-500 transition-colors"
//               >
//                 Favorites
//               </Link>

//               <span className="absolute bottom-0 left-0 w-0 h-1 bg-orange-500 transition-all group-hover:w-full"></span>
//             </li>
//           </ul>
//         </nav>

//         <div className="md:hidden flex items-center">
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="text-white focus:outline-none"
//           >
//             {isMenuOpen ? (
//               <span className="text-2xl">×</span>
//             ) : (
//               <span className="text-2xl">☰</span>
//             )}
//           </button>
//         </div>

//         <div className="relative md:flex hidden">
//           <input
//             type="text"
//             placeholder="Search recipes..."
//             className="pl-10 pr-4 py-2 rounded-full bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
//           />
//           <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
//             🔍
//           </span>
//         </div>
//       </div>

//       <div
//         className={`md:hidden bg-gray-800 text-white absolute w-full left-0 ${
//           isMenuOpen ? "block" : "hidden"
//         }`}
//       >
//         <ul className="flex flex-col space-y-4 p-4 text-lg">
//           <li>
//             <Link
//               to="/"
//               className="hover:text-orange-400 transition-colors"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/categories"
//               className="hover:text-orange-400 transition-colors"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Categories
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/favorites"
//               className="hover:text-orange-400 transition-colors"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Favorites
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </header>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white py-4 shadow-md">
      <div className="w-full flex justify-between items-center px-6">
        <div className="text-3xl font-bold">
          <span className="text-orange-500">Recipe</span>Finder
        </div>

        <nav className="hidden md:block">
          <ul className="flex space-x-8 text-lg">
            <li className="group relative">
              <Link to="/" className="hover:text-orange-500 transition-colors">
                Home
              </Link>
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-orange-500 transition-all group-hover:w-full"></span>
            </li>
            <li className="group relative">
              <Link
                to="/categories"
                className="hover:text-orange-500 transition-colors"
              >
                Categories
              </Link>

              <span className="absolute bottom-0 left-0 w-0 h-1 bg-orange-500 transition-all group-hover:w-full"></span>
            </li>
            <li className="group relative">
              <Link
                to="/favorites"
                className="hover:text-orange-500 transition-colors"
              >
                Favorites
              </Link>

              <span className="absolute bottom-0 left-0 w-0 h-1 bg-orange-500 transition-all group-hover:w-full"></span>
            </li>
          </ul>
        </nav>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? (
              <span className="text-2xl">×</span>
            ) : (
              <span className="text-2xl">☰</span>
            )}
          </button>
        </div>

        <div className="relative md:flex hidden">
          <input
            type="text"
            placeholder="Search recipes..."
            className="pl-10 pr-4 py-2 rounded-full bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            🔍
          </span>
        </div>
      </div>

      <div
        className={`md:hidden bg-gray-800 text-white absolute w-full left-0 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col space-y-4 p-4 text-lg">
          <li>
            <Link
              to="/"
              className="hover:text-orange-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/categories"
              className="hover:text-orange-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Categories
            </Link>
          </li>
          <li>
            <Link
              to="/favorites"
              className="hover:text-orange-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Favorites
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
