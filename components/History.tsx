
import React from 'react';
import { MessageLog } from '../types';

interface HistoryProps {
  logs: MessageLog[];
}

const History: React.FC<HistoryProps> = ({ logs }) => {
  if (logs.length === 0) {
    return (
      <div className="bg-white rounded-2xl p-12 text-center border border-dashed border-gray-300">
        <div className="bg-gray-50 h-20 w-20 rounded-full flex items-center justify-center mx-auto mb-4">
          <i className="fa-solid fa-clock-rotate-left text-3xl text-gray-300"></i>
        </div>
        <h3 className="text-xl font-bold text-gray-800">Ma jiraan fariimo la diray</h3>
        <p className="text-gray-500 mt-2">Markaad fariin dirto, halkan ayaad ka arki doontaa taariikhda.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-100 flex justify-between items-center">
        <h3 className="font-bold text-gray-800">Fariimihii ugu dambeeyey</h3>
        <button className="text-orange-500 text-sm font-bold flex items-center">
          <i className="fa-solid fa-download mr-1"></i> Soo deji CSV
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 text-left">
            <tr>
              <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Macmiilka</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Nooca</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Dulucda</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Wakhtiga</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {logs.map((log) => (
              <tr key={log.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 font-medium text-gray-900">{log.customerName}</td>
                <td className="px-6 py-4">
                  <span className="flex items-center text-xs text-gray-600">
                    <i className={`fa-solid ${log.type === 'SMS' ? 'fa-comment-sms' : log.type === 'Email' ? 'fa-envelope' : 'fa-bell'} mr-2`}></i>
                    {log.type}
                  </span>
                </td>
                <td className="px-6 py-4 max-w-xs truncate text-sm text-gray-500">{log.content}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{log.timestamp}</td>
                <td className="px-6 py-4">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">
                    Loo diray
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default History;
