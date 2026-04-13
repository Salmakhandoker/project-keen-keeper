

// src/components/TimelineEntry.jsx
import { Phone, MessageCircle, Video, Calendar } from "lucide-react";

const TimelineEntry = ({ entry }) => {
  const getIcon = (type) => {
    switch (type) {
      case "call":
        return <Phone className="w-5 h-5 text-emerald-600" />;
      case "text":
        return <MessageCircle className="w-5 h-5 text-blue-600" />;
      case "video":
        return <Video className="w-5 h-5 text-purple-600" />;
      default:
        return <Calendar className="w-5 h-5 text-gray-500" />;
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { 
      month: "short", 
      day: "numeric", 
      year: "numeric" 
    });
  };

  return (
    <div className="bg-white rounded-2xl p-5 flex gap-5 border border-gray-100 hover:shadow-md transition">
      {/* Icon */}
      <div className="flex-shrink-0 mt-1">
        {getIcon(entry.type)}
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="font-medium text-gray-900">{entry.title}</h3>
        <p className="text-sm text-gray-500 mt-1">
          {formatDate(entry.date)}
        </p>
      </div>

      {/* Right side - optional small info */}
      <div className="text-xs text-gray-400 self-center">
        Interaction
      </div>
    </div>
  );
};

export default TimelineEntry;