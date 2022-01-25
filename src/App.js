import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/LoginPage";
import { FetchDashboard } from "./Routes/FetchDashboard";

// import ProjectCard from "./dashboard/problem-card/ProblemCard";
// import { Routing } from "./Routes/RouteMain";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/dashboard" element={<FetchDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
