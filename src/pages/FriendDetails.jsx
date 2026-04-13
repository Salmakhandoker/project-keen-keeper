

import { useParams } from "react-router-dom";
import { useContext } from "react";
import friends from "../data/friends.json";
import { AppContext } from "../context/AppContext";

const FriendDetails = () => {
  const { id } = useParams();
  const { addEntry } = useContext(AppContext);

  const friend = friends.find((f) => f.id === parseInt(id));

  return (
    <div className="p-6">
      <h1>{friend.name}</h1>

      <button onClick={() => addEntry("Call", friend.name)}>
        Call
      </button>

      <button onClick={() => addEntry("Text", friend.name)}>
        Text
      </button>

      <button onClick={() => addEntry("Video", friend.name)}>
        Video
      </button>
    </div>
  );
};

export default FriendDetails;