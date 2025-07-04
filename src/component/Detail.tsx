import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

interface Meal {
  strMeal: string;
  strArea: string;
  strMealThumb: string;
  strInstructions: string;
  [key: string]: any; // for strIngredient1, strMeasure1, etc.
}

const Detail = () => {
  const { mealid } = useParams();
  const [mealData, setMealData] = useState<Meal | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMealData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`
        );
        const data = await response.json();
        if (data.meals) {
          setMealData(data.meals[0]);
        } else {
          setError("Meal not found");
        }
      } catch (err) {
        setError("Failed to fetch meal data");
      } finally {
        setLoading(false);
      }
    };

    fetchMealData();
  }, [mealid]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!mealData) return <div>No data available.</div>;

  return (
    <div className="bg-white">
      <main className="mx-auto mt-8 max-w-2xl px-4 pb-16 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
          <div className="lg:col-span-5 lg:col-start-8">
            <div className="flex justify-between">
              <h1 className="text-xl font-medium text-gray-900">
                {mealData.strMeal}
              </h1>
            </div>
            <div className="flex justify-between">
              <h1 className="text font-medium text-orange-500">
                {mealData.strArea}
              </h1>
            </div>
          </div>

          <div className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
            <div className="grid ">
              <img
                src={mealData.strMealThumb}
                alt={mealData.strMeal}
                className="rounded-lg lg:col-span-2 lg:row-span-2"
              />
            </div>
          </div>

          <div className="mt-8 lg:col-span-5">
            <div className="mt">
              <h2 className="text-sm font-medium text-gray-900">Description</h2>
              <div className="mt-4 space-y-2 text-sm text-gray-500">
                <p>{mealData.strInstructions}</p>
              </div>
            </div>

            <div className="mt-8 border-t border-gray-200 pt-8">
              <h2 className="text-sm font-medium text-gray-900">Ingredients</h2>

              <div className="mt-4 text-sm text-gray-500 flex flex-wrap gap-4">
                {Object.keys(mealData)
                  .filter(
                    (key) => key.startsWith("strIngredient") && mealData[key]
                  )
                  .map((key, index) => (
                    <span key={index} className="inline-block">
                      {mealData[key]} - {mealData[`strMeasure${index + 1}`]}{" "}
                    </span>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Detail;
