
// src/pages/Timeline.jsx
import { useTimeline } from "../context/TimelineContext";
import TimelineEntry from "../components/TimelineEntry";
import { useState } from "react";

const Timeline = () => {
  const { timeline } = useTimeline();
  const [filter, setFilter] = useState("all"); // "all", "call", "text", "video"

  const filteredTimeline = timeline.filter(entry => 
    filter === "all" || entry.type === filter
  );

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-3xl font-semibold text-gray-900">Timeline</h1>
        
        {/* Filter Buttons - Challenge Part */}
        <div className="flex gap-2 bg-gray-100 p-1 rounded-2xl">
          <button 
            onClick={() => setFilter("all")}
            className={`px-5 py-2 text-sm font-medium rounded-xl transition ${filter === "all" ? "bg-white shadow-sm" : "text-gray-600"}`}
          >
            All
          </button>
          <button 
            onClick={() => setFilter("call")}
            className={`px-5 py-2 text-sm font-medium rounded-xl transition ${filter === "call" ? "bg-white shadow-sm" : "text-gray-600"}`}
          >
            Call
          </button>
          <button 
            onClick={() => setFilter("text")}
            className={`px-5 py-2 text-sm font-medium rounded-xl transition ${filter === "text" ? "bg-white shadow-sm" : "text-gray-600"}`}
          >
            Text
          </button>
          <button 
            onClick={() => setFilter("video")}
            className={`px-5 py-2 text-sm font-medium rounded-xl transition ${filter === "video" ? "bg-white shadow-sm" : "text-gray-600"}`}
          >
            Video
          </button>
        </div>
      </div>

      {filteredTimeline.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          No interactions yet. Go to a friend's detail page and click Call/Text/Video.
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