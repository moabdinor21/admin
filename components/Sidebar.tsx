
import React from 'react';
import { View } from '../types';

interface SidebarProps {
  currentView: View;
  setView: (view: View) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, setView }) => {
  const menuItems = [
    { id: View.Dashboard, icon: 'fa-chart-line', label: 'Xogta Guud' },
    { id: View.Customers, icon: 'fa-users', label: 'Macaamiisha' },
    { id: View.SendMessage, icon: 'fa-paper-plane', label: 'Dir Fariin' },
    { id: View.History, icon: 'fa-clock-rotate-left', label: 'Taariikhda' },
  ];

  return (
    <aside className="w-64 bg-[#2d3494] text-white flex flex-col hidden md:flex shrink-0 shadow-2xl z-20 border-r border-white/5">
      <div className="p-8">
        <div className="flex items-center space-x-3">
          <div className="h-12 w-12 rounded-full border-2 border-[#f7941d] flex items-center justify-center bg-white shadow-lg overflow-hidden relative">
             <div className="absolute inset-0 bg-gradient-to-br from-[#f7941d]/10 to-[#2d3494]/10"></div>
             <span className="text-[#2d3494] font-black text-xl z-10">M</span>
             <span className="text-[#f7941d] font-black text-xl z-10">C</span>
             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#7a5360] rotate-45 translate-y-2"></div>
          </div>
          <div>
            <span className="text-xl font-black tracking-tighter block leading-none">MACAANI</span>
            <span className="text-[10px] text-[#f7941d] font-bold tracking-widest uppercase">Data Service</span>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-1.5 overflow-y-auto">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setView(item.id)}
            className={`w-full flex items-center space-x-3 px-5 py-3.5 rounded-2xl transition-all duration-300 group ${
              currentView === item.id 
                ? 'bg-[#f7941d] text-white shadow-xl shadow-orange-500/20 translate-x-2' 
                : 'text-white/60 hover:bg-white/10 hover:text-white'
            }`}
          >
            <i className={`fa-solid ${item.icon} w-5 text-center text-lg group-hover:scale-110 transition-transform`}></i>
            <span className="font-bold">{item.label}</span>
          </button>
        ))}
        
        <div className="pt-6 pb-2">
           <p className="px-5 text-[10px] font-bold text-white/40 uppercase tracking-widest mb-3">Settings</p>
           <button 
             onClick={() => setView(View.Hosting)}
             className={`w-full flex items-center space-x-3 px-5 py-3.5 rounded-2xl transition-all duration-300 group ${
               currentView === View.Hosting 
                 ? 'bg-white text-[#2d3494] shadow-xl translate-x-2' 
                 : 'text-white/60 hover:bg-white/10 hover:text-white'
             }`}
           >
             <i className="fa-solid fa-server w-5 text-center text-lg"></i>
             <span className="font-bold">Hosting & Domain</span>
           </button>
           <button 
             onClick={() => setView(View.Download)}
             className={`w-full flex items-center space-x-3 px-5 py-3.5 rounded-2xl transition-all duration-300 group mt-1 ${
               currentView === View.Download 
                 ? 'bg-white/20 text-white shadow-xl translate-x-2' 
                 : 'text-white/60 hover:bg-white/10 hover:text-white'
             }`}
           >
             <i className="fa-solid fa-download w-5 text-center text-lg"></i>
             <span className="font-bold">Soo Degso App-ka</span>
           </button>
        </div>
      </nav>

      <div className="p-6 space-y-4">
        <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
          <p className="text-[10px] text-white/40 font-bold mb-2 uppercase tracking-wider">Official Store</p>
          <div className="flex flex-col space-y-2">
            <button 
              onClick={() => setView(View.Store)}
              className="flex items-center space-x-2 bg-black/40 p-2 rounded-lg border border-white/10 hover:bg-black/60 transition-colors"
            >
               <i className="fa-brands fa-google-play text-xs text-white"></i>
               <span className="text-[9px] font-bold text-white uppercase">Google Play</span>
            </button>
            <button 
              onClick={() => setView(View.Store)}
              className="flex items-center space-x-2 bg-black/40 p-2 rounded-lg border border-white/10 hover:bg-black/60 transition-colors"
            >
               <i className="fa-brands fa-apple text-xs text-white"></i>
               <span className="text-[9px] font-bold text-white uppercase">App Store</span>
            </button>
          </div>
        </div>
        
        <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 text-white/40 hover:text-red-400 transition-colors text-sm font-bold">
          <i className="fa-solid fa-power-off"></i>
          <span>Ka Bax</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
