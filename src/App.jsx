// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/LoginPage"; // Adjusted to match the actual file name
import RegisterPage from "./Pages/Register"; // Ensure the file name matches
import Home from "./Pages/Home"; // Ensure the file name matches
import KycRegister from "./Pages/kycRegister"; // New KYC registration component

function App() {
  return (
    <Router>
      <Routes>
        {/* Login page is the initial page */}
        <Route path="/" element={<Login />} />
        {/* Sign Up / Register page */}
        <Route path="/register" element={<RegisterPage />} />
        {/* Home page after successful login */}
        <Route path="/home" element={<Home />} />
        {/* KYC Registration page */}
        <Route path="/kycRegister" element={<KycRegister />} />
      </Routes>
    </Router>
  );
}

export default App;
