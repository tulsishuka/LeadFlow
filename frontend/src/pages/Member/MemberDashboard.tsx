import LeadCard from "../../component/lead/LeadCard";
import MemberLead from "./MemberLead";

const MemberDashboard = () => {
  return (
    <div className="space-y-6">
      <LeadCard />
      <MemberLead />
    </div>
  );
};

export default MemberDashboard;