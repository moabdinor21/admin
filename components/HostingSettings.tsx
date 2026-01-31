
import React, { useState } from 'react';

const HostingSettings: React.FC = () => {
  const [customDomain, setCustomDomain] = useState('macaani.so');
  const [isUpdating, setIsUpdating] = useState(false);

  const handleUpdate = () => {
    setIsUpdating(true);
    setTimeout(() => {
      setIsUpdating(false);
      alert("Domain-ka " + customDomain + " waxaa loo diyaariyey in lagu xiro hosting-ka.");
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-official pb-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Server Status Card */}
        <div className="md:col-span-2 bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-xl font-black text-[#2d3494] mb-6 flex items-center">
              <i className="fa-solid fa-cloud-arrow-up mr-3 text-[#2d3494]"></i>
              Cloud Hosting Status
            </h3>
            
            <div className="flex items-center justify-between p-6 bg-slate-50 rounded-3xl border border-slate-100 mb-6">
              <div className="flex items-center space-x-4">
                 <div className="h-12 w-12 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center text-xl shadow-inner">
                    <i className="fa-solid fa-circle-check"></i>
                 </div>
                 <div>
                    <p className="text-sm font-black text-slate-800 uppercase">Operational</p>
                    <p className="text-xs text-slate-500">Connected to Macaani Edge Network</p>
                 </div>
              </div>
              <div className="text-right">
                 <p className="text-xs font-bold text-slate-400">Response Time</p>
                 <p className="text-sm font-black text-[#2d3494]">24ms</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between text-sm px-2">
                 <span className="text-slate-500 font-medium">Auto-Deployment</span>
                 <span className="text-green-600 font-bold">Enabled</span>
              </div>
              <div className="w-full h-[1px] bg-slate-100"></div>
              <div className="flex items-center justify-between text-sm px-2">
                 <span className="text-slate-500 font-medium">SSL Certificate (HTTPS)</span>
                 <span className="text-green-600 font-bold">Active & Secure</span>
              </div>
              <div className="w-full h-[1px] bg-slate-100"></div>
              <div className="flex items-center justify-between text-sm px-2">
                 <span className="text-slate-500 font-medium">Host Provider</span>
                 <span className="text-slate-800 font-bold">Vercel / AWS Cloud</span>
              </div>
            </div>
          </div>
          <div className="absolute top-[-20px] right-[-20px] h-40 w-40 bg-[#2d3494]/5 rounded-full blur-3xl"></div>
        </div>

        {/* Domain Management */}
        <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col">
          <h3 className="text-lg font-black text-[#2d3494] mb-6">Custom Domain</h3>
          <div className="flex-1 space-y-4">
             <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase ml-1">Domain Name</label>
                <input 
                  type="text"
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#f7941d] outline-none text-sm font-bold text-[#2d3494]"
                  value={customDomain}
                  onChange={(e) => setCustomDomain(e.target.value)}
                  placeholder="macaani.com"
                />
             </div>
             <button 
               onClick={handleUpdate}
               disabled={isUpdating}
               className="w-full bg-[#f7941d] text-white py-3.5 rounded-xl font-bold text-sm hover:bg-orange-600 transition-all flex items-center justify-center shadow-lg shadow-orange-500/20"
             >
               {isUpdating ? <i className="fa-solid fa-spinner fa-spin"></i> : 'Update Domain'}
             </button>
             
             <div className="pt-4 mt-auto">
                <div className="p-3 bg-blue-50 rounded-xl border border-blue-100">
                   <p className="text-[10px] text-blue-700 leading-relaxed font-medium">
                      <i className="fa-solid fa-circle-info mr-1"></i>
                      Xusuusnow inaad DNS settings-ka domain-kaaga ku xirto IP-ga host-kaaga.
                   </p>
                </div>
             </div>
          </div>
        </div>
      </div>

      <div className="bg-[#2d3494] text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
         <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-md">
               <h3 className="text-2xl font-black mb-4">Ma rabtaa inaad Live ka dhigto?</h3>
               <p className="text-slate-300 text-sm leading-relaxed mb-6 font-medium">
                  Si app-kaaga looga helo domain-kaaga rasmiga ah, waxaad u baahantahay inaad code-ka u dirto server-kaaga. Waxaan ku diyaarinay code-ka inuu si fudud ugu xirmo meel kasta.
               </p>
               <div className="flex space-x-3">
                  <div className="bg-white/10 px-4 py-2 rounded-xl border border-white/20 text-xs font-bold">
                     <i className="fa-brands fa-github mr-2"></i> GitHub Connect
                  </div>
                  <div className="bg-white/10 px-4 py-2 rounded-xl border border-white/20 text-xs font-bold">
                     <i className="fa-solid fa-terminal mr-2"></i> FTP Upload
                  </div>
               </div>
            </div>
            <div className="bg-white text-[#2d3494] p-8 rounded-[2rem] text-center w-full md:w-64 shadow-xl">
               <div className="h-16 w-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4 text-[#2d3494] text-3xl shadow-inner">
                  <i className="fa-solid fa-globe"></i>
               </div>
               <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Preview Link</p>
               <p className="text-sm font-black text-blue-600 truncate mb-4">app.macaani.so</p>
               <button className="w-full bg-[#f7941d] text-white py-3.5 rounded-xl font-black text-xs shadow-lg shadow-orange-500/20">FURE APP-KA</button>
            </div>
         </div>
         <div className="absolute left-[-50px] bottom-[-50px] h-64 w-64 bg-white/5 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default HostingSettings;
