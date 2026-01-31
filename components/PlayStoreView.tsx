
import React from 'react';

interface PlayStoreViewProps {
  onInstall: () => void;
  onBack: () => void;
}

const PlayStoreView: React.FC<PlayStoreViewProps> = ({ onInstall, onBack }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white min-h-screen rounded-[2.5rem] shadow-2xl overflow-hidden animate-official border border-gray-100">
      {/* Play Store Header */}
      <div className="px-6 py-4 flex items-center justify-between border-b border-gray-100">
        <button onClick={onBack} className="text-gray-600 hover:text-black">
          <i className="fa-solid fa-arrow-left text-xl"></i>
        </button>
        <div className="flex items-center space-x-6">
          <i className="fa-solid fa-magnifying-glass text-gray-600"></i>
          <i className="fa-solid fa-circle-question text-gray-600"></i>
        </div>
      </div>

      <div className="p-6 md:p-10">
        <div className="flex flex-col md:flex-row items-start md:space-x-8">
          {/* MACAANI App Icon */}
          <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-3xl shadow-xl border border-gray-100 flex items-center justify-center mb-6 md:mb-0 relative overflow-hidden group">
             <div className="absolute inset-0 border-[6px] border-gray-50 rounded-3xl"></div>
             <div className="flex items-center justify-center relative z-10 h-full w-full">
                <span className="text-[#2d3494] font-black text-4xl md:text-5xl">M</span>
                <span className="text-[#f7941d] font-black text-4xl md:text-5xl">C</span>
             </div>
             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#7a5360] rotate-45 translate-y-4"></div>
          </div>

          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight">MACAANI DATA SERVICE</h2>
            <p className="text-[#01875f] font-bold text-sm mt-1 hover:underline cursor-pointer">Macaani Pro Team</p>
            <p className="text-gray-500 text-xs mt-1">Contains ads • In-app purchases</p>

            <div className="mt-6 flex items-center space-x-12 overflow-x-auto pb-2 no-scrollbar">
              <div className="text-center shrink-0">
                <p className="text-sm font-bold text-gray-900 flex items-center justify-center">5.0 <i className="fa-solid fa-star text-[10px] ml-1 text-orange-500"></i></p>
                <p className="text-[10px] text-gray-500 font-medium">12K reviews</p>
              </div>
              <div className="h-8 w-[1px] bg-gray-200 shrink-0"></div>
              <div className="text-center shrink-0">
                <p className="text-sm font-bold text-gray-900">100K+</p>
                <p className="text-[10px] text-gray-500 font-medium">Downloads</p>
              </div>
              <div className="h-8 w-[1px] bg-gray-200 shrink-0"></div>
              <div className="text-center shrink-0">
                <div className="w-5 h-5 bg-gray-900 text-white text-[8px] flex items-center justify-center font-bold mx-auto mb-1">3+</div>
                <p className="text-[10px] text-gray-500 font-medium">Rated for 3+</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
              <button 
                onClick={onInstall}
                className="flex-1 bg-[#01875f] text-white py-3 rounded-lg font-bold text-sm hover:bg-[#016d4d] transition-colors shadow-sm"
              >
                Install
              </button>
              <button className="flex-1 border border-gray-300 text-[#01875f] py-3 rounded-lg font-bold text-sm hover:bg-gray-50 transition-colors">
                Add to wishlist
              </button>
            </div>
          </div>
        </div>

        {/* Screenshots Gallery */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-4">
             <h3 className="font-bold text-gray-900">Screenshots</h3>
             <i className="fa-solid fa-arrow-right text-gray-400 text-sm"></i>
          </div>
          <div className="flex space-x-4 overflow-x-auto pb-4 no-scrollbar">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-48 h-80 bg-slate-100 rounded-xl border border-gray-200 shrink-0 flex items-center justify-center p-4 relative overflow-hidden group">
                <div className="bg-white w-full h-full rounded-lg shadow-sm flex flex-col p-2">
                   <div className="h-2 w-8 bg-gray-100 rounded-full mx-auto mb-4"></div>
                   <div className="space-y-2">
                     <div className="h-3 w-full bg-slate-50 rounded"></div>
                     <div className="h-3 w-2/3 bg-slate-50 rounded"></div>
                   </div>
                   <div className="mt-auto h-20 w-full bg-blue-50 rounded-lg flex items-center justify-center">
                      <i className="fa-solid fa-wifi text-[#2d3494] text-2xl"></i>
                   </div>
                </div>
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
              </div>
            ))}
          </div>
        </div>

        {/* About the app */}
        <div className="mt-10 border-t border-gray-100 pt-10">
          <div className="flex items-center justify-between mb-4">
             <h3 className="font-bold text-gray-900">About this app</h3>
             <i className="fa-solid fa-arrow-right text-gray-400 text-sm"></i>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
            MACAANI DATA SERVICE waa nidaamka ugu casrisan uguna quruxda badan ee shubista data-da iyo isgaarsiinta macaamiisha. Ku shub xirmooyinka internet-ka si degdeg ah. Waxaa la socda nidaamka AI-ga ugu dambeeyey.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-gray-100 rounded-full text-[10px] font-bold text-gray-600">Macaani</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-[10px] font-bold text-gray-600">Business</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-[10px] font-bold text-gray-600">Communication</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayStoreView;
