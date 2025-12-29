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

// Chart.js komponentlərini qeydiyyatdan keçiririk
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

const ProductList = () => {
  const navigate = useNavigate()
  const { data, isLoading, isError } = useGetProductsQuery()
  const [deleteProduct] = useDeleteProductMutation()

  const handleDelete = id => {
    confirmAlert({
      title: 'Silmək istədiyinizdən əminsiniz?',
      message: 'Bu əməliyyat geri alınmaz.',
      buttons: [
        {
          label: 'Bəli',
          onClick: async () => {
            try {
              await deleteProduct(id).unwrap()
              alert('Məhsul silindi')
            } catch {
              alert('Xəta baş verdi')
            }
          },
        },
        { label: 'Xeyr' },
      ],
    })
  }

  // Məhsul məlumatlarını qrafik üçün hazırlayırıq
  const chartData = {
    labels: data?.products.map(p => p.name) || [],
    datasets: [
      {
        label: 'Mövcud Stok',
        data: data?.products.map(p => p.stock) || [],
        backgroundColor: 'rgba(34, 197, 94, 0.7)', // Yaşıl rəngin açıq tonu
        borderColor: 'rgba(34, 197, 94, 1)', // Yaşıl rəngin tünd tonu
        borderWidth: 1,
      },
    ],
  }

  // Qrafik üçün görünüş parametrləri
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Məhsulların Stok Vəziyyəti',
      },
    },
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
      {/* Sol tərəf — Statistika */}
      <div className="col-span-1 bg-white p-4 shadow rounded">
        <h2 className="text-xl font-semibold mb-4">Statistika</h2>
        {isLoading ? (
          <p>Yüklənir...</p>
        ) : isError ? (
          <p className="text-red-500">Xəta baş verdi!</p>
        ) : (
          <Bar data={chartData} options={options} />
        )}
      </div>

      {/* Sağ tərəf — Məhsul siyahısı */}
      <div className="col-span-3 bg-white p-4 shadow rounded">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Məhsul Siyahısı</h2>
          <button
            onClick={() => navigate('/admin/product/new')}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
          >
            Yeni Məhsul
          </button>
        </div>

        {isLoading ? (
          <p>Yüklənir...</p>
        ) : isError ? (
          <p className="text-red-500">Xəta baş verdi!</p>
        ) : (
          <div className="space-y-4">
            {data.products.map(prod => (
              <div key={prod._id} className="flex items-center justify-between border p-4 rounded">
                <div className="flex items-center gap-4">
                  <img
                    src={prod.images[0]?.url}
                    alt={prod.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <p className="font-medium">{prod.name}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => navigate(`/admin/product/edit/${prod._id}`)}
                    className="bg-green-800 hover:bg-blue-600 text-white px-4 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(prod._id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
                  >
                    Sil
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductList