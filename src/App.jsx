
// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";     // ← Make sure this import exists

import Home from "./pages/Home";
import Timeline from "./pages/Timeline";
import Stats from "./pages/Stats";
import FriendDetails from "./pages/FriendDetails";
import NotFound from "./pages/NotFound";

import { TimelineProvider } from "./context/TimelineContext";

function App() {
  return (
    <BrowserRouter>
      <TimelineProvider>
        <div className="min-h-screen flex flex-col bg-gray-50">   {/* flex + flex-col is important */}
          <Navbar />

          <main className="flex-1">   {/* This pushes footer to bottom */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/timeline" element={<Timeline />} />
              <Route path="/stats" element={<Stats />} />
              <Route path="/friend/:id" element={<FriendDetails />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <Footer />   {/* Footer stays at bottom */}
        </div>
        <Toaster />
      </TimelineProvider>
    </BrowserRouter>
  );
}

export default App;