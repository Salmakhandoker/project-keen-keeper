

import { createContext, useState } from "react";

export const TimelineContext = createContext();

export const TimelineProvider = ({ children }) => {
  const [timeline, setTimeline] = useState([]);

  return (
    <TimelineContext.Provider value={{ timeline, setTimeline }}>
      {children}
    </TimelineContext.Provider>
  );
};