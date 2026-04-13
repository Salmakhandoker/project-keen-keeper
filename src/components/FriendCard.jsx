
// src/components/FriendCard.jsx
import { Link } from "react-router-dom";

const FriendCard = ({ friend }) => {
  const statusColor = {
    "overdue": "bg-red-100 text-red-700 border-red-200",
    "almost due": "bg-amber-100 text-amber-700 border-amber-200",
    "on-track": "bg-emerald-100 text-emerald-700 border-emerald-200",
  };

  return (
    <Link 
      to={`/friend/${friend.id}`}
      className="block bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-emerald-300 hover:shadow-xl transition-all duration-300"
    >
      <div className="p-6 flex flex-col items-center">
        <img 
          src={friend.picture} 
          alt={friend.name}
          className="w-28 h-28 rounded-full object-cover ring-4 ring-white shadow-md"
        />
        <h3 className="mt-5 text-xl font-semibold text-center text-gray-900">
          {friend.name}
        </h3>
        <p className="text-gray-500 text-sm mt-1">
          {friend.days_since_contact} days ago
        </p>

        <div className="flex flex-wrap gap-2 mt-4 justify-center">
          {friend.tags.map((tag, index) => (
            <span 
              key={index}
              className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Status Bar */}
      <div className={`py-4 text-center text-sm font-medium border-t ${statusColor[friend.status] || "bg-gray-100"}`}>
        {friend.status.toUpperCase().replace("-", " ")}
      </div>
    </Link>
  );
};

export default FriendCard;