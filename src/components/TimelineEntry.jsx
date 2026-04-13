

import { Phone, MessageCircle, Video } from "lucide-react";

const TimelineEntry = ({ entry }) => {
  const icons = {
    call: <Phone className="w-6 h-6 text-emerald-600" />,
    text: <MessageCircle className="w-6 h-6 text-blue-600" />,
    video: <Video className="w-6 h-6 text-purple-600" />,
  };

  return (
    <div className="bg-white rounded-3xl p-6 flex gap-6 items-start border border-gray-100">
      <div className="mt-1">{icons[entry.type]}</div>
      <div className="flex-1">
        <h4 className="font-medium text-lg">{entry.title}</h4>
        <p className="text-sm text-gray-500 mt-1">
          {new Date(entry.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })}
        </p>
      </div>
    </div>
  );
};

export default TimelineEntry;