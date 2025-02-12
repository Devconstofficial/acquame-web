import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./sidebar";
import Header from "./header";

const Layout = () => {
  // Track whether the sidebar is collapsed to adjust layout accordingly
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Toggle the collapsed state of the sidebar
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: isCollapsed ? "60px" : "18%", // Adjust width based on collapse state
          height: "100vh", // Full height of the viewport
          zIndex: 100,
          transition: "width 0.3s ease", // Smooth transition for sidebar collapse

          // Responsive Design
        ...(window.innerWidth <= 768
          ? { width: isCollapsed ? "60px" : "18%" } // 18% width on mobile
          : {}),


        }}
      >
        <SideBar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
      </div>

      {/* Main content area */}
      <div
        style={{
          marginLeft: isCollapsed ? "60px" : "15%", // Leave space for fixed sidebar
          width: isCollapsed ? "calc(100% - 60px)" : "calc(100% - 15%)", // Adjust width dynamically
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Fixed Header */}
        <div
          style={{
            position: "relative",
            top: 0,
            // left: isCollapsed ? "60px" : "15%", // Align with sidebar
            width: isCollapsed ? "calc(100% - 60px)" : "calc(100%)",
            height: "60px", // Example height for the header
            zIndex: 99,
          }}
        >
          <Header />
        </div>

        {/* Scrollable Children */}
        <div
          style={{// Leave space for the fixed header
            height: "calc(100vh - 60px)", // Remaining height after the header
            overflowY: "auto", // Enable vertical scrolling
            overflowX: "hidden", // Prevent horizontal scrolling
            padding: "5%", // Add padding for content
          }}
        >
          <Outlet /> {/* Render child routes dynamically */}
        </div>
      </div>
    </div>
  );
};

export default Layout;
