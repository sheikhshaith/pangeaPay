import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Login from "./Pages/LoginPage";
import RegisterPage from "./Pages/Register";
import Home from "./Pages/Home";
import KYC from "./Pages/KYCv";
import KycRegister from "./Pages/kycRegister";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

// ScrollToTop component to handle scrolling on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

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
        <Route path="/kyc" element={<KYC />} />
        <Route path="/kycRegister" element={<KycRegister />} />
      </Routes>
      {!hideNavbarAndFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout />
    </Router>
  );
}

export default App;