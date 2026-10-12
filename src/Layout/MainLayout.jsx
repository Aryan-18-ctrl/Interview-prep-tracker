
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import DashboardTopHeader from "../components/DashboardTopHeader";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="flex min-h-screen bg-[#F5F7FA]">
      <Navbar />

      <main className="flex-1 bg-[#F5F7F9] h-screen overflow-y-auto">
        <DashboardTopHeader />

        <div className="bg-[#F5F7F9] min-h-[calc(100vh-80px)]">
          <Outlet />
        </div>

        <Footer />
      </main>
    </div>
  );
};

export default MainLayout;
