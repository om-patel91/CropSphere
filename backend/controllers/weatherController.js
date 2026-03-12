import axios from "axios";
import WeatherLog from "../models/weatherLog.js";

export const getWeather = async (req, res) => {
  try {
    const { city, lat, lon } = req.query;

    let response;

    // Search by city
    if (city) {
      response = await axios.get(
        `${process.env.WEATHER_BASE_URL}?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=metric`
      );
    }

    // Search by coordinates
    else if (lat && lon) {
      response = await axios.get(
        `${process.env.WEATHER_BASE_URL}?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API_KEY}&units=metric`
      );
    }

    else {
      return res
        .status(400)
        .json({ message: "City or coordinates required" });
    }

    const data = response.data;

    const temperature = data.main.temp;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
    const weatherDescription = data.weather[0].description;

    // Intelligent farming logic
let advice = ["Test farming advice"];
let suggestedProducts = ["Test product"];

    if (temperature > 30) {
  advice.push("Temperature is high – irrigation recommended 💧");
  suggestedProducts.push("Drip Irrigation System");
}

if (temperature < 15) {
  advice.push("Low temperature – protect crops from cold ❄");
}

if (humidity > 70) {
  advice.push("High humidity – fungal disease risk 🌫");
  suggestedProducts.push("Anti-Fungal Pesticide");
}

if (windSpeed > 8) {
  advice.push("High wind – avoid pesticide spraying 💨");
}

    // Save log
    await WeatherLog.create({
      user: req.user?._id,
      city: city || data.name,
      temperature,
      humidity,
    });

    res.json({
      city: city || data.name,
      temperature,
      humidity,
      windSpeed,
      weatherDescription,
      advice,
      suggestedProducts,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getWeatherLogs = async (req, res) => {
  try {

    const last24Hours = new Date();
    last24Hours.setHours(last24Hours.getHours() - 24);

    const logs = await WeatherLog.find({
      createdAt: { $gte: last24Hours }
    }).sort({ createdAt: 1 });

    res.json(logs);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};