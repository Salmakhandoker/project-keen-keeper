
// src/pages/Home.jsx
import { useState, useEffect } from "react";
import FriendCard from "../components/FriendCard";

const Home = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // You can import JSON directly or fetch it
    import("../data/friends.json").then((module) => {
      setFriends(module.default);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-96">Loading friends...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Banner */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Friends to keep close in your life
        </h1>
        <p className="text-gray-600 max-w-md mx-auto">
          You connected with 8 amazing humans. Keep your relationships strong.
        </p>
        <button className="mt-6 bg-emerald-600 text-white px-8 py-3 rounded-2xl font-medium flex items-center gap-2 mx-auto hover:bg-emerald-700 transition">
          + Add a Friend
        </button>
      </div>

      {/* Summary Cards - You can add 4 cards here later */}

      {/* Friends Grid */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-6">Your Friends</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {friends.map((friend) => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
};

export default Home;