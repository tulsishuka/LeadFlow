import { Routes, Route } from "react-router-dom";

// Public Pages
import Navbar from "./component/Layout/Navbar";
import Footer from "./component/Layout/Footer";
import Hero from "./pages/Hero/hero";
import Testimonial from "./pages/Testimonial/testimonial";
import Contact from "./pages/Contact/contact";

// Authentication
import Login from "./component/auth/LoginForm";
import Register from "./component/auth/Register";

// Layout
import DashboardLayout from "./component/Layout/DashboardLayout";

// Admin Pages
import Dashboard from "./pages/admin/Dashboard";
import Leads from "./pages/admin/Leads";
import TeamMembers from "./pages/admin/TeamMembers";
import Settings from "./pages/admin/Settings";
import Activity from "./pages/admin/Activity";
import MemberDashboard from "./pages/Member/Dashboard";
import ContactSales from "./component/ContactSales";

// Member Pages

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
};
function App() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/ContactSales" element={<ContactSales />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Admin Dashboard */}
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/leads" element={<Leads />} />
        <Route path="/team" element={<TeamMembers />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/settings" element={<Settings />} />
      </Route>

      {/* Member Dashboard */}
      <Route
        path="/member/dashboard"
        element={<MemberDashboard />}
      />
    </Routes>
  );
}

export default App;