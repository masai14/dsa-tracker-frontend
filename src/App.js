import React from 'react';
import { Routes, Route } from "react-router-dom"; 
import { Authorization, UserProfile, Dashboard, Question, NotFound } from "./pages";

function App() {
  return (
    <div className="bg-gray-50">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/auth" element={<Authorization />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/question/:id" element={<Question />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;