import cron from "node-cron";
import axios from "axios";
import WeatherLog from "../models/weatherLog.js";

const saveWeatherLog = async () => {
  try {

    const response = await axios.get(
      `${process.env.WEATHER_BASE_URL}?q=Surat&appid=${process.env.WEATHER_API_KEY}&units=metric`
    );

    const data = response.data;

    await WeatherLog.create({
      city: "Surat",
      temperature: data.main.temp,
      humidity: data.main.humidity,
    });

    console.log("Weather log saved");

  } catch (error) {
    console.error("Weather cron error:", error.message);
  }
};

cron.schedule("0 */3 * * *", () => {
  console.log("Running weather cron...");
  saveWeatherLog();
});