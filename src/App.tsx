import "./App.css";
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import CalculatorDetail from "./pages/CalculatorDetailsPage";
import Login from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import SegmentedContent from "./pages/SupportPage";
import AskQueryPage from "./pages/AskQueryPage";
import { AskQueryConstants } from "./utility/Constants";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "./redux/store";

function App() {
  const  loginState  = useSelector((state: AppState) => state.login);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/homepage" element={loginState.currentUser?.isLoggedin ? <HomePage /> : <Navigate to="/" />} />
          <Route path="/details/:id" element={<CalculatorDetail />} />
          <Route
            path="/support"
            element={<SegmentedContent segments={AskQueryConstants.segment_lits} />}
          />
          <Route path="/askquery" element={<AskQueryPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
