// import { useNavigate } from 'react-router-dom'
// import { useGetProductsQuery, useDeleteProductMutation } from '../../redux/api/productsApi'
// import { confirmAlert } from 'react-confirm-alert'
// import 'react-confirm-alert/src/react-confirm-alert.css'
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js'
// import { Bar } from 'react-chartjs-2'

// // Chart.js komponentlərini qeydiyyatdan keçiririk
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// )

// const ProductList = () => {
//   const navigate = useNavigate()
//   const { data, isLoading, isError } = useGetProductsQuery()
//   const [deleteProduct] = useDeleteProductMutation()

//   const handleDelete = id => {
//     confirmAlert({
//       title: 'Silmək istədiyinizdən əminsiniz?',
//       message: 'Bu əməliyyat geri alınmaz.',
//       buttons: [
//         {
//           label: 'Bəli',
//           onClick: async () => {
//             try {
//               await deleteProduct(id).unwrap()
//               alert('Məhsul silindi')
//             } catch {
//               alert('Xəta baş verdi')
//             }
//           },
//         },
//         { label: 'Xeyr' },
//       ],
//     })
//   }

//   // Məhsul məlumatlarını qrafik üçün hazırlayırıq
//   const chartData = {
//     labels: data?.products.map(p => p.name) || [],
//     datasets: [
//       {
//         label: 'Mövcud Stok',
//         data: data?.products.map(p => p.stock) || [],
//         backgroundColor: 'rgba(34, 197, 94, 0.7)', // Yaşıl rəngin açıq tonu
//         borderColor: 'rgba(34, 197, 94, 1)', // Yaşıl rəngin tünd tonu
//         borderWidth: 1,
//       },
//     ],
//   }

//   // Qrafik üçün görünüş parametrləri
//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top',
//       },
//       title: {
//         display: true,
//         text: 'Məhsulların Stok Vəziyyəti',
//       },
//     },
//   }

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
//       {/* Sol tərəf — Statistika */}
//       <div className="col-span-1 bg-white p-4 shadow rounded">
//         <h2 className="text-xl font-semibold mb-4">Statistika</h2>
//         {isLoading ? (
//           <p>Yüklənir...</p>
//         ) : isError ? (
//           <p className="text-red-500">Xəta baş verdi!</p>
//         ) : (
//           <Bar data={chartData} options={options} />
//         )}
//       </div>

//       {/* Sağ tərəf — Məhsul siyahısı */}
//       <div className="col-span-3 bg-white p-4 shadow rounded">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-semibold">Məhsul Siyahısı</h2>
//           <button
//             onClick={() => navigate('/admin/product/new')}
//             className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
//           >
//             Yeni Məhsul
//           </button>
//         </div>

//         {isLoading ? (
//           <p>Yüklənir...</p>
//         ) : isError ? (
//           <p className="text-red-500">Xəta baş verdi!</p>
//         ) : (
//           <div className="space-y-4">
//             {data.products.map(prod => (
//               <div key={prod._id} className="flex items-center justify-between border p-4 rounded">
//                 <div className="flex items-center gap-4">
//                   <img
//                     src={prod.images[0]?.url}
//                     alt={prod.name}
//                     className="w-16 h-16 object-cover rounded"
//                   />
//                   <p className="font-medium">{prod.name}</p>
//                 </div>
//                 <div className="flex gap-2">
//                   <button
//                     onClick={() => navigate(`/admin/product/edit/${prod._id}`)}
//                     className="bg-green-800 hover:bg-blue-600 text-white px-4 py-1 rounded"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => handleDelete(prod._id)}
//                     className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
//                   >
//                     Sil
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// export default ProductList


import { useNavigate } from 'react-router-dom'
import { useGetProductsQuery, useDeleteProductMutation } from '../../redux/api/productsApi'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import toast from 'react-hot-toast' // Daha professional bildirişlər üçün

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const ProductList = () => {
  const navigate = useNavigate()
  const { data, isLoading, isError } = useGetProductsQuery()
  const [deleteProduct] = useDeleteProductMutation()

  const handleDelete = id => {
    confirmAlert({
      title: 'Məhsulu silmək istəyirsiniz?',
      message: 'Bu əməliyyatdan sonra məlumatları geri qaytarmaq mümkün olmayacaq.',
      buttons: [
        {
          label: 'Bəli, Sil',
          onClick: async () => {
            try {
              await deleteProduct(id).unwrap()
              toast.success('Məhsul uğurla silindi')
            } catch {
              toast.error('Xəta baş verdi')
            }
          },
        },
        { label: 'Xeyr' },
      ],
    })
  }

  const chartData = {
    labels: data?.products.map(p => p.name) || [],
    datasets: [
      {
        label: 'Mövcud Stok',
        data: data?.products.map(p => p.stock) || [],
        backgroundColor: 'rgba(22, 163, 74, 0.7)',
        borderColor: 'rgba(22, 163, 74, 1)',
        borderWidth: 2,
        borderRadius: 8,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      title: { display: true, text: 'Məhsulların Stok Vəziyyəti', font: { size: 16 } },
    },
  }

  if (isLoading) return (
    <div className="flex justify-center items-center h-screen">
       <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-600"></div>
    </div>
  )

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 bg-gray-50 min-h-screen">
      
      {/* Üst Başlıq */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Məhsul İdarəetməsi</h2>
          <p className="text-gray-500">Bütün ətirləri və stok vəziyyətini buradan idarə edin.</p>
        </div>
        <button
          onClick={() => navigate('/admin/product/new')}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-bold transition shadow-lg shadow-green-100 flex items-center justify-center gap-2"
        >
          <span>+</span> Yeni Məhsul
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* SOL TƏRƏF — Qrafik (Mobildə Üstdə) */}
        <div className="lg:col-span-1 bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold mb-6 text-gray-700">Stok Analizi</h3>
          <div className="h-64">
            <Bar data={chartData} options={options} />
          </div>
        </div>

        {/* SAĞ TƏRƏF — Məhsul Siyahısı */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-4 px-2">
               <span className="font-bold text-gray-600">Məhsul</span>
               <span className="font-bold text-gray-600">Əməliyyatlar</span>
            </div>

            <div className="space-y-3">
              {data?.products.map(prod => (
                <div key={prod._id} className="group flex items-center justify-between bg-gray-50/50 hover:bg-green-50/50 border border-gray-100 p-3 rounded-2xl transition-all">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                       <img
                        src={prod.images[0]?.url}
                        alt={prod.name}
                        className="w-14 h-14 object-cover rounded-xl shadow-sm"
                       />
                       {prod.stock < 5 && (
                         <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full animate-pulse">
                           Az qalıb
                         </span>
                       )}
                    </div>
                    <div>
                      <p className="font-bold text-gray-800 group-hover:text-green-700 transition">{prod.name}</p>
                      <p className="text-xs text-gray-500">Stok: <span className={prod.stock > 0 ? "font-bold text-gray-700" : "text-red-500 font-bold"}>{prod.stock} ədəd</span></p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => navigate(`/admin/product/edit/${prod._id}`)}
                      className="p-2 bg-white border border-gray-200 text-green-700 rounded-lg hover:bg-green-600 hover:text-white transition shadow-sm"
                      title="Düzəliş et"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleDelete(prod._id)}
                      className="p-2 bg-white border border-gray-200 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition shadow-sm"
                      title="Sil"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProductList