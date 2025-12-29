


import React, { useState } from 'react';
import { useGetAllUsersAdminQuery, useUpdateReferralByAdminMutation } from '../../redux/api/userApi';
import toast from 'react-hot-toast';

const ReferralManagement = () => {
  // API-dan məlumatların çəkilməsi
  const { data, isLoading, refetch } = useGetAllUsersAdminQuery();
  const [updateReferral, { isLoading: isUpdating }] = useUpdateReferralByAdminMutation();

  // Lokal state-lər (Hər istifadəçi üçün ayrıca idarə olunur)
  const [amounts, setAmounts] = useState({});
  const [statuses, setStatuses] = useState({});

  const handleInputChange = (userId, value) => {
    setAmounts((prev) => ({ ...prev, [userId]: value }));
  };

  const handleStatusChange = (userId, value) => {
    setStatuses((prev) => ({ ...prev, [userId]: value }));
  };

  const handleUpdate = async (userId) => {
    const amount = amounts[userId] || 0;
    const status = statuses[userId];

    // Əgər heç bir dəyişiklik edilməyibsə sorğu göndərməyə ehtiyac yoxdur
    if (!amounts[userId] && !statuses[userId]) {
      toast.error("Heç bir dəyişiklik edilməyib");
      return;
    }

    try {
      await updateReferral({ userId, amount, status }).unwrap();
      toast.success("Məlumatlar uğurla yeniləndi!");
      
      // ✅ Uğurlu əməliyyatdan sonra inputu sıfırlayırıq
      setAmounts((prev) => ({ ...prev, [userId]: "" }));
      
      refetch(); // Cədvəli yeniləyirik
    } catch (error) {
      toast.error(error?.data?.message || "Xəta baş verdi");
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8">
      {/* Üst Başlıq və Məlumat */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Referal İdarəetmə Paneli</h2>
          <p className="text-slate-500 mt-1 font-medium">İstifadəçi balanslarını və statuslarını buradan tənzimləyin.</p>
        </div>
        <div className="inline-flex items-center bg-indigo-50 border border-indigo-100 px-4 py-2 rounded-2xl shadow-sm">
          <span className="text-indigo-600 text-sm font-semibold mr-2">Cəmi İstifadəçi:</span>
          <span className="bg-indigo-600 text-white text-xs font-bold px-2.5 py-1 rounded-lg">
            {data?.users?.length}
          </span>
        </div>
      </div>

      {/* Cədvəl Konteyneri */}
      <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-200">
                <th className="p-5 text-xs font-bold text-slate-500 uppercase tracking-widest">İstifadəçi</th>
                <th className="p-5 text-xs font-bold text-slate-500 uppercase tracking-widest">Referal Kodu</th>
                <th className="p-5 text-xs font-bold text-slate-500 uppercase tracking-widest">Balans</th>
                <th className="p-5 text-xs font-bold text-slate-500 uppercase tracking-widest">Status</th>
                <th className="p-5 text-xs font-bold text-slate-500 uppercase tracking-widest">Məbləğ (+/-)</th>
                <th className="p-5 text-xs font-bold text-slate-500 uppercase tracking-widest text-right">Əməliyyat</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {data?.users?.map((user) => (
                <tr key={user._id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="p-5">
                    <div className="font-bold text-slate-800">{user.name}</div>
                    <div className="text-xs text-slate-400 font-normal">{user.email}</div>
                  </td>
                  <td className="p-5 font-mono text-sm">
                    <span className="text-indigo-600 bg-indigo-50/50 px-2 py-1 rounded-md border border-indigo-100/50">
                      {user.myReferralCode}
                    </span>
                  </td>
                  <td className="p-5 font-bold text-slate-700">
                    {user.balance?.toFixed(2)} <span className="text-[10px] text-slate-400 ml-0.5">AZN</span>
                  </td>
                  <td className="p-5">
                    <select
                      defaultValue={user.referralStatus}
                      onChange={(e) => handleStatusChange(user._id, e.target.value)}
                      className="bg-white border border-slate-200 text-slate-700 text-sm rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2 outline-none transition-all cursor-pointer hover:border-slate-300"
                    >
                      <option value="Yeni">Yeni</option>
                      <option value="Aktiv">Aktiv</option>
                      <option value="Lider">Lider</option>
                      <option value="VIP">VIP</option>
                    </select>
                  </td>
                  <td className="p-5">
                    <input
                      type="number"
                      placeholder="0.00"
                      value={amounts[user._id] || ""}
                      className="w-28 border border-slate-200 rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-all placeholder:text-slate-300 hover:border-slate-300"
                      onChange={(e) => handleInputChange(user._id, e.target.value)}
                    />
                  </td>
                  <td className="p-5 text-right">
                    <button
                      disabled={isUpdating}
                      onClick={() => handleUpdate(user._id)}
                      className="inline-flex items-center justify-center bg-slate-900 text-white w-10 h-10 rounded-xl hover:bg-indigo-600 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-slate-200/50"
                      title="Yadda saxla"
                    >
                      {isUpdating ? (
                        <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                      ) : (
                        <span className="text-xl font-bold">✓</span>
                      )}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReferralManagement;








