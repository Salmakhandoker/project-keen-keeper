

// src/pages/Stats.jsx
import { useTimeline } from "../context/TimelineContext";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

const Stats = () => {
  const { timeline } = useTimeline();

  const countByType = timeline.reduce((acc, entry) => {
    acc[entry.type] = (acc[entry.type] || 0) + 1;
    return acc;
  }, {});

  const chartData = [
    { name: "Call", value: countByType.call || 0, fill: "#10b981" },
    { name: "Text", value: countByType.text || 0, fill: "#3b82f6" },
    { name: "Video", value: countByType.video || 0, fill: "#8b5cf6" },
  ].filter(item => item.value > 0);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 md:py-12">
      <h1 className="text-3xl font-semibold text-gray-900 mb-10">Friendship Analytics</h1>

      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm">
        <h2 className="text-xl font-medium mb-8 text-center">By Interaction Type</h2>
        
        <div className="h-80 md:h-96">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={120}
                dataKey="value"
                label
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip />
              <Legend verticalAlign="bottom" />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {timeline.length === 0 && (
          <p className="text-center text-gray-500 mt-8">
            No data yet. Make some calls, texts or video calls to see analytics.
          </p>
        )}
      </div>
    </div>
  );
};

export default Stats;