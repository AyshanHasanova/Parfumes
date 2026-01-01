import React, { useState } from 'react';
import { useGetAllUsersAdminQuery, useUpdateReferralByAdminMutation } from '../../redux/api/userApi';
import toast from 'react-hot-toast';

const ReferralManagement = () => {
  const { data, isLoading, refetch } = useGetAllUsersAdminQuery();
  const [updateReferral, { isLoading: isUpdating }] = useUpdateReferralByAdminMutation();

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

    if (!amounts[userId] && !statuses[userId]) {
      toast.error("Heç bir dəyişiklik edilməyib");
      return;
    }

    try {
      await updateReferral({ userId, amount, status }).unwrap();
      toast.success("Məlumatlar uğurla yeniləndi!");
      setAmounts((prev) => ({ ...prev, [userId]: "" }));
      refetch();
    } catch (error) {
      toast.error(error?.data?.message || "Xəta baş verdi");
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 bg-gray-50 min-h-screen">
      {/* Üst Başlıq */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Referal İdarəetmə</h2>
          <p className="text-gray-500 text-sm md:text-base">İstifadəçi balanslarını yaşıl enerji ilə tənzimləyin.</p>
        </div>
        <div className="bg-green-100 text-green-700 px-5 py-2 rounded-2xl font-bold flex items-center shadow-sm w-fit">
          <span className="mr-2">Cəmi:</span>
          <span className="text-lg">{data?.users?.length} nəfər</span>
        </div>
      </div>

      {/* DESKTOP CƏDVƏL (Yalnız böyük ekranlarda görünür) */}
      <div className="hidden md:block bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="p-5 text-sm font-bold text-gray-600">İstifadəçi</th>
              <th className="p-5 text-sm font-bold text-gray-600">Kod</th>
              <th className="p-5 text-sm font-bold text-gray-600">Balans</th>
              <th className="p-5 text-sm font-bold text-gray-600">Status</th>
              <th className="p-5 text-sm font-bold text-gray-600">Məbləğ</th>
              <th className="p-5 text-sm font-bold text-gray-600 text-right">Təsdiq</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {data?.users?.map((user) => (
              <tr key={user._id} className="hover:bg-green-50/30 transition-colors">
                <td className="p-5">
                  <div className="font-bold text-gray-800">{user.name}</div>
                  <div className="text-xs text-gray-400">{user.email}</div>
                </td>
                <td className="p-5">
                  <span className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">{user.myReferralCode}</span>
                </td>
                <td className="p-5 font-bold text-green-600">{user.balance?.toFixed(2)} AZN</td>
                <td className="p-5">
                  <select
                    defaultValue={user.referralStatus}
                    onChange={(e) => handleStatusChange(user._id, e.target.value)}
                    className="border border-gray-200 rounded-lg p-2 text-sm focus:ring-2 focus:ring-green-500 outline-none"
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
                    onChange={(e) => handleInputChange(user._id, e.target.value)}
                    className="w-24 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-500 outline-none"
                  />
                </td>
                <td className="p-5 text-right">
                  <button
                    onClick={() => handleUpdate(user._id)}
                    disabled={isUpdating}
                    className="bg-green-600 text-white w-10 h-10 rounded-xl hover:bg-green-700 transition shadow-md shadow-green-100 flex items-center justify-center ml-auto"
                  >
                    {isUpdating ? "..." : "✓"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MOBİL KARTLAR (Yalnız telefonlarda görünür) */}
      <div className="md:hidden space-y-4">
        {data?.users?.map((user) => (
          <div key={user._id} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-bold text-gray-800">{user.name}</h3>
                <p className="text-xs text-gray-400">{user.email}</p>
              </div>
              <span className="bg-green-50 text-green-600 text-xs font-bold px-2 py-1 rounded">
                {user.balance?.toFixed(2)} AZN
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div>
                <label className="text-[10px] text-gray-400 uppercase font-bold">Status</label>
                <select
                  defaultValue={user.referralStatus}
                  onChange={(e) => handleStatusChange(user._id, e.target.value)}
                  className="w-full border border-gray-100 rounded-lg p-2 text-sm mt-1 bg-gray-50"
                >
                  <option value="Yeni">Yeni</option>
                  <option value="Aktiv">Aktiv</option>
                  <option value="Lider">Lider</option>
                  <option value="VIP">VIP</option>
                </select>
              </div>
              <div>
                <label className="text-[10px] text-gray-400 uppercase font-bold">Məbləğ (+/-)</label>
                <input
                  type="number"
                  placeholder="0.00"
                  value={amounts[user._id] || ""}
                  onChange={(e) => handleInputChange(user._id, e.target.value)}
                  className="w-full border border-gray-100 rounded-lg p-2 text-sm mt-1 bg-gray-50"
                />
              </div>
            </div>

            <button
              onClick={() => handleUpdate(user._id)}
              disabled={isUpdating}
              className="w-full bg-green-600 text-white py-3 rounded-xl font-bold active:scale-95 transition"
            >
              {isUpdating ? "Yenilənir..." : "Məlumatı Saxla"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReferralManagement;








