

import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Timeline = () => {
  const { timeline } = useContext(AppContext);

  return (
    <div className="p-6">
      <h1>Timeline</h1>

      {timeline.map((item) => (
        <div key={item.id}>
          <p>{item.date}</p>
          <h3>{item.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Timeline;