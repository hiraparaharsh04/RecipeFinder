// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// const Sidebar = () => {
//   const [categories, setCategories] = useState([]);
//   const [meals, setMeals] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState('');

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
//         if (!response.ok) {
//           throw new Error('Failed to fetch categories');
//         }
//         const data = await response.json();
//         setCategories(data.categories);
//         if (data.categories.length > 0) {
//           setSelectedCategory(data.categories[0].strCategory);
//         }
//       } catch (error) {
//         console.error('Error fetching categories:', error);
//       }
//     };

//     fetchCategories();
//   }, []);
//   useEffect(() => {
//     const fetchMeals = async () => {
//       if (selectedCategory) {
//         try {
//           const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`);
//           if (!response.ok) {
//             throw new Error('Failed to fetch meals');
//           }
//           const data = await response.json();
//           setMeals(data.meals || []);
//         } catch (error) {
//           console.error('Error fetching meals:', error);
//         }
//       }
//     };

//     fetchMeals();
//   }, [selectedCategory]);

//   const handleCategoryClick = (categoryName:any) => {
//     setSelectedCategory(categoryName);
//   };

//   return (
//     <div className="flex h-screen">
//       <div className="w-64 bg-gray-800 text-white p-6">
//         <h2 className="text-2xl font-semibold mb-8">Meal Categories</h2>
//         <ul className="space-y-4">
//           {categories.map((category:any) => (
//             <li key={category.idCategory}>
//               <div
//                 onClick={() => handleCategoryClick(category.strCategory)}
//                 className={`text-base py-1 w-full rounded-md transition duration-200
//                     ${selectedCategory === category.strCategory
//                     ? 'text-orange-500 font-semibold'
//                     : 'hover:text-orange-500 text-white' 
//                   }`}
//               >
//                 {category.strCategory}
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div className="flex-1 p-6 bg-gray-100 overflow-y-auto">
//         {meals.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//             {meals.map((meal:any) => (
//               <Link to={`/Detail/${meal.idMeal}`} key={meal.idMeal}> 
//                 <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
//                   <img
//                     src={meal.strMealThumb}
//                     alt={meal.strMeal}
//                     className="w-full h-[300px] object-cover rounded-md mb-4"
//                    />
//                     <h3 className="text-xl font-semibold text-center text-gray-800">{meal.strMeal}</h3>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         ) : (
//           <p className="text-center text-gray-700">Loading...</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Sidebar;


import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [categories, setCategories] = useState([]);
  const [meals, setMeals] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [menuOpen, setMenuOpen] = useState(false); // for mobile

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
        if (!response.ok) throw new Error('Failed to fetch categories');
        const data = await response.json();
        setCategories(data.categories);
        if (data.categories.length > 0) {
          setSelectedCategory(data.categories[0].strCategory);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);
  useEffect(() => {
    const fetchMeals = async () => {
      if (selectedCategory) {
        try {
          const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`);
          if (!response.ok) throw new Error('Failed to fetch meals');
          const data = await response.json();
          setMeals(data.meals || []);
        } catch (error) {
          console.error('Error fetching meals:', error);
        }
      }
    };

    fetchMeals();
  }, [selectedCategory]);

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
    setMenuOpen(false); // Close menu on mobile
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Sidebar for desktop and collapsible menu for mobile */}
      <div className="md:w-64 bg-gray-800 text-white p-4 md:p-6 flex-shrink-0">
        {/* Mobile Toggle Button */}
        <div className="md:hidden mb-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="bg-orange-500 text-white px-4 py-2 rounded w-full"
          >
            {menuOpen ? 'Close Categories' : 'Open Categories'}
          </button>
        </div>

        {/* Category List */}
        <div className={`${menuOpen ? 'block' : 'hidden'} md:block`}>
          <h2 className="text-2xl font-semibold mb-4 md:mb-8">Meal Categories</h2>
          <ul className="space-y-2 md:space-y-4">
            {categories.map((category: any) => (
            <li key={category.idCategory}>
              <div
                onClick={() => handleCategoryClick(category.strCategory)}
                  className={`text-base cursor-pointer py-1 px-2 rounded-md transition duration-200
                    ${selectedCategory === category.strCategory
                    ? 'text-orange-500 font-semibold'
                      : 'hover:text-orange-400 text-white'
                  }`}
              >
                {category.strCategory}
              </div>
            </li>
          ))}
        </ul>
      </div>
      </div>

      {/* Meal Content */}
      <div className="flex-1 p-4 md:p-6 bg-gray-100 overflow-y-auto">
        {meals.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {meals.map((meal: any) => (
              <Link to={`/Detail/${meal.idMeal}`} key={meal.idMeal}> 
                <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-transform duration-300 transform hover:scale-105 flex flex-col h-full overflow-hidden">
                  <div className="w-full h-[200px] sm:h-[250px] overflow-hidden">
                  <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    className="w-full h-[300px] object-cover rounded-md mb-4"
                   />
                    <h3 className="text-xl font-semibold text-center text-gray-800">{meal.strMeal}</h3>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-700">Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Sidebar;


