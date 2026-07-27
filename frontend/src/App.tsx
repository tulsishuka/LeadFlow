import { Routes, Route } from "react-router-dom";

import Navbar from "./component/Layout/Navbar";
import Footer from "./component/Layout/Footer";
import Hero from "./pages/Hero/hero";
import Testimonial from "./pages/Testimonial/testimonial";
import Login from "./component/auth/LoginForm";
import Register from "./component/auth/Register";
import DashboardLayout from "./component/Layout/DashboardLayout";
import Dashboard from "./pages/admin/Dashboard";
import TeamMembers from "./pages/admin/TeamMembers";
import Activity from "./pages/admin/Activity";
import ContactSales from "./component/ContactSales";
import DashboardLayoutMember from "./pages/Member/DashboardLayoutMember";
import MemberDashboard from "./pages/Member/MemberDashboard";
import MemberLead from "./pages/Member/MemberLead";
import LeadDetails from "./pages/Member/LeadDetails";
import Leads from "./pages/admin/Leads";
import LoginForm from "./component/auth/LoginForm";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Testimonial />
<ContactSales/>
      <Footer />
    </>
  );
};
function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/ContactSales" element={<ContactSales />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/testimonial" element={<Testimonial />} />
      <Route path="/LoginForm" element={<LoginForm />} />

      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/team" element={<TeamMembers />} />
        <Route path="/leads" element={<Leads />} />
        


        <Route path="/activity" element={<Activity />} />
      </Route>
  <Route element={<DashboardLayoutMember />}>
  <Route
    path="/member/dashboard"
    element={<MemberDashboard />}
  />

  <Route
    path="/member/leads"
    element={<MemberLead />}
  />

  <Route
    path="/member/leads/:id"
    element={<LeadDetails />}
  />


</Route>
    </Routes>
  );
}

export default App;