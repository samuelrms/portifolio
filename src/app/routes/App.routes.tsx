import { Routes, Route, Navigate } from "react-router-dom";
import { routeConstructor } from "./routeConstructor";

export const AppRoutes = () => {
  return (
    <Routes>
      {routeConstructor}
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
