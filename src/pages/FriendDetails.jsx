
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTimeline } from "../context/TimelineContext";
import { Phone, MessageCircle, Video } from "lucide-react";

const FriendDetails = () => {
  const { id } = useParams();
  const [friend, setFriend] = useState(null);
  const { addInteraction } = useTimeline();

  useEffect(() => {
    import("../data/friends.json").then(mod => {
      const found = mod.default.find(f => f.id === parseInt(id));
      setFriend(found);
    });
  }, [id]);

  if (!friend) return <div className="text-center py-20">Friend not found</div>;

  const handleCheckIn = (type) => {
    addInteraction(friend.name, type);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Column - Info Card */}
        <div className="lg:w-5/12 bg-white rounded-3xl p-8 border">
          <div className="flex justify-center">
            <img src={friend.picture} alt={friend.name} className="w-40 h-40 rounded-full object-cover" />
          </div>
          <h2 className="text-3xl font-bold text-center mt-6">{friend.name}</h2>

          <div className={`mt-4 text-center py-2 rounded-2xl text-sm font-medium w-fit mx-auto px-6
            ${friend.status === 'overdue' ? 'bg-red-100 text-red-700' : 
              friend.status === 'almost due' ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'}`}>
            {friend.status.toUpperCase()}
          </div>

          <div className="mt-8 flex flex-wrap gap-2 justify-center">
            {friend.tags.map((tag, i) => <span key={i} className="bg-gray-100 px-4 py-1 rounded-full text-sm">{tag}</span>)}
          </div>

          <p className="mt-8 text-gray-600 leading-relaxed">{friend.bio}</p>
          <p className="mt-6 text-sm"><span className="font-medium">Email:</span> {friend.email}</p>

          <div className="mt-12 flex flex-col gap-3">
            <button className="border border-gray-300 py-3 rounded-2xl hover:bg-gray-50">⏰ Snooze 2 Weeks</button>
            <button className="border border-gray-300 py-3 rounded-2xl hover:bg-gray-50">📦 Archive</button>
            <button className="border border-red-300 text-red-600 py-3 rounded-2xl hover:bg-red-50">🗑️ Delete</button>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:w-7/12 space-y-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-3xl border text-center">
              <p className="text-4xl font-bold">{friend.days_since_contact}</p>
              <p className="text-sm text-gray-500 mt-1">Days Since Contact</p>
            </div>
            <div className="bg-white p-6 rounded-3xl border text-center">
              <p className="text-4xl font-bold">{friend.goal}</p>
              <p className="text-sm text-gray-500 mt-1">Goal (days)</p>
            </div>
            <div className="bg-white p-6 rounded-3xl border text-center">
              <p className="text-lg font-medium">{friend.next_due_date}</p>
              <p className="text-sm text-gray-500 mt-1">Next Due Date</p>
            </div>
          </div>

          {/* Relationship Goal */}
          <div className="bg-white rounded-3xl p-8 border">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-xl">Relationship Goal</h3>
              <button className="text-emerald-600 font-medium">Edit</button>
            </div>
            <p className="text-5xl font-bold mt-4">{friend.goal} days</p>
          </div>

          {/* Quick Check-In */}
          <div className="bg-white rounded-3xl p-8 border">
            <h3 className="font-semibold text-xl mb-6">Quick Check-In</h3>
            <div className="grid grid-cols-3 gap-4">
              <button onClick={() => handleCheckIn("Call")} className="flex flex-col items-center gap-3 p-6 border rounded-3xl hover:bg-emerald-50 transition">
                <Phone className="w-10 h-10 text-emerald-600" />
                <span className="font-medium">Call</span>
              </button>
              <button onClick={() => handleCheckIn("Text")} className="flex flex-col items-center gap-3 p-6 border rounded-3xl hover:bg-blue-50 transition">
                <MessageCircle className="w-10 h-10 text-blue-600" />
                <span className="font-medium">Text</span>
              </button>
              <button onClick={() => handleCheckIn("Video")} className="flex flex-col items-center gap-3 p-6 border rounded-3xl hover:bg-purple-50 transition">
                <Video className="w-10 h-10 text-purple-600" />
                <span className="font-medium">Video</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;