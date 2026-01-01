


// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const userApi = createApi({
//   reducerPath: "userApi",
//   baseQuery: fetchBaseQuery({ 
//     baseUrl: "https://parfumes-1.onrender.com/api/v1", 
//     // BURADAKİ DƏYİŞİKLİK: Tokeni hər sorğuya mütləq əlavə edirik
//     prepareHeaders: (headers) => {
//       const token = localStorage.getItem("token");
//       if (token) {
//         headers.set("Authorization", `Bearer ${token}`);
//       }
//       return headers;
//     },
//     // CORS və Cookie üçün lazım olsa qalsın
//     credentials: "include" 
//   }),
//   tagTypes: ["User", "Referrals", "AdminUsers"],
//   endpoints: (builder) => ({
//     login: builder.mutation({
//       query: (data) => ({
//         url: "/login",
//         method: "POST",
//         body: data,
//       }),
//       invalidatesTags: ["User"],
//     }),
//     register: builder.mutation({
//       query: (data) => ({
//         url: "/register",
//         method: "POST",
//         body: data,
//       }),
//     }),
//     logout: builder.mutation({
//       query: () => ({
//         url: "/logout",
//         method: "GET",
//       }),
//       async onQueryStarted(arg, { dispatch, queryFulfilled }) {
//         try {
//           await queryFulfilled;
//           // Logout olduqda lokal tokeni də silirik (MÜTLƏQDİR)
//           localStorage.removeItem("token");
//           dispatch(userApi.util.resetApiState());
//         } catch (err) {
//           console.error("Logout failed:", err);
//         }
//       },
//     }),
//     getUserProfile: builder.query({
//       query: () => "/me",
//       providesTags: ["User"],
//     }),
//     getMyReferrals: builder.query({
//       query: () => "/me/referrals",
//       providesTags: ["Referrals"],
//     }),
//     getMyNetworkTree: builder.query({
//       query: () => "/me/network-tree",
//       providesTags: ["Referrals"],
//     }),
//     getAllUsersAdmin: builder.query({
//       query: () => "/admin/users",
//       providesTags: ["AdminUsers"],
//     }),
//     updateReferralByAdmin: builder.mutation({
//       query: (body) => ({
//         url: "/admin/referral-update",
//         method: "PUT",
//         body,
//       }),
//       invalidatesTags: ["AdminUsers", "Referrals", "User"],
//     }),
//     forgotPassword: builder.mutation({
//       query: (data) => ({
//         url: "/password/forget",
//         method: "POST",
//         body: data,
//       }),
//     }),
//     resetPassword: builder.mutation({
//       query: ({ token, data }) => ({
//         url: `/password/reset/${token}`,
//         method: "PUT",
//         body: data,
//       }),
//     }),
//   }),
// });

// export const {
//   useLoginMutation,
//   useRegisterMutation,
//   useLogoutMutation,
//   useGetUserProfileQuery,
//   useForgotPasswordMutation,
//   useResetPasswordMutation,
//   useGetMyReferralsQuery,
//   useGetMyNetworkTreeQuery,
//   useGetAllUsersAdminQuery,
//   useUpdateReferralByAdminMutation,
// } = userApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ 
    baseUrl: "https://parfumes-1.onrender.com/api/v1", 
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        // Həm mobil, həm kompüter üçün tokeni başlıqlara əlavə edirik
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
    // Kompüterdə sessiyaların (cookie) işləməsi üçün
    credentials: "include" 
  }),
  tagTypes: ["User", "Referrals", "AdminUsers"],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
    register: builder.mutation({
      query: (data) => ({
        url: "/register",
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "GET",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          localStorage.removeItem("token");
          dispatch(userApi.util.resetApiState());
        } catch (err) {
          console.error("Logout xətası:", err);
        }
      },
    }),
    getUserProfile: builder.query({
      query: () => "/me",
      providesTags: ["User"],
    }),
    getMyReferrals: builder.query({
      query: () => "/me/referrals",
      providesTags: ["Referrals"],
    }),
    getMyNetworkTree: builder.query({
      query: () => "/me/network-tree",
      providesTags: ["Referrals"],
    }),
    getAllUsersAdmin: builder.query({
      query: () => "/admin/users",
      providesTags: ["AdminUsers"],
    }),
    updateReferralByAdmin: builder.mutation({
      query: (body) => ({
        url: "/admin/referral-update",
        method: "PUT",
        body,
      }),
      invalidatesTags: ["AdminUsers", "Referrals", "User"],
    }),
    forgotPassword: builder.mutation({
      query: (data) => ({
        url: "/password/forget",
        method: "POST",
        body: data,
      }),
    }),
    resetPassword: builder.mutation({
      query: ({ token, data }) => ({
        url: `/password/reset/${token}`,
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

// Bütün hook-ları buradan eksiksiz export edirik
export const {
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
  useGetUserProfileQuery,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useGetMyReferralsQuery,
  useGetMyNetworkTreeQuery, // <-- MyTree.jsx-dəki xətanı bu sətir düzəldir
  useGetAllUsersAdminQuery,
  useUpdateReferralByAdminMutation,
} = userApi;



