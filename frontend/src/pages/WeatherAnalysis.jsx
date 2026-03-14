import { useEffect, useState } from "react";
import API from "../api/axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer
} from "recharts";

const WeatherAnalytics = () => {

  const [logs, setLogs] = useState([]);

  const formatTime = (date) => {
    const d = new Date(date);
    return d.toLocaleTimeString([], {
      hour: "2-digit",
      hour12: true
    });
  };

  useEffect(() => {

    const fetchLogs = async () => {

      const { data } = await API.get("/weather/logs");

      const get3HourSlot = (date) => {
  const d = new Date(date);
  const hour = d.getHours();

  const slot = Math.floor(hour / 3) * 3;

  const tempDate = new Date();
  tempDate.setHours(slot, 0, 0);

  return tempDate.toLocaleTimeString([], {
    hour: "numeric",
    hour12: true
  });
};

const formatted = data.map((log) => ({
  time: get3HourSlot(log.createdAt),
  temperature: log.temperature,
  humidity: log.humidity
}));

setLogs(formatted);

      setLogs(formatted);
    };

    fetchLogs();

  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-24 px-6">

      <div className="max-w-6xl mx-auto">

        <div className="bg-white shadow-xl rounded-2xl p-10">

          <h1 className="text-4xl font-bold text-primary mb-10">
            📊 Weather Trends (Last 24 Hours)
          </h1>

          <ResponsiveContainer width="100%" height={400}>

            <LineChart data={logs}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="time" interval={0} />

              <YAxis />

              <Tooltip />

              <Legend />

             <Line
  type="monotone"
  dataKey="temperature"
  stroke="#ff7300"
  strokeWidth={3}
  dot={{ r: 6 }}
/>

              <Line
                type="monotone"
                dataKey="humidity"
                stroke="#0077ff"
                strokeWidth={3}
                name="Humidity (%)"
              />

            </LineChart>

          </ResponsiveContainer>

        </div>

      </div>

    </div>
  );
};

export default WeatherAnalytics;