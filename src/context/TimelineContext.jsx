

// src/context/TimelineContext.jsx
import { createContext, useContext, useState } from 'react';

const TimelineContext = createContext();

export const useTimeline = () => useContext(TimelineContext);

export const TimelineProvider = ({ children }) => {
  const [timeline, setTimeline] = useState([]);

  const addInteraction = (friendName, type) => {
    const newEntry = {
      id: Date.now(),
      date: new Date().toISOString(),
      type: type.toLowerCase(),
      title: `${type} with ${friendName}`,
    };
    setTimeline(prev => [newEntry, ...prev]);
  };

  return (
    <TimelineContext.Provider value={{ timeline, addInteraction }}>
      {children}
    </TimelineContext.Provider>
  );
};