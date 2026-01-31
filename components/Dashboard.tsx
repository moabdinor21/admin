
import React, { useState } from 'react';
import { Customer, MessageLog, View } from '../types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface DashboardProps {
  customers: Customer[];
  logs: MessageLog[];
  onNavigate: (view: View) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ customers, logs, onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const data = [
    { name: 'Sabti', count: 12 },
    { name: 'Axad', count: 19 },
    { name: 'Isniin', count: 15 },
    { name: 'Talaado', count: 22 },
    { name: 'Arbaco', count: 30 },
    { name: 'Khamiis', count: 25 },
    { name: 'Jimce', count: 10 },
  ];

  const stats = [
    { label: 'Wadarta Macaamiisha', value: customers.length, icon: 'fa-users', color: 'bg-blue-50 text-[#2d3494]' },
    { label: 'Data la Shubay', value: '1,240 GB', icon: 'fa-wifi', color: 'bg-orange-50 text-[#f7941d]' },
    { label: 'Dakhliga Maanta', value: '$450.00', icon: 'fa-wallet', color: 'bg-green-50 text-green-600' },
    { label: 'System Uptime', value: '99.9%', icon: 'fa-server', color: 'bg-purple-50 text-purple-600' },
  ];

  return (
    <div className="space-y-6 animate-official">
      {/* MACAANI Promotion Banner */}
      <div className="bg-gradient-to-br from-[#2d3494] via-[#3a41a4] to-[#2d3494] rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl shadow-blue-900/30">
        <div className="relative z-10 max-w-lg">
          <span className="bg-[#f7941d] text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block shadow-lg shadow-orange-500/30">App-ka Rasmiga ah</span>
          <h2 className="text-4xl font-black mb-2 leading-tight tracking-tight">Ku soo dhowow MACAANI PRO</h2>
          <p className="text-blue-100 text-sm mb-8 font-medium">Nidaamka ugu fudud uguna quruxda badan ee shubista xogta.</p>
          
          <div className="relative mt-6 mb-8 group">
             <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-blue-300 group-focus-within:text-[#f7941d] transition-colors"></i>
             <input 
               type="text" 
               placeholder="Raadi App-ka Play Store..." 
               className="w-full bg-white/10 border border-white/20 rounded-2xl py-3.5 pl-12 pr-4 text-sm focus:outline-none focus:bg-white focus:text-[#2d3494] transition-all placeholder:text-blue-200 shadow-inner"
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
             />
             {searchTerm.toLowerCase().includes('macaani') && (
               <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl p-4 text-[#2d3494] z-50 animate-fade-in border border-slate-100">
                  <div 
                    onClick={() => onNavigate(View.Store)}
                    className="flex items-center space-x-4 cursor-pointer hover:bg-slate-50 p-3 rounded-xl transition-colors"
                  >
                    <div className="h-12 w-12 bg-white shadow-sm border border-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
                       <span className="text-[#2d3494] font-black text-xs">M</span>
                       <span className="text-[#f7941d] font-black text-xs">C</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-sm">MACAANI DATA SERVICE</p>
                      <p className="text-[10px] text-gray-500">Official Google Play Listing</p>
                    </div>
                    <span className="text-[10px] font-bold text-[#01875f] bg-[#01875f]/10 px-2 py-1 rounded-lg">BILOW</span>
                  </div>
               </div>
             )}
          </div>

          <div className="flex space-x-4">
             <button onClick={() => onNavigate(View.SendMessage)} className="bg-[#f7941d] text-white px-8 py-3.5 rounded-2xl font-black text-sm hover:scale-105 transition-all transform active:scale-95 shadow-xl shadow-orange-500/20">
               Shub Data Hadda
             </button>
             <button onClick={() => onNavigate(View.Store)} className="bg-white/10 backdrop-blur-md border border-white/20 px-8 py-3.5 rounded-2xl font-bold text-sm hover:bg-white/20 transition-all">
               Eeg Play Store
             </button>
          </div>
        </div>
        <div className="absolute right-[-40px] top-[-40px] h-80 w-80 bg-[#f7941d]/20 rounded-full blur-[80px]"></div>
        <div className="absolute left-[-40px] bottom-[-40px] h-60 w-60 bg-blue-400/10 rounded-full blur-[60px]"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:border-[#f7941d]/30 transition-all group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">{stat.label}</p>
                <h3 className="text-2xl font-black mt-1 text-slate-800">{stat.value}</h3>
              </div>
              <div className={`${stat.color} h-12 w-12 rounded-2xl flex items-center justify-center text-xl group-hover:scale-110 transition-transform shadow-sm`}>
                <i className={`fa-solid ${stat.icon}`}></i>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="font-extrabold text-slate-800 text-lg">Xogta Toddobaadka</h3>
              <p className="text-xs text-slate-400">Dhaqdhaqaaqa shubista data-da todobaadkan</p>
            </div>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 'bold'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 'bold'}} />
                <Tooltip 
                  cursor={{fill: '#f8fafc'}}
                  contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)', padding: '12px'}}
                />
                <Bar dataKey="count" radius={[8, 8, 8, 8]} barSize={35}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#2d3494' : '#f7941d'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100">
            <h3 className="font-extrabold text-slate-800 mb-6">Adeegga rasmiga ah</h3>
            <div className="space-y-4">
              <div onClick={() => onNavigate(View.Store)} className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 cursor-pointer hover:border-[#01875f] transition-colors">
                <div className="h-10 w-10 rounded-xl bg-green-100 text-[#01875f] flex items-center justify-center shrink-0">
                  <i className="fa-brands fa-google-play"></i>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">Play Store Listing</p>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">Guji halkan si aad u aragto muuqaalka Play Store-ka.</p>
                </div>
              </div>
              <button 
                onClick={() => onNavigate(View.SendMessage)}
                className="w-full bg-[#2d3494] text-white py-4 rounded-2xl font-black text-sm hover:bg-slate-800 transition-all shadow-xl shadow-blue-900/20 flex items-center justify-center space-x-2"
              >
                <i className="fa-solid fa-paper-plane"></i>
                <span>BILOW SHUBISTA</span>
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#f7941d] to-[#ffb347] p-8 rounded-[2.5rem] shadow-xl shadow-orange-500/20 text-white relative overflow-hidden">
            <div className="relative z-10">
                <h4 className="font-black text-lg mb-2">Ma u baahantahay caawinaad?</h4>
                <p className="text-orange-100 text-xs mb-4 leading-relaxed">Xubnaha VIP-da waxay helayaan caawinaad 24/7 ah oo toos ah.</p>
                <button className="w-full bg-white/20 backdrop-blur-md border border-white/30 py-3 rounded-xl font-bold text-xs hover:bg-white/30 transition-all">
                La hadal Support-ka
                </button>
            </div>
            <div className="absolute top-[-20px] right-[-20px] h-32 w-32 bg-white/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
