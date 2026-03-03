import React, { useState } from "react";
import NavbarComponent from "./components/Navbar";
import SidebarComponent from "./components/Sidebar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900">
      <NavbarComponent onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <SidebarComponent isOpen={sidebarOpen} />
      <div className="pt-16 sm:ml-64 min-h-screen">
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
