import { Menu, User, Bell, Search } from 'lucide-react';

const Topbar = ({ onMenuClick = () => { } }) => (
  <header className="sticky top-0 z-40 w-full bg-[#050505]/80 backdrop-blur-md border-b border-white/5 px-4 md:px-8 h-20 flex items-center justify-between">
    <div className="flex items-center gap-4">
      <button
        onClick={onMenuClick}
        className="md:hidden p-2.5 rounded-xl text-gray-400 hover:bg-white/5 hover:text-white transition-all bg-white/5 border border-white/5"
      >
        <Menu size={20} />
      </button>
      <div className="hidden md:flex items-center gap-2 text-sm text-gray-400">
        <span className="opacity-50">Pages</span>
        <span className="opacity-50">/</span>
        <span className="text-white font-medium capitalize">Dashboard</span>
      </div>
    </div>

    <div className="flex items-center gap-3">
      <div className="hidden sm:flex items-center bg-white/5 border border-white/5 rounded-xl px-3 py-1.5 gap-2 text-gray-400 focus-within:border-yellow-500/50 transition-all">
        <Search size={16} />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent border-none outline-none text-xs w-32 focus:w-48 transition-all"
        />
      </div>

      <button className="p-2.5 rounded-xl text-gray-400 hover:bg-white/5 hover:text-white transition-all relative">
        <Bell size={18} />
        <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-yellow-500 rounded-full border-2 border-[#050505]"></span>
      </button>

      <div className="h-8 w-[1px] bg-white/5 mx-1"></div>

      <div className="flex items-center gap-3 pl-2 group cursor-pointer">
        <div className="flex flex-col items-end hidden xs:block">
          <span className="text-sm font-bold text-white leading-none mb-1">Admin</span>
          <span className="text-[10px] text-yellow-500 font-bold uppercase tracking-wider leading-none">Superuser</span>
        </div>
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-600 p-[1px]">
          <div className="w-full h-full rounded-[11px] bg-[#0A0A0A] flex items-center justify-center overflow-hidden">
            <User size={20} className="text-yellow-500" />
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Topbar;
