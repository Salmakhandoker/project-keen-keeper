
// src/components/FriendCard.jsx
import { Link } from "react-router-dom";

const FriendCard = ({ friend }) => {
  const statusColor = {
    "overdue": "bg-red-100 text-red-700 border-red-200",
    "almost due": "bg-yellow-100 text-yellow-700 border-yellow-200",
    "on-track": "bg-green-100 text-green-700 border-green-200",
  };

  return (
    <Link 
      to={`/friend/${friend.id}`}
      className="block bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-emerald-200 group"
    >
      <div className="p-6">
        <div className="flex justify-center mb-4">
          <img 
            src={friend.picture} 
            alt={friend.name}
            className="w-24 h-24 rounded-full object-cover ring-4 ring-white shadow-md"
          />
        </div>

        <h3 className="text-center font-semibold text-xl text-gray-900 mb-1">
          {friend.name}
        </h3>

        <p className="text-center text-gray-500 text-sm mb-4">
          {friend.days_since_contact} days ago
        </p>

        <div className="flex flex-wrap gap-2 justify-center">
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

      {/* Status Bar at Bottom */}
      <div className={`py-3 text-center text-xs font-medium border-t ${statusColor[friend.status] || 'bg-gray-100 text-gray-600'}`}>
        {friend.status === "overdue" && "Overdue"}
        {friend.status === "almost due" && "Almost Due"}
        {friend.status === "on-track" && "On Track"}
      </div>
    </Link>
  );
};

export default FriendCard;