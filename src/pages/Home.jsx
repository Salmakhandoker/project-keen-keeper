
// src/pages/Home.jsx
import { useState, useEffect } from "react";
import FriendCard from "../components/FriendCard";

const Home = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    import("../data/friends.json")
      .then((module) => {
        setFriends(module.default);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load friends:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh] text-xl text-gray-500">
        Loading your friends...
      </div>
    );
  }

  // Summary Stats
  const totalFriends = friends.length;
  const onTrack = friends.filter(f => f.status === "on-track").length;
  const needAttention = friends.filter(f => f.status === "overdue" || f.status === "almost due").length;
  const interactionsThisMonth = 12; // You can make this dynamic later

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12">
      {/* Banner Section */}
      <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-12 text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Friends to keep close in your life
        </h1>
        <p className="text-gray-600 max-w-md mx-auto">
          You connected with amazing humans. Keep your relationships strong.
        </p>
        <button className="mt-8 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-2xl font-medium flex items-center gap-2 mx-auto transition-all">
          + Add a Friend
        </button>
      </div>

      {/* Summary Cards - 2x2 on mobile, 4 in a row on large screens */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="bg-white rounded-3xl p-8 text-center border border-gray-100 shadow-sm">
          <p className="text-5xl font-bold text-gray-900">{totalFriends}</p>
          <p className="mt-3 text-gray-600 font-medium">Total Friends</p>
        </div>
        <div className="bg-white rounded-3xl p-8 text-center border border-gray-100 shadow-sm">
          <p className="text-5xl font-bold text-emerald-600">{onTrack}</p>
          <p className="mt-3 text-gray-600 font-medium">On Track</p>
        </div>
        <div className="bg-white rounded-3xl p-8 text-center border border-gray-100 shadow-sm">
          <p className="text-5xl font-bold text-amber-600">{needAttention}</p>
          <p className="mt-3 text-gray-600 font-medium">Need Attention</p>
        </div>
        <div className="bg-white rounded-3xl p-8 text-center border border-gray-100 shadow-sm">
          <p className="text-5xl font-bold text-blue-600">{interactionsThisMonth}</p>
          <p className="mt-3 text-gray-600 font-medium">Interactions This Month</p>
        </div>
      </div>

      {/* Your Friends Section */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-8 px-2">Your Friends</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {friends.map((friend) => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
};

export default Home;