
import React, { useState } from 'react';

const DownloadPage: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const appUrl = window.location.href;

  const handleCopy = () => {
    navigator.clipboard.writeText(appUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'MACAANI DATA SERVICE',
          text: 'Soo degso App-ka rasmiga ah ee MACAANI si aad data ugu shubto macaamiishaada!',
          url: appUrl,
        });
      } catch (err) {
        console.log('Share failed', err);
      }
    } else {
      handleCopy();
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-official pb-20">
      <div className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-gray-100 text-center relative overflow-hidden">
        <div className="relative z-10">
          <div className="h-24 w-24 bg-white border-4 border-[#f7941d] rounded-[2rem] flex items-center justify-center mx-auto mb-6 shadow-xl shadow-orange-500/10 relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-br from-[#f7941d]/5 to-[#2d3494]/5"></div>
             <span className="text-[#2d3494] font-black text-3xl">M</span>
             <span className="text-[#f7941d] font-black text-3xl">C</span>
             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#7a5360] rotate-45 translate-y-4"></div>
          </div>
          <h2 className="text-3xl font-black text-[#2d3494] mb-2">MACAANI DATA SERVICE</h2>
          <p className="text-slate-500 max-w-md mx-auto mb-8 font-medium">
            Kani waa link-gaaga rasmiga ah. U dir asxaabtaada si ay app-ka u degsadaan oo ay kuugu biiraan.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-2xl mx-auto bg-slate-50 p-4 rounded-3xl border border-slate-100">
            <div className="flex-1 text-left px-4 py-2 overflow-hidden w-full">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Official App Link</p>
              <p className="text-sm font-mono text-blue-600 truncate">{appUrl}</p>
            </div>
            <button 
              onClick={handleCopy}
              className={`px-8 py-3 rounded-2xl font-bold transition-all flex items-center space-x-2 shrink-0 w-full md:w-auto justify-center ${
                copied ? 'bg-green-500 text-white' : 'bg-[#2d3494] text-white hover:bg-slate-800 shadow-lg'
              }`}
            >
              <i className={`fa-solid ${copied ? 'fa-check' : 'fa-copy'}`}></i>
              <span>{copied ? 'Waa la Koobiyeeyey' : 'Koobi gareey'}</span>
            </button>
          </div>

          <div className="mt-8 flex justify-center space-x-4">
             <button 
               onClick={handleShare}
               className="bg-green-500 text-white px-8 py-4 rounded-2xl font-black text-sm hover:bg-green-600 transition-all flex items-center shadow-lg shadow-green-500/20"
             >
               <i className="fa-brands fa-whatsapp text-xl mr-2"></i>
               U DIR WHATSAPP
             </button>
          </div>
        </div>
        <div className="absolute top-[-20px] right-[-20px] h-40 w-40 bg-[#f7941d]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100">
          <h3 className="font-bold text-lg text-[#2d3494] mb-6 flex items-center">
            <i className="fa-solid fa-mobile-screen-button mr-3 text-[#f7941d]"></i>
            Sida loo rakibo (Install)
          </h3>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="h-8 w-8 rounded-full bg-slate-100 text-[#2d3494] flex items-center justify-center font-bold text-sm shrink-0">1</div>
              <p className="text-sm text-slate-600 pt-1">Guji link-ga kore si aad app-ka ugu furto browser-kaaga.</p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="h-8 w-8 rounded-full bg-slate-100 text-[#2d3494] flex items-center justify-center font-bold text-sm shrink-0">2</div>
              <p className="text-sm text-slate-600 pt-1">Guji sadexda dhibcood (Chrome) ama Share icon (Safari).</p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="h-8 w-8 rounded-full bg-slate-100 text-[#2d3494] flex items-center justify-center font-bold text-sm shrink-0">3</div>
              <p className="text-sm text-slate-600 pt-1">Dooro <strong>"Add to Home Screen"</strong> ama <strong>"Install App"</strong>.</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
           <div className="p-4 bg-slate-50 rounded-3xl border-4 border-slate-100 mb-4">
              <div className="w-32 h-32 bg-white grid grid-cols-4 grid-rows-4 gap-1 p-2">
                 {[...Array(16)].map((_, i) => (
                   <div key={i} className={`${Math.random() > 0.5 ? '#2d3494' : 'bg-transparent'} rounded-sm`}></div>
                 ))}
              </div>
           </div>
           <h4 className="font-bold text-sm text-slate-800">Scan to Download</h4>
           <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-widest font-bold">Official MACAANI QR</p>
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;
