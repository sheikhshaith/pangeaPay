import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import Home from "./Pages/Home";
import KYC from "./Pages/KYCv";
import KycRegister from "./Pages/kycRegister";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Layout component wrapping Navbar, Routes, and Footer
function Layout() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kyc" element={<KYC />} />
        <Route path="/kycRegister" element={<KycRegister />} />
      </Routes>
      <Footer />
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
