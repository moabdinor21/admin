
import React, { useState } from 'react';
import { Customer, MessageLog } from '../types';
import { generateMessageDraft } from '../geminiService';

interface SendMessageProps {
  customers: Customer[];
  onMessageSent: (log: MessageLog) => void;
}

const SendMessage: React.FC<SendMessageProps> = ({ customers, onMessageSent }) => {
  const [selectedCustomerId, setSelectedCustomerId] = useState('');
  const [msgType, setMsgType] = useState<'Email' | 'SMS' | 'Notification'>('SMS');
  const [message, setMessage] = useState('');
  const [aiPrompt, setAiPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const selectedCustomer = customers.find(c => c.id === selectedCustomerId);

  const dataBundles = [
    { label: '1GB Data', size: '1GB' },
    { label: '3GB Data', size: '3GB' },
    { label: '5GB Data', size: '5GB' },
    { label: '10GB Data', size: '10GB' },
  ];

  const handleQuickData = (size: string) => {
    if (!selectedCustomer) {
      alert("Fadlan marka hore dooro macmiilka.");
      return;
    }
    const msg = `MUDANE ${selectedCustomer.name.toUpperCase()}, waxaan kuu shubnay xirmo DATA ah oo dhan ${size}. Waad ku mahadsantahay isticmaalka HALDHAA DATA SERVICE.`;
    setMessage(msg);
  };

  const handleGenerate = async () => {
    if (!aiPrompt || !selectedCustomer) return;
    setIsGenerating(true);
    const draft = await generateMessageDraft(aiPrompt, selectedCustomer.name);
    setMessage(draft);
    setIsGenerating(false);
  };

  const handleSend = () => {
    if (!selectedCustomer || !message) return;
    setIsSending(true);
    
    setTimeout(() => {
      onMessageSent({
        id: Math.random().toString(36).substr(2, 9),
        customerId: selectedCustomer.id,
        customerName: selectedCustomer.name,
        type: msgType,
        content: message,
        timestamp: new Date().toLocaleTimeString(),
        status: 'Sent'
      });
      setIsSending(false);
      setShowSuccess(true);
      setMessage('');
      setAiPrompt('');
      setTimeout(() => setShowSuccess(false), 3000);
    }, 1500);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-12">
      {showSuccess && (
        <div className="bg-green-600 text-white px-6 py-4 rounded-2xl relative shadow-xl shadow-green-900/20 flex items-center animate-bounce z-50">
          <i className="fa-solid fa-circle-check text-2xl mr-4"></i>
          <div>
            <strong className="font-bold">Guul weyn!</strong>
            <p className="text-sm opacity-90">Adeeggii waa la fuliyey, fariintiina waa la diray.</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-6">
            <h3 className="font-bold text-gray-800 flex items-center">
              <i className="fa-solid fa-user-check text-orange-500 mr-2"></i>
              1. Dooro Macmiilka
            </h3>
            
            <div className="space-y-4">
              <div>
                <select 
                  className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-500 outline-none font-semibold text-slate-700"
                  value={selectedCustomerId}
                  onChange={e => setSelectedCustomerId(e.target.value)}
                >
                  <option value="">-- Dooro Macmiil --</option>
                  {customers.map(c => (
                    <option key={c.id} value={c.id}>{c.name} ({c.phone})</option>
                  ))}
                </select>
              </div>

              {selectedCustomer && (
                <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100 animate-fade-in">
                  <p className="text-xs font-bold text-blue-600 uppercase mb-1">Xogta Macmiilka</p>
                  <p className="font-bold text-slate-800">{selectedCustomer.name}</p>
                  <p className="text-sm text-slate-500">{selectedCustomer.phone}</p>
                  <div className="mt-2">
                    <span className="bg-blue-600 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">{selectedCustomer.category}</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="bg-[#001f3f] p-6 rounded-2xl shadow-lg text-white space-y-4">
            <h3 className="font-bold flex items-center text-orange-400">
              <i className="fa-solid fa-bolt mr-2"></i>
              Adeegyada Degdega ah
            </h3>
            <p className="text-xs text-slate-300">Guji mid ka mid ah si aad ugu shubto:</p>
            <div className="grid grid-cols-2 gap-3">
              {dataBundles.map((bundle) => (
                <button
                  key={bundle.size}
                  onClick={() => handleQuickData(bundle.size)}
                  className="bg-slate-800 hover:bg-orange-500 p-3 rounded-xl border border-slate-700 transition-all text-sm font-bold flex flex-col items-center group"
                >
                  <i className="fa-solid fa-wifi mb-1 group-hover:scale-110 transition-transform"></i>
                  {bundle.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col min-h-[400px]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-gray-800 text-lg">Qorista Fariinta</h3>
              <div className="flex bg-gray-100 p-1 rounded-xl">
                {(['SMS', 'Email', 'Notification'] as const).map(type => (
                  <button
                    key={type}
                    onClick={() => setMsgType(type)}
                    className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      msgType === type 
                        ? 'bg-white text-[#001f3f] shadow-sm' 
                        : 'text-gray-400 hover:text-gray-600'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <textarea 
              className="flex-1 w-full p-6 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-500 outline-none resize-none font-medium text-slate-700 leading-relaxed"
              placeholder="Halkan ku qor fariinta ama isticmaal adeegyada degdega ah..."
              value={message}
              onChange={e => setMessage(e.target.value)}
            />

            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="relative flex-1 w-full">
                  <input 
                    className="w-full pl-4 pr-12 py-3 bg-blue-50 border border-blue-100 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none text-sm"
                    placeholder="Weydii AI fariin gaar ah..."
                    value={aiPrompt}
                    onChange={e => setAiPrompt(e.target.value)}
                  />
                  <button 
                    onClick={handleGenerate}
                    disabled={isGenerating || !selectedCustomerId || !aiPrompt}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-blue-600 hover:text-blue-800 disabled:opacity-30"
                  >
                    {isGenerating ? <i className="fa-solid fa-spinner fa-spin"></i> : <i className="fa-solid fa-wand-magic-sparkles"></i>}
                  </button>
                </div>
                <button 
                  onClick={handleSend}
                  disabled={isSending || !message || !selectedCustomerId}
                  className="w-full md:w-auto bg-[#FF851B] text-white px-12 py-3 rounded-2xl font-bold hover:bg-orange-600 disabled:opacity-50 flex items-center justify-center transition-all transform active:scale-95 shadow-lg shadow-orange-500/20"
                >
                  {isSending ? (
                    <i className="fa-solid fa-spinner fa-spin mr-2"></i>
                  ) : (
                    <i className="fa-solid fa-paper-plane mr-2"></i>
                  )}
                  DIR HADDA
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h4 className="font-bold text-gray-400 text-xs uppercase tracking-widest mb-6">Muuqaalka Taleefanka Macmiilka</h4>
            <div className="flex justify-center">
              <div className="w-full max-w-[300px] bg-slate-100 rounded-[3rem] p-4 border-[10px] border-slate-900 shadow-2xl relative">
                <div className="bg-white rounded-3xl h-[400px] overflow-hidden flex flex-col">
                  <div className="bg-slate-100 p-3 text-center border-b border-gray-200">
                    <div className="h-2 w-12 bg-gray-300 rounded-full mx-auto mb-2"></div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase">Haldhaa Service</p>
                  </div>
                  <div className="flex-1 p-4 overflow-y-auto bg-gray-50 flex flex-col">
                    <div className="mt-auto">
                      {message ? (
                        <div className="bg-[#001f3f] text-white p-3 rounded-2xl rounded-bl-none max-w-[90%] text-xs shadow-md animate-slide-up">
                          {message}
                          <p className="text-[8px] text-slate-400 mt-1 text-right">{new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
                        </div>
                      ) : (
                        <div className="text-center mt-20">
                          <i className="fa-solid fa-message text-slate-200 text-4xl mb-2"></i>
                          <p className="text-[10px] text-slate-400 italic">Sugaya fariintaada...</p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="p-3 bg-white border-t border-gray-100 flex items-center space-x-2">
                    <div className="flex-1 h-6 bg-gray-100 rounded-full"></div>
                    <div className="h-6 w-6 bg-blue-500 rounded-full"></div>
                  </div>
                </div>
                <div className="h-1 w-1/3 bg-slate-900 absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendMessage;
