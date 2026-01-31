
import React, { useState } from 'react';
import { Customer } from '../types';

interface CustomersListProps {
  customers: Customer[];
  setCustomers: React.Dispatch<React.SetStateAction<Customer[]>>;
}

const CustomersList: React.FC<CustomersListProps> = ({ customers, setCustomers }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isAdding, setIsAdding] = useState(false);
  const [newCustomer, setNewCustomer] = useState({ name: '', email: '', phone: '', category: 'Regular' });

  const filtered = customers.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    c.phone.includes(searchTerm)
  );

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    // Improved ID generation to prevent collisions
    const id = Date.now().toString();
    setCustomers([...customers, { ...newCustomer, id, lastSent: 'Hadda' }]);
    setIsAdding(false);
    setNewCustomer({ name: '', email: '', phone: '', category: 'Regular' });
  };

  const handleDelete = (id: string) => {
    if (confirm('Ma hubaal inaad tirayso macmiilkan?')) {
      setCustomers(customers.filter(c => c.id !== id));
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="relative flex-1">
          <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
          <input 
            type="text"
            placeholder="Ka raadi magac ama taleefan..."
            className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button 
          onClick={() => setIsAdding(!isAdding)}
          className={`${isAdding ? 'bg-gray-100 text-gray-600' : 'bg-[#FF851B] text-white shadow-lg shadow-orange-500/20 hover:bg-orange-600'} px-6 py-3 rounded-2xl font-bold transition-all flex items-center justify-center`}
        >
          <i className={`fa-solid ${isAdding ? 'fa-xmark' : 'fa-plus'} mr-2`}></i>
          {isAdding ? 'Jooji' : 'Macmiil Cusub'}
        </button>
      </div>

      {isAdding && (
        <div className="p-6 bg-orange-50 border-b border-orange-100 animate-fade-in">
          <form onSubmit={handleAdd} className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-orange-600 uppercase ml-1">Magaca Buuxa</label>
              <input 
                required
                placeholder="Tusaale: Dubad Mohamed"
                className="w-full p-2.5 border border-orange-200 rounded-xl bg-white focus:ring-2 focus:ring-orange-500 outline-none"
                value={newCustomer.name}
                onChange={e => setNewCustomer({...newCustomer, name: e.target.value})}
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-orange-600 uppercase ml-1">Emailka</label>
              <input 
                required
                type="email"
                placeholder="dubad@email.com"
                className="w-full p-2.5 border border-orange-200 rounded-xl bg-white focus:ring-2 focus:ring-orange-500 outline-none"
                value={newCustomer.email}
                onChange={e => setNewCustomer({...newCustomer, email: e.target.value})}
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-orange-600 uppercase ml-1">Taleefanka</label>
              <input 
                required
                placeholder="252..."
                className="w-full p-2.5 border border-orange-200 rounded-xl bg-white focus:ring-2 focus:ring-orange-500 outline-none"
                value={newCustomer.phone}
                onChange={e => setNewCustomer({...newCustomer, phone: e.target.value})}
              />
            </div>
            <div className="flex flex-col justify-end space-y-1">
              <label className="text-[10px] font-bold text-orange-600 uppercase ml-1">Nooca</label>
              <div className="flex space-x-2">
                <select 
                  className="p-2.5 border border-orange-200 rounded-xl bg-white flex-1 focus:ring-2 focus:ring-orange-500 outline-none"
                  value={newCustomer.category}
                  onChange={e => setNewCustomer({...newCustomer, category: e.target.value})}
                >
                  <option value="Regular">Regular</option>
                  <option value="VIP">VIP</option>
                  <option value="New">Cusub</option>
                </select>
                <button type="submit" className="bg-[#001f3f] text-white px-5 rounded-xl font-bold hover:bg-slate-800 transition-colors shadow-lg">Kaydi</button>
              </div>
            </div>
          </form>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 text-left">
            <tr>
              <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest">Macmiilka</th>
              <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest">Xiriirka</th>
              <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest">Nooca</th>
              <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest">Xaaladda</th>
              <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest text-right">Maamul</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filtered.length > 0 ? filtered.map((customer) => (
              <tr key={customer.id} className="hover:bg-slate-50 transition-colors group">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-[#001f3f] font-bold mr-3 border border-white shadow-sm group-hover:scale-110 transition-transform">
                      {customer.name.charAt(0)}
                    </div>
                    <span className="font-bold text-slate-800">{customer.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm">
                    <p className="text-slate-900 font-medium">{customer.phone}</p>
                    <p className="text-slate-400 text-xs">{customer.email}</p>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider ${
                    customer.category === 'VIP' ? 'bg-orange-100 text-orange-600' : 
                    customer.category === 'New' ? 'bg-green-100 text-green-600' :
                    'bg-blue-100 text-blue-600'
                  }`}>
                    {customer.category}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-xs text-slate-400 font-medium">
                  {customer.lastSent}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <div className="flex items-center justify-end space-x-2">
                    <button className="p-2 text-slate-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors">
                      <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button 
                      onClick={() => handleDelete(customer.id)}
                      className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </td>
              </tr>
            )) : (
              <tr>
                <td colSpan={5} className="px-6 py-12 text-center text-slate-400 italic">
                  Macmiilka aad raadinayso lama helin.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomersList;
