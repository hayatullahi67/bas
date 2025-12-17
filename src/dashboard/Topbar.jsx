import { Menu } from 'lucide-react';

const Topbar = ({ onMenuClick = () => {} }) => (
  <header className="w-full bg-gray-900 border-b border-gray-800 px-4 md:px-8 py-4 flex items-center justify-between">
    <div className="flex items-center gap-4">
      <button onClick={onMenuClick} className="md:hidden p-2 rounded-md text-gray-300 hover:bg-yellow-500/10">
        <Menu size={20} />
      </button>
      <h1 className="text-2xl font-bold text-yellow-500">Admin Dashboard</h1>
    </div>
    <div className="text-gray-400">Welcome, Admin</div>
  </header>
);

export default Topbar;
