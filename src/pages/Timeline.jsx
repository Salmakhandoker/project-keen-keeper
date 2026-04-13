

// src/pages/Timeline.jsx
import { useTimeline } from "../context/TimelineContext";
import TimelineEntry from "../components/TimelineEntry";
import { useState } from "react";

const Timeline = () => {
  const { timeline } = useTimeline();
  const [filter, setFilter] = useState("all");

  const filteredTimeline = timeline.filter(entry => 
    filter === "all" || entry.type === filter
  );

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
        <h1 className="text-3xl font-semibold text-gray-900">Timeline</h1>
        
        <div className="flex flex-wrap gap-2 bg-gray-100 p-1.5 rounded-3xl">
          {["all", "call", "text", "video"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2 text-sm font-medium rounded-2xl transition capitalize
                ${filter === f 
                  ? "bg-white shadow text-gray-900" 
                  : "text-gray-600 hover:bg-white/70"}`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {filteredTimeline.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center text-gray-500">
          No interactions recorded yet.<br />
          Visit a friend’s detail page and click Call, Text or Video.
        </div>
      ) : (
        <div className="space-y-4">
          {filteredTimeline.map((entry) => (
            <TimelineEntry key={entry.id} entry={entry} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Timeline;