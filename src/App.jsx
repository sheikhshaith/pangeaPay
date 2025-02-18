import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Login from "./Pages/LoginPage";
import RegisterPage from "./Pages/Register";
import Home from "./Pages/Home";
import KycRegister from "./Pages/kycRegister";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function Layout() {
  const location = useLocation();
  const hideNavbarAndFooter = ["/", "/register"].includes(location.pathname);

  return (
    <>
      {!hideNavbarAndFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/kycRegister" element={<KycRegister />} />
      </Routes>
      {!hideNavbarAndFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
