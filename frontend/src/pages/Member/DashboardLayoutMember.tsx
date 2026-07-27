import { Outlet } from "react-router-dom";
import SidebarMember from "../../component/Layout/SidebarMember";

const DashboardLayoutMember = () => {
  return (
    <div className="flex min-h-screen bg-[#f8f9ff]">
<SidebarMember/>
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayoutMember;