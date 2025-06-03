import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        setData(result.categories);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg font-semibold text-gray-700">Loading...</p>
      </div>
    );
  }

  return (
    <div className="p-7">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {data.map((item) => (
          <div
            key={item.idCategory}
            className="max-w-sm mx-auto bg-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out flex flex-col h-full transform hover:cursor-pointer"
          >
            <div className="w-full h-48 bg-gray-100 rounded-t-xl flex items-center justify-center overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={item.strCategoryThumb}
                alt={item.strCategory}
              />
            </div>
            <div className="p-6 flex-grow text-center">
              <div className="font-bold text-2xl mb-4 text-gray-900">{item.strCategory}</div>
              <p className="text-gray-600 text-base mb-4">
                {item.strCategoryDescription.length > 150
                  ? item.strCategoryDescription.substring(0, 150) + '...'
                  : item.strCategoryDescription}
              </p>
            </div>
            <div className="flex justify-center pb-4">
              <Link to="/" className="bg-gray-800 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-orange-500 transition-all duration-200">
                View Meals
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
