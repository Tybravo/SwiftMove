import { useState } from 'react';
import Navbar from '../components/common/NavbarUser';
import Sidebar from '../components/common/SidebarUser';
import React from 'react';

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  // 1. Add state to manage the sidebar's collapsed status
  const [isCollapsed, setIsCollapsed] = useState(false);

  // 2. Create a function to toggle the state
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div>
      {/* 3. Pass the toggle function to the Navbar */}
      <Navbar onToggleSidebar={toggleSidebar} isCollapsed={isCollapsed} />
      <div style={{ display: 'flex' }}>
        {/* 4. Pass the collapsed state to the Sidebar */}
        <Sidebar isCollapsed={isCollapsed} />
        <main style={{ flexGrow: 1, padding: '24px' }}>{children}</main> {/* This is where AdminDashboard.tsx content goes */}
      </div>
    </div>
  );
};

  
export default UserLayout;


