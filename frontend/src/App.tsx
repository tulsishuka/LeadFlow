import { Routes, Route } from "react-router-dom";

import LoginForm from "./component/auth/LoginForm";
import DashboardLayout from "./component/Layout/DashboardLayout";

import Navbar from "./component/Layout/Navbar";
import Footer from "./component/Layout/Footer";

import Hero from "./pages/Hero/hero";
import Testimonial from "./pages/Testimonial/testimonial";
import Contact from "./pages/Contact/contact";

import Dashboard from "./pages/admin/Dashboard";
import Leads from "./pages/admin/Leads";
import TeamMembers from "./pages/admin/TeamMembers";
import Settings from "./pages/admin/Settings";
import Activity from "./pages/admin/Activity";


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

const App = () => {
  return (
    <Routes>

      {/* Landing Page */}
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />

      {/* Dashboard Layout */}
      <Route element={<DashboardLayout />}>

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/leads" element={<Leads />} />
        <Route path="/team" element={<TeamMembers />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/activity" element={<Activity />} />

      </Route>
      <Route path="/login" element={<LoginForm />} />

    </Routes>
  );
};

export default App;