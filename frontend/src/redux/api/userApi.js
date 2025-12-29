// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const userApi = createApi({
//   reducerPath: "userApi",
//   baseQuery: fetchBaseQuery({ baseUrl: "/api/v1", credentials: "include" }),
//   endpoints: (builder) => ({
//     login: builder.mutation({
//       query: (data) => ({
//         url: "/login",
//         method: "POST",
//         body: data,
//       }),
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
//         credentials: "include", 
//       }),
//       async onQueryStarted(arg, { dispatch, queryFulfilled }) {
//         try {
//           await queryFulfilled;
//           dispatch(userApi.util.resetApiState());
//         } catch (err) {
//           console.error("Logout failed:", err);
//         }
//       },
//     }),
//     getUserProfile: builder.query({
//       query: () => "/me",
//     }),
//     forgotPassword: builder.mutation({
//       query: (data) => ({
//         url: "/password/forget",
//         method: "POST",
//         body: data,
//       }),
//     }),
    
//     // YENİ ƏLAVƏ OLUNMUŞ HİSSƏ
//     resetPassword: builder.mutation({
//       query: ({ token, data }) => ({
//         url: `/password/reset/${token}`,
//         method: "PUT",
//         body: data,
//       }),
//     }),
//     // YENİ ƏLAVƏ OLUNMUŞ HİSSƏ SONU

//   }),
// });

// export const {
//   useLoginMutation,
//   useRegisterMutation,
//   useLogoutMutation,
//   useGetUserProfileQuery,
//   useForgotPasswordMutation,
  
//   // YENİ ƏLAVƏ OLUNMUŞ HOOK
//   useResetPasswordMutation,
//   // YENİ ƏLAVƏ OLUNMUŞ HOOK SONU
// } = userApi;


// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const userApi = createApi({
//   reducerPath: "userApi",
//   baseQuery: fetchBaseQuery({ baseUrl: "/api/v1", credentials: "include" }),
//   tagTypes: ["User", "Referrals"], // Data yenilənəndə avtomatik refresh üçün tag-lər
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
//         credentials: "include", 
//       }),
//       async onQueryStarted(arg, { dispatch, queryFulfilled }) {
//         try {
//           await queryFulfilled;
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

//     // --- YENİ ƏLAVƏ EDİLƏN REFERAL ENDPOINT-İ ---
//     getMyReferrals: builder.query({
//       query: () => "/me/referrals",
//       providesTags: ["Referrals"], // Referal siyahısını buraya bağlayırıq
//     }),
//     // --------------------------------------------

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
  
//   // YENİ HOOK: Komponentlərdə istifadə üçün bunu export edirik
//   useGetMyReferralsQuery,
// } = userApi;


import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  // baseUrl hissəsini tam ünvanla dəyişdik
  baseQuery: fetchBaseQuery({ 
    baseUrl: "https://parfumes.onrender.com", 
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
          dispatch(userApi.util.resetApiState());
        } catch (err) {
          console.error("Logout failed:", err);
        }
      },
    }),
    getUserProfile: builder.query({
      query: () => "/me",
      providesTags: ["User"],
    }),

    // --- REFERAL VƏ ŞƏBƏKƏ ---
    getMyReferrals: builder.query({
      query: () => "/me/referrals",
      providesTags: ["Referrals"],
    }),

    getMyNetworkTree: builder.query({
      query: () => "/me/network-tree",
      providesTags: ["Referrals"],
    }),

    // --- ADMİN ENDPOINT-LƏRİ ---
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

    // --- PAROL YOLLARI ---
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

export const {
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
  useGetUserProfileQuery,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useGetMyReferralsQuery,
  useGetMyNetworkTreeQuery,
  useGetAllUsersAdminQuery,
  useUpdateReferralByAdminMutation,
} = userApi;
