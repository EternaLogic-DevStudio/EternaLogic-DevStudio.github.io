import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Project/Crew-Stock" element={<div />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
