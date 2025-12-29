import React, { useState } from 'react';
import { useGetMyNetworkTreeQuery, useGetUserProfileQuery } from '../redux/api/userApi';
import MyReferrals from './MyReferrals';
import toast from 'react-hot-toast';

const MyTree = () => {
    const [view, setView] = useState('tree'); 
    const { data: profileData, isLoading: profileLoading } = useGetUserProfileQuery();
    const { data: treeData, isLoading: treeLoading } = useGetMyNetworkTreeQuery();
    
    const user = profileData?.user;
    const tree = treeData?.tree;

    // DATA GƏLƏNƏ QƏDƏR GÖZLƏYİRİK
    const referralLink = user?.myReferralCode 
        ? `${window.location.origin}/register?ref=${user.myReferralCode}` 
        : "Link yaradılır...";

    const copyLink = () => {
        if(!user?.myReferralCode) return toast.error("Kod yüklənir, gözləyin...");
        navigator.clipboard.writeText(referralLink);
        toast.success("Referal linkiniz kopyalandı!");
    };

    if (profileLoading || treeLoading) return <div className="p-10 text-center font-bold text-indigo-600">Məlumatlar gətirilir...</div>;

    return (
        <div className="container mx-auto p-4 md:p-10">
            {/* STATİSTİKA KARTLARI */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="bg-gradient-to-r from-blue-700 to-indigo-800 p-6 rounded-3xl text-white shadow-xl relative overflow-hidden">
                    <p className="text-xs uppercase opacity-70 font-bold">Cari Balansım</p>
                    <h2 className="text-4xl font-black mt-2">{user?.balance?.toFixed(2) || "0.00"} AZN</h2>
                </div>
                
                <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 flex flex-col justify-center items-center text-center">
                    <p className="text-xs uppercase text-gray-400 font-bold mb-2">Profil Statusum</p>
                    <span className={`px-6 py-2 rounded-full text-sm font-black uppercase shadow-sm
                        ${user?.referralStatus === 'Aktiv' ? 'bg-yellow-400 text-white animate-bounce' : 
                          user?.referralStatus === 'Lider' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-500'}`}>
                        {user?.referralStatus || "Yeni"}
                    </span>
                </div>

                <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100">
                    <p className="text-xs uppercase text-gray-400 font-bold mb-2">Sizin Referal Kodunuz:</p>
                    <div className="flex items-center gap-2">
                        <input readOnly value={user?.myReferralCode || "Yüklənir..."} className="text-sm border p-2 rounded-lg w-full bg-gray-50 font-mono font-bold text-indigo-700" />
                        <button onClick={copyLink} className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-xs transition">
                            Kopyala
                        </button>
                    </div>
                </div>
            </div>

            {/* GÖRÜNÜŞ SEÇİMİ VƏ AĞAC (BURADAN AŞAĞISI SƏNİN MÖVCUD KODUNDUR) */}
            <div className="flex justify-center mb-10">
                <div className="bg-gray-200 p-1.5 rounded-2xl flex gap-2">
                    <button onClick={() => setView('tree')} className={`px-8 py-2.5 rounded-xl text-sm font-bold transition-all ${view === 'tree' ? 'bg-white text-indigo-600 shadow-md' : 'text-gray-500 hover:text-gray-700'}`}>
                        Şəbəkə Ağacı
                    </button>
                    <button onClick={() => setView('table')} className={`px-8 py-2.5 rounded-xl text-sm font-bold transition-all ${view === 'table' ? 'bg-white text-indigo-600 shadow-md' : 'text-gray-500 hover:text-gray-700'}`}>
                        Siyahı Görünüşü
                    </button>
                </div>
            </div>

            <div className="bg-gray-50 p-10 rounded-[40px] border-2 border-white shadow-inner min-h-[500px]">
                {view === 'tree' ? (
                    <div className="flex flex-col items-center">
                        <div className="relative flex flex-col items-center">
                            <div className="bg-white border-4 border-indigo-600 p-5 rounded-3xl shadow-2xl w-52 text-center transform hover:scale-105 transition">
                                <div className="w-16 h-16 bg-indigo-100 rounded-full mx-auto mb-3 flex items-center justify-center text-2xl">👤</div>
                                <p className="font-black text-gray-800 uppercase">Mən (Siz)</p>
                                <p className="text-[10px] text-indigo-600 font-bold">{user?.email}</p>
                            </div>

                            {tree?.children?.length > 0 && (
                                <>
                                    <div className="w-1 h-16 bg-indigo-200"></div>
                                    <div className="flex gap-10 items-start relative">
                                        {tree.children.map((child, index) => (
                                            <div key={index} className="flex flex-col items-center">
                                                <div className="w-1 h-10 bg-indigo-200"></div>
                                                <div className={`p-4 rounded-2xl shadow-lg w-44 text-center border-2 transition-all duration-500
                                                    ${child.attributes.status === 'Aktiv' ? 'border-yellow-400 bg-yellow-50 scale-110' : 'border-white bg-white'}`}>
                                                    <p className="font-bold text-gray-700">{child.name}</p>
                                                    <p className="text-[9px] text-gray-400 mb-2">{child.attributes.email}</p>
                                                    <span className={`text-[9px] px-2 py-1 rounded-md font-bold uppercase
                                                        ${child.attributes.status === 'Aktiv' ? 'bg-yellow-400 text-white' : 'bg-gray-100 text-gray-400'}`}>
                                                        {child.attributes.status}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                ) : (
                    <MyReferrals />
                )}
            </div>
        </div>
    );
};

export default MyTree;