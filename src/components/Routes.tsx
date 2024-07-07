import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/HomePage';
import CalculatorDetail from '../pages/CalculatorDetailsPage';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<CalculatorDetail />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;