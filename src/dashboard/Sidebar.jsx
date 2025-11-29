import { NavLink } from 'react-router-dom';

const sidebarItems = [
  { name: 'Upload News & Stories', path: '/dashboard/upload-news' },
  { name: 'Upload Event', path: '/dashboard/upload-event' },
  { name: 'Submitted Stories', path: '/dashboard/submitted-stories' },
];

const Sidebar = ({ open = false, onClose = () => {} }) => {
  return (
    <>
      {/* Desktop fixed sidebar */}
      <aside className="hidden md:block fixed left-0 top-0 h-screen w-64 bg-gray-900 border-r border-gray-800 p-6">
        <h2 className="text-2xl font-black text-yellow-500 mb-8">Dashboard</h2>
        <nav className="space-y-4">
          {sidebarItems.map(item => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => `block px-4 py-3 rounded-lg font-semibold transition-colors duration-200 ${isActive ? 'bg-yellow-500 text-black' : 'text-gray-300 hover:bg-yellow-500/10 hover:text-yellow-500'}`}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Mobile drawer */}
      <div className={`md:hidden fixed inset-0 z-40 ${open ? '' : 'pointer-events-none'}`} aria-hidden={!open}>
        <div className={`absolute inset-0 bg-black/50 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`} onClick={onClose} />
        <aside className={`absolute left-0 top-0 h-full w-64 bg-gray-900 p-6 transform transition-transform ${open ? 'translate-x-0' : '-translate-x-full'}`}>
          <h2 className="text-2xl font-black text-yellow-500 mb-8">Dashboard</h2>
          <nav className="space-y-4">
            {sidebarItems.map(item => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={onClose}
                className={({ isActive }) => `block px-4 py-3 rounded-lg font-semibold transition-colors duration-200 ${isActive ? 'bg-yellow-500 text-black' : 'text-gray-300 hover:bg-yellow-500/10 hover:text-yellow-500'}`}
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </aside>
      </div>
    </>
  );
};

export default Sidebar;
