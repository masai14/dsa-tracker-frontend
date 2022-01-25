import { Route, Routes } from "react-router-dom";
import Login from "../Components/LoginPage";
import { FetchDashboard } from "./FetchDashboard";

const MainRoute = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/dashboard" element={<FetchDashboard />} />
    </Routes>
  );
};

export { MainRoute };
