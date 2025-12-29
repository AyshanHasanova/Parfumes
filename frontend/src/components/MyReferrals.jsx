import React from 'react';
import { useGetMyReferralsQuery, useGetUserProfileQuery } from '../redux/api/userApi';
import toast from 'react-hot-toast';

const MyReferrals = () => {
  // Profil məlumatlarını çəkirik
  const { data: userData, isLoading: userLoading } = useGetUserProfileQuery();
  
  // Referalları çəkirik
  const { data: referralData, isLoading: referralsLoading } = useGetMyReferralsQuery();

  // İstifadəçi obyektini və kodu təhlükəsiz şəkildə götürürük
  const user = userData?.user;
  const myCode = user?.myReferralCode;

  // Linki yalnız kod varsa yaradırıq, yoxdursa "Yüklenir..." mesajı üçün hazırlıq
  const referralLink = myCode 
    ? `${window.location.origin}/register?ref=${myCode}` 
    : "Referal kodunuz hazırlanır...";

  const copyToClipboard = () => {
    if (!myCode) {
      toast.error("Kod hələ hazır deyil!");
      return;
    }
    navigator.clipboard.writeText(referralLink);
    toast.success("Link kopyalandı!");
  };

  if (userLoading || referralsLoading) {
    return <div className="p-10 text-center">Yüklənir...</div>;
  }

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Mənim Şəbəkəm</h2>
      
      <div className="bg-green-50 p-6 rounded-lg mb-8 border border-green-200">
        <p className="text-sm text-green-700 font-medium mb-2">Sizin Referal Linkiniz:</p>
        <div className="flex items-center gap-2">
          <input 
            readOnly 
            value={referralLink} 
            className="w-full p-2 border rounded bg-white text-gray-600 outline-none"
          />
          <button 
            onClick={copyToClipboard}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Kopyala
          </button>
        </div>
        {/* Debug üçün kodu burada göstəririk */}
        <p className="text-xs mt-2 text-gray-500">
          Sizin kodunuz: <span className="font-bold text-green-700">{myCode || "Tapılmadı"}</span>
        </p>
      </div>

      <h3 className="text-xl font-semibold mb-3 text-gray-700">
        Dəvət etdiyim şəxslər ({referralData?.count || 0})
      </h3>
      
      <div className="overflow-x-auto shadow-sm rounded-lg border">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="p-3">Ad</th>
              <th className="p-3">Email</th>
              <th className="p-3">Qeydiyyat Tarixi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {referralData?.referrals?.length > 0 ? (
              referralData.referrals.map((ref) => (
                <tr key={ref._id} className="hover:bg-gray-50 transition">
                  <td className="p-3 font-medium text-gray-800">{ref.name}</td>
                  <td className="p-3 text-gray-600">{ref.email}</td>
                  <td className="p-3 text-gray-500">
                    {new Date(ref.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="p-10 text-center text-gray-400 italic">
                  Hələ ki, heç kimi dəvət etməmisiniz.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReferrals;