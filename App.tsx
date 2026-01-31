
import React, { useState, useEffect } from 'react';
import { View, Customer, MessageLog } from './types';
import Dashboard from './components/Dashboard';
import CustomersList from './components/CustomersList';
import SendMessage from './components/SendMessage';
import History from './components/History';
import Sidebar from './components/Sidebar';
import PlayStoreView from './components/PlayStoreView';
import DownloadPage from './components/DownloadPage';
import HostingSettings from './components/HostingSettings';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.Dashboard);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [customers, setCustomers] = useState<Customer[]>([
    { id: '1', name: 'Hudeyfa Haji', email: 'hudeyfa@macaani.com', phone: '252610000000', category: 'VIP', lastSent: 'Hadda' },
    { id: '2', name: 'Axmed Cali', email: 'axmed@example.com', phone: '252615555551', category: 'VIP', lastSent: '2 saac ka hor' },
    { id: '3', name: 'Sahra Maxamed', email: 'sahra@example.com', phone: '252615555552', category: 'Regular', lastSent: 'Shalay' },
    { id: '4', name: 'Jaamac Warsame', email: 'jaamac@example.com', phone: '252615555553', category: 'New', lastSent: 'Toddobaad ka hor' },
    { id: '5', name: 'Dubad Mohamed', email: 'dubad@example.com', phone: '252615555554', category: 'Regular', lastSent: 'Maalin ka hor' },
  ]);
  const [logs, setLogs] = useState<MessageLog[]>([]);

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    });
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        console.log('App installed');
      }
      setDeferredPrompt(null);
    } else {
      alert("App-ka waa mid lagu dhex rakibay browser-kaaga. Guji sadexda dhibcood ee browser-ka ka dibna dooro 'Add to Home Screen'.");
    }
  };

  const addLog = (log: MessageLog) => {
    setLogs(prev => [log, ...prev]);
  };

  const renderView = () => {
    switch (currentView) {
      case View.Dashboard:
        return <Dashboard customers={customers} logs={logs} onNavigate={setCurrentView} />;
      case View.Customers:
        return <CustomersList customers={customers} setCustomers={setCustomers} />;
      case View.SendMessage:
        return <SendMessage customers={customers} onMessageSent={addLog} />;
      case View.History:
        return <History logs={logs} />;
      case View.Store:
        return <PlayStoreView onInstall={handleInstall} onBack={() => setCurrentView(View.Dashboard)} />;
      case View.Download:
        return <DownloadPage />;
      case View.Hosting:
        return <HostingSettings />;
      default:
        return <Dashboard customers={customers} logs={logs} onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar currentView={currentView} setView={setCurrentView} />
      <main className="flex-1 overflow-y-auto p-4 md:p-8">
        <header className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-black text-[#2d3494]">
              {currentView === View.Dashboard && 'Xogta Guud (Dashboard)'}
              {currentView === View.Customers && 'Maamulka Macaamiisha'}
              {currentView === View.SendMessage && 'Adeegga Data-da & Fariimaha'}
              {currentView === View.History && 'Taariikhda Adeegyada'}
              {currentView === View.Store && 'Play Store Listing'}
              {currentView === View.Download && 'Soo Degso App-ka'}
              {currentView === View.Hosting && 'Hosting & Domain'}
            </h1>
            <p className="text-gray-500 font-medium">MACAANI DATA SERVICE - Maamulkaaga Casriga ah.</p>
          </div>
          <div className="flex items-center space-x-4">
             <div className="hidden sm:flex items-center space-x-2 px-3 py-1 bg-green-50 text-green-600 rounded-full border border-green-100 mr-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-[10px] font-black uppercase tracking-tighter">Server Live</span>
             </div>
             <button className="bg-white p-2 rounded-full border border-gray-200 shadow-sm relative">
                <i className="fa-solid fa-bell text-gray-400"></i>
                <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full border border-white"></span>
             </button>
             <div className="flex items-center space-x-2 bg-white px-3 py-1.5 rounded-xl border border-gray-100 shadow-sm">
               <div className="h-8 w-8 rounded-full bg-[#f7941d] flex items-center justify-center text-white font-bold text-xs shadow-sm">
                  MC
               </div>
               <span className="text-xs font-bold text-slate-700 hidden sm:block">Admin</span>
             </div>
          </div>
        </header>
        {renderView()}
      </main>
    </div>
  );
};

export default App;
