import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/HomePage';
import CalculatorDetail from '../pages/CalculatorDetailsPage';
import Login from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import SegmentedContent from '../pages/SupportPage';
import AskQueryPage from '../pages/AskQueryPage';

const AppRoutes = () => {
  const segments = [
    {
      title: 'My Queries',
      content: 'This is the content for My Queries.',
    },
    {
      title: 'FAQ',
      content: 'This is the content for FAQ.',
    },
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/details/:id" element={<CalculatorDetail />} />
        <Route path="/support" element={<SegmentedContent segments={segments} />} />
        <Route path="/askquery" element={<AskQueryPage/>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;