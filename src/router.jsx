// src/router.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import BasicDSA from './pages/BasicDSA';
import IntermediateDSA from './pages/IntermediateDSA';
import AdvancedDSA from './pages/AdvancedDSA';
import ConceptDetail from './pages/ConceptDetail';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/basic" element={<BasicDSA />} />
      <Route path="/intermediate" element={<IntermediateDSA />} />
      <Route path="/advanced" element={<AdvancedDSA />} />
      <Route path="/concept/:id" element={<ConceptDetail />} /> Dynamic route for concept details
    </Routes>
  </Router>
);

export default AppRouter;
