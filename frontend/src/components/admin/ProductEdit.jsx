import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
 useGetProductsDetailsQuery,
 useUpdateProductMutation
} from '../../redux/api/productsApi'
import { categories } from '../../constants/categories'


const ProductEdit = () => {
 const { id } = useParams()
 const navigate = useNavigate()


 const { data, isLoading, isError } = useGetProductsDetailsQuery(id)
 const [updateProduct, { isLoading: updating }] = useUpdateProductMutation()


 const [form, setForm] = useState({
   name: '',
   price: '',
   description: '',
   category: '',
   seller: '',
   stock: '',
   image: null
 })
 const [preview, setPreview] = useState(null)


 useEffect(() => {
   if (!isLoading && data?.product) {
     const p = data.product
     setForm({
       name: p.name || '',
       price: p.price || '',
       description: p.description || '',
       category: p.category || '',
       seller: p.seller || '',
       stock: p.stock || '',
       image: null
     })
     if (p.images?.length > 0) {
       setPreview(p.images[0].url)
     }
   }
 }, [isLoading, data])


 const onChange = e => {
   const { name, value, files } = e.target
   if (name === 'image' && files?.length > 0) {
     setForm(prev => ({ ...prev, image: files[0] }))
     setPreview(URL.createObjectURL(files[0]))
   } else {
     setForm(prev => ({ ...prev, [name]: value }))
   }
 }


 const onSubmit = async e => {
   e.preventDefault()
   const formData = new FormData()
   for (const [key, value] of Object.entries(form)) {
     if (value !== null) {
       formData.append(key, value)
     }
   }


   try {
     await updateProduct({ id, formData }).unwrap()
     alert('Məhsul güncəlləndi!')
     navigate('/admin/dashboard')
   } catch (err) {
     console.error('Update error:', err)
     alert('Xəta baş verdi!')
   }
 }


 if (isLoading) return <p>Yüklənir...</p>
 if (isError) return <p>Xəta baş verdi. Məlumat tapılmadı.</p>


 return (
   <form onSubmit={onSubmit} className="max-w-md mx-auto p-6 bg-white shadow rounded space-y-4">
     <h2 className="text-2xl font-semibold mb-4">Məhsulu redaktə et</h2>


     {['name', 'price', 'description', 'seller', 'stock'].map(field => (
       <div key={field}>
         <label className="block mb-1 font-semibold capitalize">{field}</label>
         <input
           name={field}
           type={field === 'price' || field === 'stock' ? 'number' : 'text'}
           value={form[field]}
           onChange={onChange}
           className="w-full border p-2 rounded"
           required
         />
       </div>
     ))}


     <div>
       <label className="block mb-1 font-semibold">Kateqoriya</label>
       <select
         name="category"
         value={form.category}
         onChange={onChange}
         className="w-full border p-2 rounded"
         required
       >
         <option value="">Seçin</option>
         {categories.map(cat => (
           <option key={cat} value={cat}>{cat}</option>
         ))}
       </select>
     </div>


     <div>
       <label className="block mb-1 font-semibold">Şəkil</label>
       <input
         type="file"
         name="image"
         accept="image/*"
         onChange={onChange}
       />
       {preview && (
         <img
           src={preview}
           alt="Preview"
           className="mt-2 w-32 h-32 object-cover rounded"
         />
       )}
     </div>


     <button
       type="submit"
       disabled={updating}
       className="bg-green-600 hover:bg-blue-700 text-white px-4 py-2 rounded disabled:opacity-50"
     >
       {updating ? 'Yüklənir...' : 'Yenilə'}
     </button>
   </form>
 )
}


export default ProductEdit