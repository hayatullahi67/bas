import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

const Dashboard = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black">
      {/* Desktop sidebar is fixed on md+; main content gets left padding to avoid overlap */}
      <Sidebar open={mobileOpen} onClose={() => setMobileOpen(false)} />

      <div className="md:pl-64 flex flex-col min-h-screen">
        <Topbar onMenuClick={() => setMobileOpen(prev => !prev)} />
        <main className="flex-1 p-6 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
