// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// export const productApi = createApi({
//   reducerPath: 'productApi',
//   baseQuery: fetchBaseQuery({ baseUrl: '/api/v1', credentials: 'include' }),
//   tagTypes: ['Products'],
//   endpoints: builder => ({
//     createProduct: builder.mutation({
//       query: formData => ({
//         url: '/admin/product',
//         method: 'POST',
//         body: formData,
//       }),
//       invalidatesTags: ['Products']
//     }),
//     updateProduct: builder.mutation({
//       query: ({ id, formData }) => ({
//         url: `/admin/product/${id}`,
//         method: 'PUT',
//         body: formData,
//       }),
//       invalidatesTags: ['Products']
//     }),
//     deleteProduct: builder.mutation({
//       query: id => ({
//         url: `/admin/product/${id}`,
//         method: 'DELETE',
//       }),
//       invalidatesTags: ['Products']
//     }),
//     getProducts: builder.query({
//       query: () => '/mehsullar',
//       providesTags: ['Products']
//     }),
//     getProductsDetails :builder.query({
//          query: (id) => `/mehsullar/${id}`,
//       providesTags: ['Products']
//     })
//   })
// })

// export const {
//   useCreateProductMutation,
//   useUpdateProductMutation,
//   useDeleteProductMutation,
//   useGetProductsQuery,
//   useGetProductsDetailsQuery
// } = productApi 


import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
  reducerPath: 'productApi',
  // Netlify-da işləməsi üçün mütləq tam URL (https://...) yazılmalıdır
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://parfumes.onrender.com/api/v1', 
    credentials: 'include' 
  }),
  tagTypes: ['Products'],
  endpoints: (builder) => ({
    // Bütün məhsulları gətirmək üçün
    getProducts: builder.query({
      query: () => '/mehsullar',
      providesTags: ['Products']
    }),

    // Məhsulun detallarını gətirmək üçün
    getProductsDetails: builder.query({
      query: (id) => `/mehsullar/${id}`,
      providesTags: ['Products']
    }),

    // Yeni məhsul yaratmaq (Admin)
    createProduct: builder.mutation({
      query: (formData) => ({
        url: '/admin/product',
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: ['Products']
    }),

    // Məhsulu yeniləmək (Admin)
    updateProduct: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/admin/product/${id}`,
        method: 'PUT',
        body: formData,
      }),
      invalidatesTags: ['Products']
    }),

    // Məhsulu silmək (Admin)
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/admin/product/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Products']
    }),
  })
})

export const {
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useGetProductsQuery,
  useGetProductsDetailsQuery
} = productApi