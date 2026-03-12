import { useState, useEffect } from "react";
import API from "../api/axios";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  // Auto detect location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        try {
          const { latitude, longitude } = position.coords;

          const { data } = await API.get(
            `/weather?lat=${latitude}&lon=${longitude}`
          );

          setWeather(data);
        } catch (error) {
          console.log("Location weather error:", error.response?.data);
        }
      });
    }
  }, []);

  const fetchWeather = async () => {
    try {
      setLoading(true);

      const { data } = await API.get(`/weather?city=${city}`);

      setWeather(data);
      setLoading(false);
    } catch (error) {
      console.log("City weather error:", error.response?.data);
      setLoading(false);
    }
  };

  const getTempColor = (temp) => {
    if (temp > 35) return "text-red-500";
    if (temp > 25) return "text-orange-500";
    return "text-blue-500";
  };

  return (
    <div className="min-h-screen bg-white py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-8">
          🌤 Intelligent Farming Weather
        </h1>

        {/* Search */}
        <div className="flex gap-4 mb-10">
          <input
            type="text"
            placeholder="Enter city..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="border px-4 py-3 rounded-xl w-full"
          />

          <button
            onClick={fetchWeather}
            className="bg-primary text-white px-6 rounded-xl"
          >
            Check
          </button>
        </div>

        {loading && <p>Loading weather...</p>}

        {/* Weather Data */}
        {weather && (
          <div className="bg-gray-50 p-8 rounded-2xl shadow">
            <h2 className="text-2xl font-semibold mb-4">📍 {weather.city}</h2>

            <p
              className={`text-4xl font-bold ${getTempColor(
                weather.temperature
              )}`}
            >
              {weather.temperature}°C
            </p>

            <p className="text-lg">💧 Humidity: {weather.humidity}%</p>
            <p className="text-lg">💨 Wind Speed: {weather.windSpeed} m/s</p>

            <p className="text-lg capitalize">
              🌥 Condition: {weather.weatherDescription}
            </p>

            {/* Farming Advice */}
            {weather.advice?.length > 0 && (
              <div className="mt-6 bg-green-100 p-4 rounded-xl">
                <h3 className="font-semibold mb-2">🌱 Farming Advice</h3>

                {weather.advice.map((item, index) => (
                  <p key={index}>• {item}</p>
                ))}
              </div>
            )}

            {/* Product Suggestions */}
            {weather.suggestedProducts?.length > 0 && (
              <div className="mt-6 bg-yellow-100 p-4 rounded-xl">
                <h3 className="font-semibold mb-2">
                  🛒 Recommended Products
                </h3>

                {weather.suggestedProducts.map((item, index) => (
                  <p key={index}>• {item}</p>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;